import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import DropdownMenu from '../../New/DropdownMenu'

type Story = StoryObj<typeof DropdownMenu.Root>

const meta: Meta<typeof DropdownMenu.Root> = {
  title: 'Components/New/DropdownMenu',
  component: DropdownMenu.Root,
  tags: ['autodocs'],
}

export default meta

// Basic Example
export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onSelect={() => alert('New File')}>New File</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => alert('Open')}>Open</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item onSelect={() => alert('Save')}>Save</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => alert('Save As')}>Save As...</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
}

// With Checkbox Items
export const WithCheckboxes: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>View Options</DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.CheckboxItem checked={true} onCheckedChange={(checked) => alert(`Show Grid: ${checked}`)}>
            Show Grid
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} onCheckedChange={(checked) => alert(`Snap to Grid: ${checked}`)}>
            Snap to Grid
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={true} onCheckedChange={(checked) => alert(`Auto Align: ${checked}`)}>
            Auto Align
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
}

// With Radio Group (Single Select)
export const WithRadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('option1')

    return (
      <div style={{ padding: '2rem' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Select Theme</DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.RadioGroup value={selected} onValueChange={setSelected}>
              <DropdownMenu.RadioItem value="option1">Light Mode</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="option2">Dark Mode</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="option3">System Default</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    )
  },
}

// Grouped Items with Labels
export const WithGroupsAndLabels: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>File Actions</DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Group>
            <DropdownMenu.Label>General</DropdownMenu.Label>
            <DropdownMenu.Item>New File</DropdownMenu.Item>
            <DropdownMenu.Item>Open</DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Label>Export</DropdownMenu.Label>
            <DropdownMenu.Item>As PDF</DropdownMenu.Item>
            <DropdownMenu.Item>As DOCX</DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Item onSelect={() => alert('Exit')}>Exit</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
}

// Custom Trigger Element (asChild)
export const WithAsChildTrigger: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Custom Trigger Button</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onSelect={() => alert('Action 1')}>Action One</DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => alert('Action 2')}>Action Two</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
}

// Disabled Items
export const WithDisabledItems: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>More Actions</DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onSelect={() => alert('Enabled item')}>Enabled Item</DropdownMenu.Item>
          <DropdownMenu.Item disabled onSelect={() => alert('This should not trigger')}>
            Disabled Item
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item onSelect={() => alert('Another enabled item')}>Another Enabled Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
}

// Fully Customized
export const FullCustomExample: Story = {
  render: () => {
    const [theme, setTheme] = useState<string>('light')
    const [notifications, setNotifications] = useState<boolean>(true)

    return (
      <div style={{ padding: '2rem' }}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Settings</DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Group>
              <DropdownMenu.Label>Appearance</DropdownMenu.Label>
              <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenu.RadioItem value="light">Light Mode</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="dark">Dark Mode</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Label>Preferences</DropdownMenu.Label>
              <DropdownMenu.CheckboxItem checked={notifications} onCheckedChange={setNotifications}>
                Enable Notifications
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Item onSelect={() => alert('Logout clicked')}>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    )
  },
}