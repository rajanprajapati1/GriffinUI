import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// 🔁 Importing directly from main file
import Menubar from '../../New/Menubar'

type Story = StoryObj<typeof Menubar.Root>

const meta = {
  title: 'Components/New/Menubar',
  component: Menubar.Root,
  subcomponents: {
    Menu: Menubar.Menu,
    Trigger: Menubar.Trigger,
    Content: Menubar.Content,
    Item: Menubar.Item,
    Separator: Menubar.Separator,
    Group: Menubar.Group,
    CheckboxItem: Menubar.CheckboxItem,
    RadioGroup: Menubar.RadioGroup,
    RadioItem: Menubar.RadioItem,
    SubMenu: Menubar.SubMenu,
    SubTrigger: Menubar.SubTrigger,
    SubContent: Menubar.SubContent,
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

// Basic Example
export const Default: Story = {
  render: () => (
    <Menubar.Root>
      <Menubar.Menu value="file">
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('New File')}>New File</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Open')}>Open</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item onSelect={() => console.log('Save')}>Save</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Save As')}>Save As...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu value="edit">
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('Cut')}>Cut</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Copy')}>Copy</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Paste')}>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu value="help">
        <Menubar.Trigger>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('About')}>About</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
}

// With Checkbox Items
export const WithCheckboxes: Story = {
  render: () => (
    <Menubar.Root>
      <Menubar.Menu value="view">
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem
            checked={true}
            onCheckedChange={(checked) => console.log(`Show Grid: ${checked}`)}
          >
            Show Grid
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem
            checked={false}
            onCheckedChange={(checked) => console.log(`Snap to Grid: ${checked}`)}
          >
            Snap to Grid
          </Menubar.CheckboxItem>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
}

// With Radio Group (Single Select)
export const WithRadioGroup: Story = {
  render: () => (
    <Menubar.Root>
      <Menubar.Menu value="theme">
        <Menubar.Trigger>Theme</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value="light" onValueChange={(value) => console.log(`Theme changed to: ${value}`)}>
            <Menubar.RadioItem value="light">Light</Menubar.RadioItem>
            <Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>
            <Menubar.RadioItem value="system">System</Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
}

// With Nested SubMenus
export const WithSubMenus: Story = {
  render: () => (
    <Menubar.Root>
      <Menubar.Menu value="file">
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('New File')}>New File</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Open')}>Open</Menubar.Item>

          <Menubar.SubMenu>
            <Menubar.SubTrigger>Open Recent</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item onSelect={() => console.log('Open Recent File 1')}>File 1</Menubar.Item>
              <Menubar.Item onSelect={() => console.log('Open Recent File 2')}>File 2</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.SubMenu>

          <Menubar.Separator />

          <Menubar.Item onSelect={() => console.log('Exit')}>Exit</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
}

// Fully Customized Example
export const FullCustomExample: Story = {
  render: () => (
    <Menubar.Root style={{ marginBottom: '2rem' }}>
      <Menubar.Menu value="file">
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('New Project')}>
            New Project
          </Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Open Project')}>
            Open Project
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item onSelect={() => console.log('Save Project')}>
            Save
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu value="edit">
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('Undo')}>Undo</Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Redo')}>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item onSelect={() => console.log('Preferences')}>
            Preferences
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu value="view">
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value="default" onValueChange={(val) => console.log(`Layout: ${val}`)}>
            <Menubar.RadioItem value="default">Default Layout</Menubar.RadioItem>
            <Menubar.RadioItem value="vertical">Vertical Layout</Menubar.RadioItem>
            <Menubar.RadioItem value="horizontal">Horizontal Layout</Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Separator />

          <Menubar.CheckboxItem
            checked={true}
            onCheckedChange={(checked) => console.log(`Show Toolbar: ${checked}`)}
          >
            Show Toolbar
          </Menubar.CheckboxItem>
        </Menubar.Content>
      </Menubar.Menu>

      <Menubar.Menu value="help">
        <Menubar.Trigger>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item onSelect={() => console.log('Documentation')}>
            Documentation
          </Menubar.Item>
          <Menubar.Item onSelect={() => console.log('Support')}>
            Support
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item onSelect={() => console.log('About App')}>
            About
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  ),
}