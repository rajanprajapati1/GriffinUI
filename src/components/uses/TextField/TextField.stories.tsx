import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import TextField from '../../ui/TextField'; // Adjust path accordingly

const meta: Meta<typeof TextField> = {
  title: 'Components/ui/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'unstyled'],
    },
    type: { control: 'text' },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    size: 'md',
    variant: 'outline',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Invalid email address',
    size: 'md',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'disabled_user',
    disabled: true,
    size: 'md',
    variant: 'outline',
  },
};

export const Sizes: Story = {
  render: () => {
    const [smVal, setSmVal] = useState('');
    const [mdVal, setMdVal] = useState('');
    const [lgVal, setLgVal] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <TextField
          label="Small"
          placeholder="Small size"
          size="sm"
          value={smVal}
          onChange={(e) => setSmVal(e.target.value)}
        />
        <TextField
          label="Medium"
          placeholder="Medium size"
          size="md"
          value={mdVal}
          onChange={(e) => setMdVal(e.target.value)}
        />
        <TextField
          label="Large"
          placeholder="Large size"
          size="lg"
          value={lgVal}
          onChange={(e) => setLgVal(e.target.value)}
        />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [outlineVal, setOutlineVal] = useState('');
    const [filledVal, setFilledVal] = useState('');
    const [unstyledVal, setUnstyledVal] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <TextField
          label="Outline Variant"
          variant="outline"
          placeholder="Outline style"
          value={outlineVal}
          onChange={(e) => setOutlineVal(e.target.value)}
        />
        <TextField
          label="Filled Variant"
          variant="filled"
          placeholder="Filled style"
          value={filledVal}
          onChange={(e) => setFilledVal(e.target.value)}
        />
        <TextField
          label="Unstyled Variant"
          variant="unstyled"
          placeholder="Unstyled style"
          value={unstyledVal}
          onChange={(e) => setUnstyledVal(e.target.value)}
        />
      </div>
    );
  },
};

export const WithEmojis: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextField
        label="Search"
        placeholder="Search here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        iconLeft={<span role="img" aria-label="search">🔍</span>}
        iconRight={<span role="img" aria-label="clear">❌</span>}
        size="md"
        variant="outline"
      />
    );
  },
};
