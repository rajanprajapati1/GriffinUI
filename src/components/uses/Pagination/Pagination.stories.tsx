import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import Pagination from '../../New/Pagination'

type Story = StoryObj<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  title: 'Components/New/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      defaultValue: 1,
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      defaultValue: 10,
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 5 },
      defaultValue: 1,
    },
    showFirstLast: {
      control: 'boolean',
      defaultValue: true,
    },
    showPrevNext: {
      control: 'boolean',
      defaultValue: true,
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
      defaultValue: 'md',
    },
    variant: {
      control: { type: 'radio', options: ['outline', 'filled'] },
      defaultValue: 'outline',
    },
    shape: {
      control: { type: 'radio', options: ['rounded', 'square', 'circle'] },
      defaultValue: 'rounded',
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md',
    variant: 'outline',
    shape: 'rounded',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)

    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

// Small Size - Outline Style
export const SmallOutline: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    size: 'sm',
    variant: 'outline',
    shape: 'rounded',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

// Large Filled Buttons
export const LargeFilled: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 2,
    variant: 'filled',
    shape: 'circle',
    size: 'lg',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

// Minimal Square Pagination
export const MinimalSquare: Story = {
  args: {
    currentPage: 1,
    totalPages: 7,
    showFirstLast: false,
    showPrevNext: true,
    variant: 'outline',
    shape: 'square',
    size: 'md',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

// With Many Pages (Ellipsis Logic)
export const WithEllipsis: Story = {
  args: {
    currentPage: 5,
    totalPages: 50,
    siblingCount: 2,
    size: 'md',
    variant: 'outline',
    shape: 'rounded',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

// Controlled Usage Example
export const ControlledExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 15

    return (
      <div style={{ padding: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}>Current Page: <strong>{currentPage}</strong></p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={1}
          showFirstLast={true}
          showPrevNext={true}
          size="md"
          variant="outline"
          shape="rounded"
        />
      </div>
    )
  },
}

// Fully Customized Example
export const FullCustomExample: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 2,
    showFirstLast: true,
    showPrevNext: true,
    size: 'lg',
    variant: 'filled',
    shape: 'circle',
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}