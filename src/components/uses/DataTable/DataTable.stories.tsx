import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import DataTable from '../../New/DataTable'

type Person = {
  id: number
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
}

const meta: Meta<typeof DataTable> = {
  title: 'Components/New/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    pagination: {
      control: 'boolean',
      defaultValue: true,
    },
    pageSize: {
      control: { type: 'number', min: 1, max: 100 },
      defaultValue: 5,
    },
    sortable: {
      control: 'boolean',
      defaultValue: true,
    },
    selectable: {
      control: 'boolean',
      defaultValue: true,
    },
  },
}

export default meta

// Sample Data
const sampleData: Person[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dana White', email: 'dana@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Editor', status: 'Inactive' },
  { id: 6, name: 'Fiona Carter', email: 'fiona@example.com', role: 'Viewer', status: 'Active' },
]

// Basic Example
export const Default: StoryObj<typeof DataTable> = {
  args: {
    columns: [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
      { header: 'Role', accessor: 'role' },
      { header: 'Status', accessor: 'status' },
    ],
    data: sampleData,
    rowKey: 'id',
  },
}

// With Custom Cell Renderers
export const WithCustomCells: StoryObj<typeof DataTable> = {
  args: {
    columns: [
      {
        header: 'Name',
        accessor: 'name',
        cell: (row) => <strong>{row.name}</strong>,
      },
      {
        header: 'Email',
        accessor: 'email',
        cell: (row) => (
          <a href={`mailto:${row.email}`} style={{ color: '#3b82f6' }}>
            {row.email}
          </a>
        ),
      },
      {
        header: 'Role',
        accessor: 'role',
      },
      {
        header: 'Status',
        accessor: 'status',
        cell: (row) => (
          <span
            style={{
              color: row.status === 'Active' ? '#10b981' : '#ef4444',
              fontWeight: 600,
            }}
          >
            {row.status}
          </span>
        ),
      },
    ],
    data: sampleData,
    rowKey: 'id',
  },
}

// Without Pagination
export const NoPagination: StoryObj<typeof DataTable> = {
  args: {
    pagination: false,
    columns: [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
      { header: 'Role', accessor: 'role' },
      { header: 'Status', accessor: 'status' },
    ],
    data: sampleData,
    rowKey: 'id',
  },
}

// With Sorting Disabled
export const NoSorting: StoryObj<typeof DataTable> = {
  args: {
    sortable: false,
    columns: [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
      { header: 'Role', accessor: 'role' },
      { header: 'Status', accessor: 'status' },
    ],
    data: sampleData,
    rowKey: 'id',
  },
}

// With Selection Disabled
export const NoSelection: StoryObj<typeof DataTable> = {
  args: {
    selectable: false,
    columns: [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
      { header: 'Role', accessor: 'role' },
      { header: 'Status', accessor: 'status' },
    ],
    data: sampleData,
    rowKey: 'id',
  },
}

// Controlled Row Click
export const WithRowClick: StoryObj<typeof DataTable> = {
  render: () => {
    const [selectedRow, setSelectedRow] = useState<Person | null>(null)

    return (
      <div>
        {selectedRow && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
            Selected: <strong>{selectedRow.name}</strong>
          </div>
        )}
        <DataTable
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Email', accessor: 'email' },
            { header: 'Role', accessor: 'role' },
            { header: 'Status', accessor: 'status' },
          ]}
          data={sampleData}
          rowKey="id"
          onRowClick={(row) => setSelectedRow(row)}
        />
      </div>
    )
  },
}

// Controlled Selection
export const WithControlledSelection: StoryObj<typeof DataTable> = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([])

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Selected:</strong> {selectedRows.length} row(s)
        </div>
        <DataTable
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Email', accessor: 'email' },
            { header: 'Role', accessor: 'role' },
            { header: 'Status', accessor: 'status' },
          ]}
          data={sampleData}
          rowKey="id"
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
        />
      </div>
    )
  },
}

// Fully Customized
export const FullCustomExample: StoryObj<typeof DataTable> = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([])
    const [sortBy, setSortBy] = useState<'name' | 'role' | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortBy) return 0
      const aValue = a[sortBy]
      const bValue = b[sortBy]
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      return 0
    })

    const handleSort = (column: any) => {
      if (column.accessor === sortBy) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
      } else {
        setSortBy(column.accessor)
        setSortDirection('asc')
      }
    }

    return (
      <DataTable
        columns={[
          {
            header: 'Name',
            accessor: 'name',
            sortable: true,
            width: '200px',
          },
          {
            header: 'Email',
            accessor: 'email',
            cell: (row) => (
              <a href={`mailto:${row.email}`} style={{ color: '#3b82f6' }}>
                {row.email}
              </a>
            ),
          },
          {
            header: 'Role',
            accessor: 'role',
            sortable: true,
          },
          {
            header: 'Status',
            accessor: 'status',
            cell: (row) => (
              <span
                style={{
                  color: row.status === 'Active' ? '#10b981' : '#ef4444',
                  fontWeight: 600,
                }}
              >
                {row.status}
              </span>
            ),
          },
        ]}
        data={sortedData}
        rowKey="id"
        sortable
        onSort={(config) => {
          if (config.key) {
            handleSort({ accessor: config.key })
          }
        }}
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        pageSize={3}
        pagination
      />
    )
  },
}