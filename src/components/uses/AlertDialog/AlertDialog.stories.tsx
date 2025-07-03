import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import AlertDialog from '../../New/AlertDialog'

type Story = StoryObj<typeof AlertDialog.Root>

const meta: Meta<typeof AlertDialog.Root> = {
  title: 'Components/New/AlertDialog',
  component: AlertDialog.Root,
  tags: ['autodocs'],
}

export default meta

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Action</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to proceed with this action? This cannot be undone.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => alert('Confirmed!')}>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}

export const WithCustomTitleAndCloseButton: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
      <AlertDialog.Content showCloseButton={true}>
        <AlertDialog.Title>Are You Sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action will permanently delete your account. Please confirm.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel onClick={() => alert('Canceled')}>No, Go Back</AlertDialog.Cancel>
          <AlertDialog.Action variant="destructive" onClick={() => alert('Account deleted')}>
            Yes, Delete Account
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open Dialog (No Close)</AlertDialog.Trigger>
      <AlertDialog.Content showCloseButton={false}>
        <AlertDialog.Title>Important Notice</AlertDialog.Title>
        <AlertDialog.Description>
          This dialog does not have a close button. You can only close it using the footer buttons.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Dismiss</AlertDialog.Cancel>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}

export const DestructiveAction: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Delete Item</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
        <AlertDialog.Description>
          This will delete the selected item permanently. Are you sure?
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action variant="destructive" onClick={() => alert('Item deleted')}>
            Delete
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}

export const WithCustomTrigger: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white' }}>
          Click Me
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Custom Trigger Example</AlertDialog.Title>
        <AlertDialog.Description>
          This dialog was opened using a custom trigger element via <code>asChild</code>.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Close</AlertDialog.Cancel>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}