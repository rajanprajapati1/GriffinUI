import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import RadioGroup from '../../ui/RadioGroup'; // adjust path as needed

type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

const optionsDefault: RadioOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2 (Disabled)', value: 'option2', disabled: true },
  { label: 'Option 3', value: 'option3' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/ui/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(val) => setValue(val)}
      />
    );
  },
};

export const Default = {
  ...Template,
  args: {
    label: 'Select an option',
    options: optionsDefault,
    value: 'option1',
    direction: 'column',
    helperText: 'Choose one option',
    error: false,
  },
};

export const RowDirection = {
  ...Template,
  args: {
    ...Default.args,
    direction: 'row',
  },
};

export const ErrorState = {
  ...Template,
  args: {
    ...Default.args,
    error: true,
    helperText: 'You must select an option',
  },
};

export const DisabledOptions = {
  ...Template,
  args: {
    label: 'Disabled options example',
    options: [
      { label: 'Enabled Option', value: 'enabled' },
      { label: 'Disabled Option', value: 'disabled', disabled: true },
    ],
    value: 'enabled',
  },
};
