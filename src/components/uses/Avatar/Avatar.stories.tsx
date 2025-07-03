import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Avatar from '../../ui/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    shadow: { control: 'boolean' },
    border: { control: 'boolean' },
    icon: { control: false },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'circle',
    children: 'AB',
  },
};

export const WithImage: Story = {
  args: {
    size: 'lg',
    variant: 'circle',
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
  },
};

export const RoundedWithShadowAndBorder: Story = {
  args: {
    size: 'xl',
    variant: 'rounded',
    shadow: true,
    border: true,
    children: 'JS',
  },
};

export const SquareWithIcon: Story = {
  args: {
    size: 'sm',
    variant: 'square',
    icon: <span role="img" aria-label="robot">🤖</span>,
  },
};
