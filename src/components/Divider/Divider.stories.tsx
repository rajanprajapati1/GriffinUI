import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider from '../Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const WithText: Story = {
  args: {
    text: 'OR',
    variant: 'middle',
  },
};
