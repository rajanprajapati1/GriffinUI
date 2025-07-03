import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Checkbox from '../../ui/Checkbox'; // Adjust path as needed

const meta: Meta<typeof Checkbox> = {
  title: 'Components/ui/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// A controlled component wrapper to demo onChange in Storybook
const ControlledCheckbox = (args: any) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(newChecked) => setChecked(newChecked)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    error: false,
    helperText: '',
  },
};

export const Checked: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    error: true,
    helperText: 'You must accept terms to proceed',
  },
};

export const DisabledCheckedWithHelperText: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
    disabled: true,
    helperText: 'This option is not available',
  },
};
