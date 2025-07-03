import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputTextField from '../../ui/InputField';

const meta: Meta<typeof InputTextField> = {
  title: 'Components/ui/InputField',
  component: InputTextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'email', 'password', 'number'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputTextField>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '');
    return <InputTextField {...args} value={value} onChange={setValue} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    type: 'text',
    value: '',
  },
};

export const WithError: Story = {
  ...Template,
  args: {
    label: 'Email Address',
    placeholder: 'e.g., john@example.com',
    value: '',
    type: 'email',
    error: true,
    helperText: 'Invalid email format',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    label: 'Username',
    placeholder: 'Disabled input',
    value: 'johndoe123',
    disabled: true,
  },
};

export const WithHelperText: Story = {
  ...Template,
  args: {
    label: 'Password',
    placeholder: 'Enter a strong password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const FullWidth: Story = {
  ...Template,
  args: {
    label: 'Search',
    placeholder: 'Search something...',
    fullWidth: true,
  },
};
