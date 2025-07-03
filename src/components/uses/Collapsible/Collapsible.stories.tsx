import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Collapsible from '../../New/Collapsible'

type Story = StoryObj<typeof Collapsible.Root>

const meta: Meta<typeof Collapsible.Root> = {
  title: 'Components/New/Collapsible',
  component: Collapsible.Root,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state if uncontrolled',
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    onOpenChange: {
      action: 'onOpenChange',
      table: {
        disable: true,
      },
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger>Toggle Me</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
          This content smoothly expands and collapses.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
}

// Controlled Example
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(!open)}>Toggle via External Button</button>
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <Collapsible.Trigger asChild>
            <span style={{ display: 'block', marginTop: '0.5rem', cursor: 'pointer', color: '#3b82f6' }}>
              Toggle Collapsible
            </span>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
              This collapsible is controlled by external state.
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </>
    )
  },
}

// With Custom Trigger Element
export const WithCustomTrigger: Story = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <button style={{ margin: '1rem 0', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '0.375rem' }}>
          Click to Expand
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>
          You can use any custom element as the trigger with <code>asChild</code>.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
}

// Start Open by Default
export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <Collapsible.Root {...args}>
      <Collapsible.Trigger>Default Open</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
          This collapsible starts open by default.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
}

// Complex Content with Dynamic Height
export const WithDynamicContent: Story = {
  render: () => {
    const [showMore, setShowMore] = useState(false)

    return (
      <Collapsible.Root>
        <Collapsible.Trigger>Toggle Section</Collapsible.Trigger>
        <Collapsible.Content>
          <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
            <p>This section has dynamic content that changes height.</p>
            <button onClick={() => setShowMore(!showMore)} style={{ marginBottom: '0.5rem' }}>
              {showMore ? 'Hide Details' : 'Show More'}
            </button>
            {showMore && <p>This part appears or disappears based on user interaction inside the collapsible content.</p>}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    )
  },
}