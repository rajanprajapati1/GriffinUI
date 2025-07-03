import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Alert from '../../ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/ui/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    title: { control: 'text' },
    children: { control: 'text' },
    onClose: { action: 'closed' },
    icon: { control: false }, // We'll show a custom icon in one story
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const InfoStandard: Story = {
  args: {
    type: 'info',
    variant: 'standard',
    title: 'Heads up!',
    children: 'This is an informational alert.',
  },
};

export const SuccessFilled: Story = {
  args: {
    type: 'success',
    variant: 'filled',
    title: 'Success!',
    children: 'Your operation was successful.',
  },
};

export const WarningOutlined: Story = {
  args: {
    type: 'warning',
    variant: 'outlined',
    title: 'Be careful!',
    children: 'There might be some issues to check.',
  },
};

export const ErrorWithClose: Story = {
  args: {
    type: 'error',
    variant: 'standard',
    title: 'Error!',
    children: 'Something went wrong.',
    onClose: () => alert('Alert closed!'),
  },
};

export const WithCustomIcon: Story = {
  args: {
    type: 'success',
    variant: 'standard',
    title: 'Custom Icon',
    children: 'This alert uses a custom icon.',
    icon: <span role="img" aria-label="check">✅</span>,
  },
};
