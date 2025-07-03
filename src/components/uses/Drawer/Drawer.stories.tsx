import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Drawer from '../../ui/Drawer'; // adjust path as needed

const meta: Meta<typeof Drawer> = {
  title: 'Components/ui/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    showCloseIcon: { control: 'boolean' },
    elevation: { control: { type: 'range', min: 0, max: 24, step: 1 } },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const ControlledDrawer = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open ?? false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer
        {...args}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
      >
        {args.children}
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <ControlledDrawer
      {...args}
      children={<div style={{ padding: 20 }}>This is the drawer content.</div>}
    />
  ),
  args: {
    open: false,
    anchor: 'right',
    width: '300px',
    height: '300px',
    showCloseIcon: true,
    elevation: 12,
  },
};

export const LeftAnchor: Story = {
  render: (args) => (
    <ControlledDrawer
      {...args}
      children={<div style={{ padding: 20 }}>Drawer anchored left</div>}
    />
  ),
  args: {
    ...Default.args,
    anchor: 'left',
  },
};

export const TopAnchor: Story = {
  render: (args) => (
    <ControlledDrawer
      {...args}
      children={<div style={{ padding: 20 }}>Drawer anchored top</div>}
    />
  ),
  args: {
    ...Default.args,
    anchor: 'top',
    height: '200px',
  },
};

export const BottomAnchorNoCloseIcon: Story = {
  render: (args) => (
    <ControlledDrawer
      {...args}
      children={<div style={{ padding: 20 }}>Drawer anchored bottom, no close icon</div>}
    />
  ),
  args: {
    ...Default.args,
    anchor: 'bottom',
    height: '250px',
    showCloseIcon: false,
  },
};
