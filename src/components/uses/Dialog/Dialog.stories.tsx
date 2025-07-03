import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from '../../ui/Dialog'; // your path

const meta: Meta<typeof Dialog> = {
  title: 'Components/ui/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    disableBackdropClick: { control: 'boolean' },
    disableEscapeKeyDown: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    maxWidth: { control: 'text' },
    elevation: { control: { type: 'range', min: 0, max: 24, step: 1 } },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

// Controlled Dialog wrapper to open/close in Storybook
const ControlledDialog = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open ?? false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog
        {...args}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
      >
        {args.children}
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <ControlledDialog {...args} children={
      <>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>This is some dialog content.</DialogContent>
        <DialogActions>
          <button onClick={args.onClose}>Cancel</button>
          <button onClick={args.onClose}>OK</button>
        </DialogActions>
      </>
    } />
  ),
  args: {
    open: false,
    disableBackdropClick: false,
    disableEscapeKeyDown: false,
    fullWidth: false,
    maxWidth: '500px',
    elevation: 12,
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <ControlledDialog {...args} children={
      <>
        <DialogTitle>Full Width Dialog</DialogTitle>
        <DialogContent>Dialog stretches full width.</DialogContent>
        <DialogActions>
          <button onClick={args.onClose}>Close</button>
        </DialogActions>
      </>
    } />
  ),
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const DisableBackdropClick: Story = {
  render: (args) => (
    <ControlledDialog {...args} children={
      <>
        <DialogTitle>Can't Close by Clicking Backdrop</DialogTitle>
        <DialogContent>Backdrop click is disabled.</DialogContent>
        <DialogActions>
          <button onClick={args.onClose}>Close</button>
        </DialogActions>
      </>
    } />
  ),
  args: {
    ...Default.args,
    disableBackdropClick: true,
  },
};

export const DisableEscapeKeyDown: Story = {
  render: (args) => (
    <ControlledDialog {...args} children={
      <>
        <DialogTitle>Can't Close with Escape</DialogTitle>
        <DialogContent>Escape key closing is disabled.</DialogContent>
        <DialogActions>
          <button onClick={args.onClose}>Close</button>
        </DialogActions>
      </>
    } />
  ),
  args: {
    ...Default.args,
    disableEscapeKeyDown: true,
  },
};
