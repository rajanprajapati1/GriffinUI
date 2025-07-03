import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// 🔁 Importing directly from main file
import HoverCard from '../../New/HoverCard'

type Story = StoryObj<typeof HoverCard.Root>

const meta: Meta<typeof HoverCard.Root> = {
  title: 'Components/New/HoverCard',
  component: HoverCard.Root,
  tags: ['autodocs'],
  argTypes: {
    openDelay: {
      control: { type: 'number', min: 0, max: 2000 },
      defaultValue: 300,
    },
    closeDelay: {
      control: { type: 'number', min: 0, max: 2000 },
      defaultValue: 200,
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  args: {
    openDelay: 300,
    closeDelay: 200,
  },
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <span style={{ color: '#3b82f6', cursor: 'pointer', textDecoration: 'underline' }}>Hover me</span>
        </HoverCard.Trigger>
        <HoverCard.Content align="center">
          <div style={{ maxWidth: '250px' }}>
            This is a basic hover card. It appears after a short delay.
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// With Custom Alignment (Start)
export const AlignStart: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <span style={{ color: '#3b82f6', cursor: 'pointer', textDecoration: 'underline' }}>Hover me (start)</span>
        </HoverCard.Trigger>
        <HoverCard.Content align="start">
          <div style={{ maxWidth: '250px' }}>
            This hover card is aligned to the start of the trigger element.
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// With Custom Alignment (End)
export const AlignEnd: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <span style={{ color: '#3b82f6', cursor: 'pointer', textDecoration: 'underline' }}>Hover me (end)</span>
        </HoverCard.Trigger>
        <HoverCard.Content align="end">
          <div style={{ maxWidth: '250px' }}>
            This hover card is aligned to the end of the trigger element.
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// Without Delay
export const NoDelay: Story = {
  args: {
    openDelay: 0,
    closeDelay: 0,
  },
  render: (args) => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root {...args}>
        <HoverCard.Trigger>
          <span style={{ color: '#3b82f6', cursor: 'pointer', textDecoration: 'underline' }}>Hover me (no delay)</span>
        </HoverCard.Trigger>
        <HoverCard.Content align="center">
          <div style={{ maxWidth: '250px' }}>
            This hover card opens instantly without any delay.
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// With asChild Trigger
export const WithAsChild: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
            Hover Me (asChild)
          </button>
        </HoverCard.Trigger>
        <HoverCard.Content align="center">
          <div style={{ maxWidth: '250px' }}>
            This hover card uses <code>asChild</code> to wrap a button.
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// Complex Content with Formatting
export const WithComplexContent: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <span style={{ color: '#3b82f6', cursor: 'pointer', textDecoration: 'underline' }}>Product Preview</span>
        </HoverCard.Trigger>
        <HoverCard.Content align="center" style={{ width: '300px' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <img
              src="https://via.placeholder.com/64 "
              alt="Product preview"
              style={{ width: '64px', height: '64px', borderRadius: '0.375rem' }}
            />
            <div>
              <h3 style={{ margin: '0 0 0.25rem', fontWeight: 'bold' }}>Premium Widget</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>
                A high-quality product that boosts performance by 300%.
              </p>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}

// Fully Customized
export const FullCustomExample: Story = {
  args: {
    openDelay: 500,
    closeDelay: 300,
  },
  render: (args) => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <HoverCard.Root {...args}>
        <HoverCard.Trigger asChild>
          <a href="#" style={{ color: '#3b82f6', textDecoration: 'underline', cursor: 'pointer' }}>
            Hover for User Info
          </a>
        </HoverCard.Trigger>
        <HoverCard.Content align="center" style={{ boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '300px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src="https://via.placeholder.com/64 "
                alt="User Avatar"
                style={{ width: '64px', height: '64px', borderRadius: '9999px' }}
              />
              <div>
                <h3 style={{ margin: '0 0 0.25rem', fontWeight: 'bold' }}>Jane Doe</h3>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Senior Product Designer</p>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563' }}>
              Jane has 8 years of experience in UI/UX design and leads our design team.
            </p>
            <div style={{ marginTop: '0.5rem', textAlign: 'right' }}>
              <button
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                View Profile
              </button>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
}