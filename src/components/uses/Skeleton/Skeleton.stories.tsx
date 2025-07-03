import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Skeleton from '../../ui/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    rounded: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '100px',
    height: '20px',
    rounded: true,
  },
};

export const Circle: Story = {
  args: {
    width: '50px',
    height: '50px',
    rounded: true,
  },
};

export const Rectangular: Story = {
  args: {
    width: '200px',
    height: '100px',
    rounded: false,
  },
};
