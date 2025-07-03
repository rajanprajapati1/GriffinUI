import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Calendar from '../../New/Calendar'

type Story = StoryObj<typeof Calendar>

const meta: Meta<typeof Calendar> = {
  title: 'Components/New/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'date',
      description: 'Selected date',
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
    disabledDates: {
      control: 'object',
      description: 'Array of disabled dates',
    },
    showOutsideDays: {
      control: 'boolean',
      defaultValue: true,
    },
    weekStartsOn: {
      control: {
        type: 'number',
        min: 0,
        max: 6,
        step: 1,
      },
      defaultValue: 0,
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  args: {
    showOutsideDays: true,
    weekStartsOn: 0,
  },
}

// Controlled Example with Selected Date
export const WithSelectedDate: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2024, 5, 15)) // June 15, 2024
    return (
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    )
  },
}

// With Min and Max Dates
export const WithMinAndMaxDate: Story = {
  args: {
    minDate: new Date(2024, 4, 1), // May 1, 2024
    maxDate: new Date(2024, 6, 31), // July 31, 2024
  },
}

// With Disabled Dates
export const WithDisabledDates: Story = {
  render: () => {
    const disabledDates = [
      new Date(2024, 5, 1),
      new Date(2024, 5, 4),
      new Date(2024, 5, 7),
    ]

    return <Calendar disabledDates={disabledDates} />
  },
}

// Week Starts on Monday
export const WeekStartsOnMonday: Story = {
  args: {
    weekStartsOn: 1,
  },
}

// Without Outside Days
export const HideOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
}

// Full Customization
export const FullyCustomized: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const disabledDates = []
    const today = new Date()
    for (let i = 1; i <= 5; i++) {
      const d = new Date()
      d.setDate(today.getDate() + i)
      disabledDates.push(d)
    }

    return (
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        disabledDates={disabledDates}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        showOutsideDays={false}
        weekStartsOn={1}
      />
    )
  },
}