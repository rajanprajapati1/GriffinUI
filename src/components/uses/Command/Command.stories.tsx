import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Command from '../../New/Command'

type Story = StoryObj<typeof Command.Root>

const meta: Meta<typeof Command.Root> = {
  title: 'Components/New/Command',
  component: Command.Root,
  tags: ['autodocs'],
  argTypes: {
    shouldFilter: {
      control: 'boolean',
      defaultValue: true,
    },
    loop: {
      control: 'boolean',
      defaultValue: true,
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  render: () => (
    <Command.Root>
      <Command.Input placeholder="Type a command..." />
      <Command.List>
        <Command.Group heading="Actions">
          <Command.Item value="create">Create New Project</Command.Item>
          <Command.Item value="edit">Edit Selected</Command.Item>
          <Command.Item value="delete">Delete Selected</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Navigation">
          <Command.Item value="dashboard">Go to Dashboard</Command.Item>
          <Command.Item value="settings">Open Settings</Command.Item>
        </Command.Group>
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Root>
  ),
}

// With Controlled Input Value
export const ControlledInput: Story = {
  render: () => {
    const [inputValue, setInputValue] = useState('')

    return (
      <Command.Root>
        <Command.Input
          placeholder="Search..."
          value={inputValue}
          onValueChange={setInputValue}
        />
        <Command.List>
          <Command.Item value="apple">Apple</Command.Item>
          <Command.Item value="banana">Banana</Command.Item>
          <Command.Item value="cherry">Cherry</Command.Item>
          <Command.Empty>No fruits found.</Command.Empty>
        </Command.List>
      </Command.Root>
    )
  },
}

// Without Filtering
export const NoFiltering: Story = {
  args: {
    shouldFilter: false,
  },
  render: (args) => (
    <Command.Root {...args}>
      <Command.Input placeholder="All items shown" />
      <Command.List>
        <Command.Item value="one">One</Command.Item>
        <Command.Item value="two">Two</Command.Item>
        <Command.Item value="three">Three</Command.Item>
      </Command.List>
    </Command.Root>
  ),
}

// Keyboard Loop Disabled
export const NoKeyboardLoop: Story = {
  args: {
    loop: false,
  },
  render: (args) => (
    <Command.Root {...args}>
      <Command.Input placeholder="Arrow keys won't loop" />
      <Command.List>
        <Command.Item value="up">Up</Command.Item>
        <Command.Item value="middle">Middle</Command.Item>
        <Command.Item value="down">Down</Command.Item>
      </Command.List>
    </Command.Root>
  ),
}

// With Dynamic Selection
export const DynamicSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState("")

    return (
      <Command.Root>
        <Command.Input placeholder="Select an option" autoFocus />
        <Command.List>
          <Command.Item onSelect={(value) => setSelected(value)} value="option1">
            Option One
          </Command.Item>
          <Command.Item onSelect={(value) => setSelected(value)} value="option2">
            Option Two
          </Command.Item>
          <Command.Item onSelect={(value) => setSelected(value)} value="option3">
            Option Three
          </Command.Item>
          <Command.Empty>No options matched.</Command.Empty>
        </Command.List>
        <div style={{ padding: "1rem", fontSize: "0.9rem", color: "#6b7280" }}>
          Selected: {selected || "None"}
        </div>
      </Command.Root>
    )
  },
}

// Grouped Items with Separator
export const GroupedWithSeparator: Story = {
  render: () => (
    <Command.Root label="Main Command Palette">
      <Command.Input placeholder="Grouped commands..." />
      <Command.List>
        <Command.Group heading="System">
          <Command.Item value="restart">Restart</Command.Item>
          <Command.Item value="shutdown">Shutdown</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="User">
          <Command.Item value="login">Login</Command.Item>
          <Command.Item value="logout">Logout</Command.Item>
        </Command.Group>
        <Command.Empty>No commands match your search.</Command.Empty>
      </Command.List>
    </Command.Root>
  ),
}

// Fully Customized
export const FullCustomExample: Story = {
  render: () => (
    <Command.Root>
      <Command.Input placeholder="Search actions or navigate..." autoFocus />
      <Command.List>
        <Command.Group heading="Actions">
          <Command.Item value="newFile">New File</Command.Item>
          <Command.Item value="save">Save</Command.Item>
          <Command.Item value="saveAs">Save As...</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Navigation">
          <Command.Item value="home">Home</Command.Item>
          <Command.Item value="settings">Settings</Command.Item>
          <Command.Item value="help">Help</Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Other">
          <Command.Item value="exit" disabled>
            Exit (disabled)
          </Command.Item>
        </Command.Group>
        <Command.Empty>No results found.</Command.Empty>
      </Command.List>
    </Command.Root>
  ),
}