import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Rating from '../../ui/Rating'; // adjust path as needed

const meta: Meta<typeof Rating> = {
  title: 'Components/ui/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    defaultValue: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    max: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
    },
    readOnly: {
      control: 'boolean',
    },
    size: {
      control: { type: 'number', min: 12, max: 48, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? args.defaultValue ?? 0);
    const isControlled = args.value !== undefined;

    return (
      <Rating
        {...args}
        value={isControlled ? args.value : value}
        onChange={(val) => {
          if (!isControlled) setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};

export const Default = {
  ...Template,
  args: {
    defaultValue: 3,
    max: 5,
    size: 24,
    readOnly: false,
  },
};

export const Controlled = {
  ...Template,
  args: {
    value: 4,
    max: 5,
    size: 32,
    readOnly: false,
  },
};

export const ReadOnly = {
  ...Template,
  args: {
    value: 2,
    max: 5,
    readOnly: true,
    size: 24,
  },
};

export const LargeSize = {
  ...Template,
  args: {
    defaultValue: 3,
    max: 7,
    size: 48,
  },
};
