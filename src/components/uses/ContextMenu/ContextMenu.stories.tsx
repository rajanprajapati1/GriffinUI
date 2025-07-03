import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import ContextMenu from '../../New/ContextMenu';

type Story = StoryObj<typeof ContextMenu.Root>;

const meta: Meta<typeof ContextMenu.Root> = {
  title: 'Components/New/ContextMenu',
  component: ContextMenu.Root,
  tags: ['autodocs'],
};

export default meta;

// Basic Example
export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      Right-click anywhere to open the context menu.
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div
            style={{
              width: '100%',
              height: '150px',
              border: '2px dashed #ccc',
              marginTop: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            Right-click here
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content align="start">
          <ContextMenu.Item onSelect={() => alert('New File')}>New File</ContextMenu.Item>
          <ContextMenu.Item onSelect={() => alert('Open')}>Open</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item onSelect={() => alert('Copy')}>Copy</ContextMenu.Item>
          <ContextMenu.Item onSelect={() => alert('Paste')}>Paste</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};

// With Submenu
export const WithSubmenu: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div
            style={{
              width: '100%',
              height: '150px',
              border: '2px dashed #ccc',
              marginTop: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            Right-click here
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content align="start">
          <ContextMenu.Item onSelect={() => alert('Cut')}>Cut</ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>More Actions</ContextMenu.SubTrigger>
            <ContextMenu.SubContent sideOffset={8}>
              <ContextMenu.Item onSelect={() => alert('Save As')}>Save As...</ContextMenu.Item>
              <ContextMenu.Item onSelect={() => alert('Export')}>Export</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item onSelect={() => alert('Exit')}>Exit</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};

// With Disabled Items
export const WithDisabledItems: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div
            style={{
              width: '100%',
              height: '150px',
              border: '2px dashed #ccc',
              marginTop: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            Right-click here
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content align="start">
          <ContextMenu.Item onSelect={() => alert('Enabled item')}>Enabled Item</ContextMenu.Item>
          <ContextMenu.Item disabled onSelect={() => alert('This should not trigger')}>
            Disabled Item
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item onSelect={() => alert('Another enabled item')}>Another Enabled Item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};

// Center-Aligned Menu
export const CenterAligned: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <button>Right-click me</button>
        </ContextMenu.Trigger>
        <ContextMenu.Content align="center" sideOffset={10}>
          <ContextMenu.Item onSelect={() => alert('Align center menu')}>Centered Action</ContextMenu.Item>
          <ContextMenu.Item onSelect={() => alert('Another action')}>Another Action</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};

// Controlled Trigger via Child Element
export const WithAsChild: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger asChild>
          <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Right-click me (asChild)
          </button>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item onSelect={() => alert('Action 1')}>Action One</ContextMenu.Item>
          <ContextMenu.Item onSelect={() => alert('Action 2')}>Action Two</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};

// Fully Customized
export const FullCustomExample: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div
            style={{
              width: '100%',
              height: '150px',
              border: '2px dashed #ccc',
              marginTop: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb',
            }}
          >
            Right-click for custom menu
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content align="end" sideOffset={12}>
          <ContextMenu.Item onSelect={() => alert('Edit')}>Edit</ContextMenu.Item>
          <ContextMenu.Item onSelect={() => alert('Duplicate')}>Duplicate</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>Delete Options</ContextMenu.SubTrigger>
            <ContextMenu.SubContent sideOffset={8}>
              <ContextMenu.Item onSelect={() => alert('Soft Delete')}>Soft Delete</ContextMenu.Item>
              <ContextMenu.Item onSelect={() => alert('Hard Delete')}>Hard Delete</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item onSelect={() => alert('Cancel')} disabled>
            Cancel (disabled)
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  ),
};