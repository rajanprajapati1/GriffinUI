import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Switch from '../../ui/Switch'; // Adjust path as needed

const meta: Meta<typeof Switch> = {
  title: 'Components/ui/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    size: 'md',
    label: 'Enable feature',
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smChecked, setSmChecked] = useState(false);
    const [mdChecked, setMdChecked] = useState(true);
    const [lgChecked, setLgChecked] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Switch checked={smChecked} onChange={setSmChecked} size="sm" label="Small" />
        <Switch checked={mdChecked} onChange={setMdChecked} size="md" label="Medium" />
        <Switch checked={lgChecked} onChange={setLgChecked} size="lg" label="Large" />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled switch',
  },
  render: (args) => <Switch {...args} onChange={() => {}} />,
};
