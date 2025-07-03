import type React from "react"
import styled, { css } from "styled-components"

type TableProps = {
  children: React.ReactNode
  variant?: "default" | "striped" | "bordered" | "card"
  size?: "sm" | "md" | "lg"
  hoverable?: boolean
  className?: string
}

type TableHeaderProps = {
  children: React.ReactNode
  className?: string
}

type TableBodyProps = {
  children: React.ReactNode
  className?: string
}

type TableFooterProps = {
  children: React.ReactNode
  className?: string
}

type TableRowProps = {
  children: React.ReactNode
  selected?: boolean
  className?: string
}

type TableCellProps = {
  children: React.ReactNode
  align?: "left" | "center" | "right"
  className?: string
}

type TableHeadProps = {
  children: React.ReactNode
  className?: string
}

type StyledTableProps = {
  variant: "default" | "striped" | "bordered" | "card"
  size: "sm" | "md" | "lg"
  hoverable?: boolean
}

const sizeStyles = {
  sm: css`
    font-size: 0.75rem;
    
    th, td {
      padding: 0.5rem;
    }
  `,
  md: css`
    font-size: 0.875rem;
    
    th, td {
      padding: 0.75rem 1rem;
    }
  `,
  lg: css`
    font-size: 1rem;
    
    th, td {
      padding: 1rem 1.25rem;
    }
  `,
}

const variantStyles = {
  default: css`
    border-collapse: collapse;
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
  `,
  striped: css`
    border-collapse: collapse;
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f9fafb;
    }
  `,
  bordered: css`
    border-collapse: collapse;
    border: 1px solid #e5e7eb;
    
    th, td {
      border: 1px solid #e5e7eb;
    }
  `,
  card: css`
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    
    thead {
      background-color: #f9fafb;
    }
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
  `,
}

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant]}
  
  ${(props) =>
    props.hoverable &&
    css`
    tbody tr:hover {
      background-color: #f3f4f6;
    }
  `}
`

const StyledTableHeader = styled.thead`
  background-color: #f9fafb;
  
  th {
    font-weight: 600;
    color: #374151;
    text-align: left;
    white-space: nowrap;
  }
`

const StyledTableBody = styled.tbody`
  color: #4b5563;
`

const StyledTableFooter = styled.tfoot`
  background-color: #f9fafb;
  font-weight: 500;
  color: #374151;
  
  td {
    border-top: 1px solid #e5e7eb;
  }
`

const StyledTableRow = styled.tr<{ selected?: boolean }>`
  ${(props) =>
    props.selected &&
    css`
    background-color: #eff6ff !important;
  `}
`

const StyledTableCell = styled.td<{ align?: "left" | "center" | "right" }>`
  text-align: ${(props) => props.align || "left"};
`

const StyledTableHead = styled.th<{ align?: "left" | "center" | "right" }>`
  text-align: ${(props) => props.align || "left"};
`

const Table: React.FC<TableProps> = ({ children, variant = "default", size = "md", hoverable = false, className }) => {
  return (
    <StyledTable variant={variant} size={size} hoverable={hoverable} className={className}>
      {children}
    </StyledTable>
  )
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return <StyledTableHeader className={className}>{children}</StyledTableHeader>
}

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return <StyledTableBody className={className}>{children}</StyledTableBody>
}

const TableFooter: React.FC<TableFooterProps> = ({ children, className }) => {
  return <StyledTableFooter className={className}>{children}</StyledTableFooter>
}

const TableRow: React.FC<TableRowProps> = ({ children, selected, className }) => {
  return (
    <StyledTableRow selected={selected} className={className}>
      {children}
    </StyledTableRow>
  )
}

const TableCell: React.FC<TableCellProps> = ({ children, align, className }) => {
  return (
    <StyledTableCell align={align} className={className}>
      {children}
    </StyledTableCell>
  )
}

const TableHead: React.FC<TableCellProps> = ({ children, align, className }) => {
  return (
    <StyledTableHead align={align} className={className}>
      {children}
    </StyledTableHead>
  )
}

interface TableComponent extends React.FC<TableProps> {
  Header: React.FC<TableHeaderProps>
  Body: React.FC<TableBodyProps>
  Footer: React.FC<TableFooterProps>
  Row: React.FC<TableRowProps>
  Cell: React.FC<TableCellProps>
  Head: React.FC<TableCellProps>
}

const TableComponent: TableComponent = ({ children, variant = "default", size = "md", hoverable = false, className }) => {
  return (
    <StyledTable variant={variant} size={size} hoverable={hoverable} className={className}>
      {children}
    </StyledTable>
  )
}

TableComponent.Header = TableHeader
TableComponent.Body = TableBody
TableComponent.Footer = TableFooter
TableComponent.Row = TableRow
TableComponent.Cell = TableCell
TableComponent.Head = TableHead

export default TableComponent
