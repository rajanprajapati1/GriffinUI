import React, { useState } from "react"
import styled, { css } from "styled-components"

type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  pagination?: boolean
  pageSize?: number
  sortable?: boolean
  selectable?: boolean
  onRowClick?: (row: T) => void
  onSelectionChange?: (selectedRows: T[]) => void
  onSort?: (config: SortConfig<T>) => void
  selectedRows?: T[]
  className?: string
  rowKey: keyof T
}

type Column<T> = {
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
  width?: string
  sortable?: boolean
  cell?: (row: T) => React.ReactNode
}

type SortDirection = "asc" | "desc" | null

type SortConfig<T> = {
  key: keyof T | null
  direction: SortDirection
}

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`

const TableHead = styled.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`

const TableHeadCell = styled.th<{ width?: string; sortable?: boolean }>`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
  ${(props) => props.width && `width: ${props.width};`}
  
  ${(props) =>
    props.sortable &&
    css`
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`

const TableBody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f9fafb;
  }
`

const TableRow = styled.tr<{ clickable?: boolean; selected?: boolean }>`
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
  
  ${(props) =>
    props.clickable &&
    css`
    cursor: pointer;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${(props) =>
    props.selected &&
    css`
    background-color: #eff6ff !important;
  `}
`

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  color: #4b5563;
`

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
`

const PageInfo = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`

const PaginationButtons = styled.div`
  display: flex;
  gap: 0.25rem;
`

const PaginationButton = styled.button<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  background-color: ${(props) => (props.active ? "#3b82f6" : "white")};
  color: ${(props) => (props.active ? "white" : "#4b5563")};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${(props) => (props.active ? "#2563eb" : "#f3f4f6")};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  cursor: pointer;
`

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pagination = false,
  pageSize = 10,
  sortable = false,
  selectable = false,
  onRowClick,
  onSelectionChange,
  onSort,
  selectedRows: controlledSelectedRows,
  className,
  rowKey,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: null })
  const [internalSelectedRows, setInternalSelectedRows] = useState<T[]>([])

  // Use controlled selectedRows if provided, otherwise use internal state
  const selectedRows = controlledSelectedRows || internalSelectedRows

  // Sorting logic
  const sortedData = React.useMemo(() => {
    const sortableData = [...data]
    if (sortConfig.key && sortConfig.direction) {
      sortableData.sort((a, b) => {
        const key = sortConfig.key as keyof T
        const aValue = a[key]
        const bValue = b[key]

        if (aValue === bValue) return 0

        if (sortConfig.direction === "asc") {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })
    }
    return sortableData
  }, [data, sortConfig])

  // Pagination logic
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData
    const startIndex = (currentPage - 1) * pageSize
    return sortedData.slice(startIndex, startIndex + pageSize)
  }, [sortedData, pagination, currentPage, pageSize])

  const totalPages = Math.ceil(data.length / pageSize)

  const handleSort = (column: Column<T>) => {
    if (!sortable || !column.sortable) return

    const accessor = typeof column.accessor === "function" ? null : column.accessor

    if (!accessor) return

    let direction: SortDirection = "asc"

    if (sortConfig.key === accessor) {
      if (sortConfig.direction === "asc") {
        direction = "desc"
      } else if (sortConfig.direction === "desc") {
        direction = null
      }
    }

    const newSortConfig = { key: accessor, direction }
    setSortConfig(newSortConfig)

    // Call onSort callback if provided
    if (onSort) {
      onSort(newSortConfig)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleRowSelection = (row: T, isSelected: boolean) => {
    let newSelectedRows: T[]

    if (isSelected) {
      newSelectedRows = [...selectedRows, row]
    } else {
      newSelectedRows = selectedRows.filter((r) => r[rowKey] !== row[rowKey])
    }

    // Update internal state only if not controlled
    if (!controlledSelectedRows) {
      setInternalSelectedRows(newSelectedRows)
    }

    if (onSelectionChange) {
      onSelectionChange(newSelectedRows)
    }
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isSelected = e.target.checked
    const newSelectedRows = isSelected ? [...paginatedData] : []

    // Update internal state only if not controlled
    if (!controlledSelectedRows) {
      setInternalSelectedRows(newSelectedRows)
    }

    if (onSelectionChange) {
      onSelectionChange(newSelectedRows)
    }
  }

  const isRowSelected = (row: T) => {
    return selectedRows.some((r) => r[rowKey] === row[rowKey])
  }

  const renderSortIcon = (column: Column<T>) => {
    if (!sortable || !column.sortable || typeof column.accessor === "function") return null

    const accessor = column.accessor as keyof T

    if (sortConfig.key !== accessor) {
      return <span style={{ marginLeft: "0.5rem", opacity: 0.3 }}>↕</span>
    }

    return (
      <span style={{ marginLeft: "0.5rem" }}>
        {sortConfig.direction === "asc" ? "↑" : sortConfig.direction === "desc" ? "↓" : "↕"}
      </span>
    )
  }

  return (
    <div className={className}>
      <TableContainer>
        <StyledTable>
          <TableHead>
            <tr>
              {selectable && (
                <TableHeadCell width="40px">
                  <Checkbox
                    checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                  />
                </TableHeadCell>
              )}
              {columns.map((column, index) => (
                <TableHeadCell
                  key={index}
                  width={column.width}
                  sortable={sortable && column.sortable !== false && typeof column.accessor !== "function"}
                  onClick={() => handleSort(column)}
                >
                  {column.header}
                  {renderSortIcon(column)}
                </TableHeadCell>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                clickable={!!onRowClick}
                selected={isRowSelected(row)}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {selectable && (
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={isRowSelected(row)}
                      onChange={(e) => handleRowSelection(row, e.target.checked)}
                    />
                  </TableCell>
                )}
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.cell
                      ? column.cell(row)
                      : typeof column.accessor === "function"
                        ? column.accessor(row)
                        : row[column.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
        {pagination && totalPages > 1 && (
          <PaginationContainer>
            <PageInfo>
              Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, data.length)} of{" "}
              {data.length} entries
            </PageInfo>
            <PaginationButtons>
              <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                ←
              </PaginationButton>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationButton key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
                  {page}
                </PaginationButton>
              ))}
              <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                →
              </PaginationButton>
            </PaginationButtons>
          </PaginationContainer>
        )}
      </TableContainer>
    </div>
  )
}

export default DataTable