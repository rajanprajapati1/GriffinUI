import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../../ui/Modal'; // Adjust path as needed

const meta: Meta<typeof Modal> = {
  title: 'Components/ui/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    elevation: { control: { type: 'range', min: 0, max: 24 } },
    fullWidth: { control: 'boolean' },
    centered: { control: 'boolean' },
    disableBackdropClick: { control: 'boolean' },
    disableEscapeKeyDown: { control: 'boolean' },
    width: { control: 'text' },
    maxWidth: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <h2 style={{ marginTop: 0 }}>Modal Title</h2>
          <p>This is the modal content. Customize me via props!</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      </>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const CenteredWithElevation: Story = {
  ...Template,
  args: {
    elevation: 16,
    centered: true,
  },
};

export const FullWidthWithMaxWidth: Story = {
  ...Template,
  args: {
    fullWidth: true,
    maxWidth: '700px',
  },
};

export const CustomSize: Story = {
  ...Template,
  args: {
    width: '400px',
    maxWidth: '500px',
    elevation: 8,
  },
};

export const DisableBackdropAndEscape: Story = {
  ...Template,
  args: {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
  },
};
