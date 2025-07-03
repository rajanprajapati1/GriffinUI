import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FormControl from '../../ui/FormControl'; // Update path if needed

// Simple placeholder child component for demonstration
const MockInput = ({ placeholder = 'Enter value' }: { placeholder?: string }) => (
  <input
    type="text"
    placeholder={placeholder}
    style={{
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
    }}
  />
);

const meta: Meta<typeof FormControl> = {
  title: 'Components/ui/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    label: 'Username',
    helperText: 'Enter your unique username.',
    error: false,
    children: <MockInput />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    helperText: 'Please enter a valid email address.',
    error: true,
    children: <MockInput placeholder="email@example.com" />,
  },
};

export const NoHelperText: Story = {
  args: {
    label: 'First Name',
    error: false,
    children: <MockInput placeholder="John" />,
  },
};

export const WithoutLabel: Story = {
  args: {
    helperText: 'This field is required.',
    error: true,
    children: <MockInput />,
  },
};
