import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Select from '../../ui/Select'; // adjust path as needed

const meta: Meta<typeof Select> = {
  title: 'Components/ui/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    return (
      <Select
        {...args}
        value={value}
        onChange={(val) => setValue(val)}
        options={options}
      />
    );
  },
};

export const Default = {
  ...Template,
  args: {
    label: 'Choose an option',
    placeholder: 'Select...',
    helperText: 'Please select one option',
    error: false,
    disabled: false,
    value: '',
  },
};

export const WithError = {
  ...Template,
  args: {
    ...Default.args,
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled = {
  ...Template,
  args: {
    ...Default.args,
    disabled: true,
    value: 'option2',
  },
};

export const WithPreselectedValue = {
  ...Template,
  args: {
    ...Default.args,
    value: 'option3',
  },
};
