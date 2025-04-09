import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
    color: 'default',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    color: 'success',
    size: 'md',
  },
};

export const LargeWarning: Story = {
  args: {
    children: 'Warning',
    color: 'warning',
    size: 'lg',
  },
};
