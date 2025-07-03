import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import Slider from '../../New/Slider'

type Story = StoryObj<typeof Slider>

const meta: Meta<typeof Slider> = {
  title: 'Components/New/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
      defaultValue: 'md',
    },
    orientation: {
      control: { type: 'radio', options: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    color: {
      control: 'color',
      defaultValue: '#3b82f6',
    },
    showValue: {
      control: 'boolean',
      defaultValue: true,
    },
    marks: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
}

export default meta

// Basic Horizontal Example
export const DefaultHorizontal: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    orientation: 'horizontal',
    color: '#3b82f6',
    showValue: true,
    marks: true,
  },
}

// Vertical Slider Example
export const VerticalSlider: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    orientation: 'vertical',
    size: 'md',
    color: '#10b981',
    showValue: true,
    marks: true,
  },
  render: (args) => {
    return (
      <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Slider {...args} />
      </div>
    )
  },
}

// With Custom Value Display
export const WithCustomLabels: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    size: 'lg',
    orientation: 'horizontal',
    color: '#ef4444',
    valuePrefix: '$',
    valueSuffix: '/hr',
    marks: [
      { value: 0, label: '0' },
      { value: 25, label: '25' },
      { value: 50, label: '50' },
      { value: 75, label: '75' },
      { value: 100, label: '100' },
    ],
    showValue: true,
  },
}

// Controlled Example
export const ControlledExample: Story = {
  render: () => {
    const [value, setValue] = useState(50)

    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}>Current Value: <strong>{value}</strong></p>
        <Slider
          value={value}
          min={0}
          max={100}
          step={5}
          orientation="horizontal"
          size="md"
          color="#3b82f6"
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    )
  },
}

// Disabled State
export const DisabledState: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    orientation: 'horizontal',
    color: '#3b82f6',
    disabled: true,
    showValue: true,
    marks: true,
  },
}

// Minimalistic No Marks
export const MinimalNoMarks: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    size: 'sm',
    color: '#8b5cf6',
    showValue: false,
    marks: false,
  },
}

// Fully Customized Vertical
export const FullVerticalCustom: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    orientation: 'vertical',
    size: 'lg',
    color: '#f59e0b',
    valuePrefix: '',
    valueSuffix: '%',
    marks: [
      { value: 0, label: 'Low' },
      { value: 50, label: 'Mid' },
      { value: 100, label: 'High' },
    ],
    showValue: true,
  },
  render: (args) => {
    return (
      <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Slider {...args} />
      </div>
    )
  },
}