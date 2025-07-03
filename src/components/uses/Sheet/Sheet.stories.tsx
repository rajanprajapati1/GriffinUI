import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import Sheet from '../../New/Sheet'

type Story = StoryObj<typeof Sheet.Root>

const meta: Meta<typeof Sheet.Root> = {
  title: 'Components/New/Sheet',
  component: Sheet.Root,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: {
        type: 'radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'right',
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', 'xl', 'full'],
      },
      defaultValue: 'md',
    },
    showCloseButton: {
      control: 'boolean',
      defaultValue: true,
    },
  },
}

export default meta

// Basic Example - Right Side Sheet
export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger>Open Sheet</Sheet.Trigger>
        <Sheet.Content side="right" size="md">
          <Sheet.Header>
            <Sheet.Title>Default Sheet</Sheet.Title>
            <Sheet.Description>This is a basic sheet panel on the right.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <p>Sheet content goes here.</p>
            <p>You can add any kind of content like forms, lists, or buttons.</p>
          </Sheet.Body>
          <Sheet.Footer>
            <button style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>Cancel</button>
            <button style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white' }}>Save</button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}

// Top Sheet with No Close Button
export const TopSheetNoClose: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open Top Sheet</button>
        </Sheet.Trigger>
        <Sheet.Content side="top" size="full" showCloseButton={false}>
          <Sheet.Header>
            <Sheet.Title>Top Sheet</Sheet.Title>
            <Sheet.Description>This sheet opens from the top and has no close button.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <p>This could be used for full-screen mobile actions or alerts.</p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}

// Left Sheet with Custom Trigger
export const LeftSheetWithCustomTrigger: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button style={{ marginBottom: '1rem' }}>Open Left Panel</button>
        </Sheet.Trigger>
        <Sheet.Content side="left" size="lg">
          <Sheet.Header>
            <Sheet.Title>Sidebar Menu</Sheet.Title>
            <Sheet.Description>Use this space for navigation or filters.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ padding: '0.75rem 0' }}>Dashboard</li>
              <li style={{ padding: '0.75rem 0' }}>Settings</li>
              <li style={{ padding: '0.75rem 0' }}>Profile</li>
            </ul>
          </Sheet.Body>
          <Sheet.Footer>
            <button style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white' }}>Logout</button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}

// Bottom Sheet Example
export const BottomSheet: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open Bottom Sheet</button>
        </Sheet.Trigger>
        <Sheet.Content side="bottom" size="sm">
          <Sheet.Header>
            <Sheet.Title>Mobile Bottom Sheet</Sheet.Title>
            <Sheet.Description>Great for small popups or quick actions.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <p>This mimics mobile-style bottom sheets.</p>
          </Sheet.Body>
          <Sheet.Footer>
            <button style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white' }}>Confirm</button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}

// Full Width Sheet Example
export const FullWidthSheet: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open Full Width Sheet</button>
        </Sheet.Trigger>
        <Sheet.Content side="right" size="full">
          <Sheet.Header>
            <Sheet.Title>Full Width Panel</Sheet.Title>
            <Sheet.Description>This sheet takes up the entire screen width.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <h3 style={{ margin: '0 0 1rem 0' }}>Full Screen Content</h3>
            <p style={{ marginBottom: '1rem' }}>You can use this for large forms, media previews, or settings panels.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white' }}>Primary Action</button>
              <button style={{ padding: '0.5rem 1rem', background: '#f3f4f6', color: '#111827' }}>Secondary</button>
            </div>
          </Sheet.Body>
          <Sheet.Footer>
            <button style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white' }}>Delete</button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}

// Controlled Sheet Example
export const ControlledSheetExample: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setOpen(true)}>Open via External State</button>

        <Sheet.Root>
          <Sheet.Content
            side="right"
            size="md"
            open={open}
            onClose={() => setOpen(false)}
            showCloseButton
          >
            <Sheet.Header>
              <Sheet.Title>Controlled Sheet</Sheet.Title>
              <Sheet.Description>This sheet uses external state to manage visibility.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <p>You can open/close this sheet using both internal and external logic.</p>
            </Sheet.Body>
            <Sheet.Footer>
              <button onClick={() => setOpen(false)} style={{ padding: '0.5rem 1rem' }}>
                Cancel
              </button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    )
  },
}

// Fully Customized Sheet
export const FullCustomExample: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button style={{ marginBottom: '1rem' }}>Open Settings</button>
        </Sheet.Trigger>
        <Sheet.Content side="right" size="xl">
          <Sheet.Header>
            <Sheet.Title>User Preferences</Sheet.Title>
            <Sheet.Description>Adjust your account settings below</Sheet.Description>
          </Sheet.Header>
          <Sheet.Body>
            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Theme</h4>
              <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}>
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </section>

            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Notifications</h4>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input type="checkbox" /> Email Notifications
              </label>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input type="checkbox" /> Push Notifications
              </label>
            </section>

            <section>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Language</h4>
              <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </section>
          </Sheet.Body>
          <Sheet.Footer>
            <button
              onClick={() => alert('Saved preferences')}
              style={{
                padding: '0.5rem 1rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
              }}
            >
              Save Changes
            </button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  ),
}