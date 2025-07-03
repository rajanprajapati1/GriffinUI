import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import Popover from '../../ui/Popover'; // Adjust path as needed

const meta: Meta<typeof Popover> = {
  title: 'Components/ui/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    offset: {
      control: { type: 'number', min: 0, max: 50, step: 2 },
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const Template: Story = {
  render: (args) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(true);

    return (
      <div style={{ padding: '100px' }}>
        <button ref={buttonRef} onClick={() => setOpen((prev) => !prev)}>
          Toggle Popover
        </button>

        <Popover
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={buttonRef}
        >
          <div style={{ padding: '0.5rem 0' }}>
            <strong>Popover Content</strong>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Positioned at <em>{args.placement}</em>
            </p>
          </div>
        </Popover>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    placement: 'bottom',
    offset: 8,
    elevation: 12,
  },
};

export const TopLeftRightBottom: Story = {
  ...Template,
  args: {
    placement: 'top',
    offset: 10,
    elevation: 16,
  },
};
