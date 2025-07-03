import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// 🔁 Importing directly from main file
import Table from '../../New/Table'

type Story = StoryObj<typeof Table>

const meta: Meta<typeof Table> = {
  title: 'Components/New/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['default', 'striped', 'bordered', 'card'] },
      defaultValue: 'default',
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
      defaultValue: 'md',
    },
    hoverable: {
      control: 'boolean',
      defaultValue: false,
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    hoverable: false,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head align="right">Role</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
            <Table.Cell align="right">Admin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell align="right">Editor</Table.Cell>
          </Table.Row>
          <Table.Row selected>
            <Table.Cell>Charlie Brown</Table.Cell>
            <Table.Cell>charlie@example.com</Table.Cell>
            <Table.Cell align="right">Viewer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

// Striped Variant Example
export const StripedTable: Story = {
  args: {
    variant: 'striped',
    size: 'md',
    hoverable: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Role</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell>Editor</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charlie Brown</Table.Cell>
            <Table.Cell>charlie@example.com</Table.Cell>
            <Table.Cell>Viewer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Dana White</Table.Cell>
            <Table.Cell>dana@example.com</Table.Cell>
            <Table.Cell>Guest</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

// Bordered Variant Example
export const BorderedTable: Story = {
  args: {
    variant: 'bordered',
    size: 'lg',
    hoverable: false,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Department</Table.Head>
            <Table.Head align="center">Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
            <Table.Cell>Product</Table.Cell>
            <Table.Cell align="center">
              <span style={{ color: '#10b981' }}>Active</span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell>Engineering</Table.Cell>
            <Table.Cell align="center">
              <span style={{ color: '#ef4444' }}>Inactive</span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total Users</Table.Cell>
            <Table.Cell align="center">2</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  ),
}

// Card Style Table
export const CardStyleTable: Story = {
  args: {
    variant: 'card',
    size: 'md',
    hoverable: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Product</Table.Head>
            <Table.Head align="right">Price</Table.Head>
            <Table.Head align="center">Stock</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Laptop Pro</Table.Cell>
            <Table.Cell align="right">$1,500.00</Table.Cell>
            <Table.Cell align="center">In Stock</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Wireless Mouse</Table.Cell>
            <Table.Cell align="right">$79.99</Table.Cell>
            <Table.Cell align="center">Out of Stock</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

// Small Table Example
export const SmallTable: Story = {
  args: {
    variant: 'striped',
    size: 'sm',
    hoverable: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

// Selected Row Example
export const WithSelectedRow: Story = {
  args: {
    variant: 'default',
    size: 'md',
    hoverable: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Role</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>
          <Table.Row selected>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell>Editor</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charlie Brown</Table.Cell>
            <Table.Cell>charlie@example.com</Table.Cell>
            <Table.Cell>Viewer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

// Fully Customized Table
export const FullCustomExample: Story = {
  args: {
    variant: 'card',
    size: 'lg',
    hoverable: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem' }}>
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Customer</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Plan</Table.Head>
            <Table.Head align="center">Status</Table.Head>
            <Table.Head>Last Active</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice Johnson</Table.Cell>
            <Table.Cell>alice@example.com</Table.Cell>
            <Table.Cell>Pro Plan</Table.Cell>
            <Table.Cell align="center">
              <span style={{ color: '#10b981', fontWeight: 600 }}>Active</span>
            </Table.Cell>
            <Table.Cell>2 days ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob Smith</Table.Cell>
            <Table.Cell>bob@example.com</Table.Cell>
            <Table.Cell>Free Plan</Table.Cell>
            <Table.Cell align="center">
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Suspended</span>
            </Table.Cell>
            <Table.Cell>Never</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charlie Brown</Table.Cell>
            <Table.Cell>charlie@example.com</Table.Cell>
            <Table.Cell>Premium</Table.Cell>
            <Table.Cell align="center">
              <span style={{ color: '#10b981', fontWeight: 600 }}>Active</span>
            </Table.Cell>
            <Table.Cell>Today</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}