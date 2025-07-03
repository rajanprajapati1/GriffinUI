import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Chip from '../../ui/Chip'; // Your import path

// Example avatar and icons (you can replace with your own SVGs or components)
const Avatar = (
  <img
    src="https://i.pravatar.cc/24"
    alt="avatar"
    style={{ borderRadius: '50%', width: 24, height: 24 }}
  />
);

const StartIcon = (
  <svg
    width="16"
    height="16"
    fill="currentColor"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0L6 6H0l5 4-2 6 7-5 7 5-2-6 5-4h-6L8 0z" />
  </svg>
);

const EndIcon = (
  <svg
    width="16"
    height="16"
    fill="currentColor"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M6 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const meta: Meta<typeof Chip> = {
  title: 'Components/ui/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'inline-radio', options: ['filled', 'outlined'] },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error', 'warning'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    onDelete: { action: 'delete clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
  },
};

export const Colors: Story = {
  render: (args) => (
    <>
      {['default', 'primary', 'success', 'error', 'warning'].map((color) => (
        <Chip key={color} {...args} color={color as any} />
      ))}
    </>
  ),
  args: {
    label: 'Colorful',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      {['sm', 'md', 'lg'].map((size) => (
        <Chip key={size} {...args} size={size as any}/>
      ))}
    </>
  ),
  args: {
    label: 'Sized Chip',
  },
};

export const WithDelete: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => alert('Delete clicked!'),
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'With Avatar',
    avatar: Avatar,
  },
};

export const WithStartAndEndIcons: Story = {
  args: {
    label: 'With Icons',
    startIcon: StartIcon,
    endIcon: EndIcon,
  },
};
