import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Input from '../../ui/Input'; // Adjust the path if needed

const meta: Meta<typeof Input> = {
  title: 'Components/ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['outline', 'filled', 'unstyled'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithError: Story = {
  ...Template,
  args: {
    label: 'Email',
    placeholder: 'Invalid email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Username',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const WithIcon: Story = {
  ...Template,
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: "&#128269;",
  },
};

export const FilledVariant: Story = {
  ...Template,
  args: {
    label: 'Filled Input',
    variant: 'filled',
    placeholder: 'Filled style',
  },
};

export const Unstyled: Story = {
  ...Template,
  args: {
    placeholder: 'Minimal input',
    variant: 'unstyled',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};
