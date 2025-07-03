import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import ProgressBar from '../../ui/ProgressBar'; // adjust path as needed

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ui/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'neutral'],
    },
    height: {
      control: { type: 'number', min: 4, max: 20, step: 1 },
    },
    radius: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
    },
    variant: {
      control: 'radio',
      options: ['determinate', 'indeterminate'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Determinate: Story = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    value: 60,
    color: 'primary',
    height: 8,
    radius: 6,
    variant: 'determinate',
    label: 'Progress: 60%',
  },
};

export const Indeterminate: Story = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    variant: 'indeterminate',
    color: 'success',
    height: 8,
    radius: 6,
    label: 'Loading...',
  },
};

export const AnimatedDeterminate: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((old) => {
          if (old >= 100) return 0;
          return old + 5;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);

    return (
      <ProgressBar
        value={progress}
        color="warning"
        height={12}
        radius={8}
        variant="determinate"
        label={`Progress: ${progress}%`}
      />
    );
  },
};
