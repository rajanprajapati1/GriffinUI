import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect, useRef } from 'react';
import Textarea from '../../ui/Textarea'; // adjust path as needed

const meta: Meta<typeof Textarea> = {
  title: 'Components/ui/Textarea',
  component: Textarea,
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
    autoResize: { control: 'boolean' },
    rows: { control: { type: 'number', min: 1, max: 20 } },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Type something...',
    size: 'md',
    variant: 'outline',
    rows: 4,
    autoResize: false,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Description',
    placeholder: 'Type something...',
    error: true,
    helperText: 'This field is required.',
    size: 'md',
    variant: 'outline',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    value: 'Disabled textarea',
    disabled: true,
    size: 'md',
    variant: 'outline',
    rows: 4,
  },
};

export const Sizes: Story = {
  render: () => {
    const [smVal, setSmVal] = useState('');
    const [mdVal, setMdVal] = useState('');
    const [lgVal, setLgVal] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <Textarea
          label="Small"
          placeholder="Small size"
          size="sm"
          value={smVal}
          onChange={(e) => setSmVal(e.target.value)}
          rows={3}
        />
        <Textarea
          label="Medium"
          placeholder="Medium size"
          size="md"
          value={mdVal}
          onChange={(e) => setMdVal(e.target.value)}
          rows={4}
        />
        <Textarea
          label="Large"
          placeholder="Large size"
          size="lg"
          value={lgVal}
          onChange={(e) => setLgVal(e.target.value)}
          rows={5}
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
        <Textarea
          label="Outline Variant"
          variant="outline"
          placeholder="Outline style"
          value={outlineVal}
          onChange={(e) => setOutlineVal(e.target.value)}
          rows={4}
        />
        <Textarea
          label="Filled Variant"
          variant="filled"
          placeholder="Filled style"
          value={filledVal}
          onChange={(e) => setFilledVal(e.target.value)}
          rows={4}
        />
        <Textarea
          label="Unstyled Variant"
          variant="unstyled"
          placeholder="Unstyled style"
          value={unstyledVal}
          onChange={(e) => setUnstyledVal(e.target.value)}
          rows={4}
        />
      </div>
    );
  },
};

export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [value]);

    return (
      <Textarea
        label="Auto-resizing Textarea"
        placeholder="Start typing..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoResize={true}
        rows={1}
        ref={textareaRef}
      />
    );
  },
};
