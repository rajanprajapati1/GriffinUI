import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import DatePicker from '../../New/DatePicker'

type Story = StoryObj<typeof DatePicker>

const meta: Meta<typeof DatePicker> = {
  title: 'Components/New/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Select date',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      defaultValue: false,
    },
    clearable: {
      control: 'boolean',
      defaultValue: true,
    },
    format: {
      control: 'text',
      defaultValue: 'MM/dd/yyyy',
    },
    error: {
      control: 'boolean',
      defaultValue: false,
    },
    helperText: {
      control: 'text',
      defaultValue: '',
    },
  },
}

export default meta

// Basic Example
export const Default: Story = {
  args: {
    placeholder: 'Select a date',
  },
}

// With Initial Value
export const WithInitialValue: Story = {
  args: {
    value: new Date(2024, 5, 15), // June 15, 2024
  },
}

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
    value: new Date(),
  },
}

// Read-Only State
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: new Date(),
  },
}

// With Clear Button
export const WithClearButton: Story = {
  args: {
    value: new Date(),
    clearable: true,
  },
}

// Custom Format (dd-MM-yyyy)
export const WithCustomFormat: Story = {
  args: {
    format: 'dd-MM-yyyy',
  },
}

// With Min and Max Dates
export const WithMinMaxDates: Story = {
  args: {
    minDate: new Date(2024, 0, 1), // Jan 1, 2024
    maxDate: new Date(2024, 11, 31), // Dec 31, 2024
  },
}

// With Disabled Dates
export const WithDisabledDates: Story = {
  args: {
    disabledDates: [
      new Date(2024, 5, 10),
      new Date(2024, 5, 11),
      new Date(2024, 5, 12),
    ],
  },
}

// Error State with Helper Text
export const WithErrorState: Story = {
  args: {
    error: true,
    helperText: 'Please select a valid date',
  },
}

// Controlled Example with External Input Sync
export const ControlledExample: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <div style={{ maxWidth: '300px' }}>
        <DatePicker value={date} onChange={setDate} />
        <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          Selected Date: {date ? date.toDateString() : 'None'}
        </p>
      </div>
    )
  },
}

// Fully Customized Example
export const FullCustomExample: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [error, setError] = useState(false)

    const handleDateChange = (selectedDate: Date) => {
      if (selectedDate < new Date()) {
        setError(true)
      } else {
        setError(false)
      }
      setDate(selectedDate)
    }

    return (
      <div style={{ maxWidth: '300px' }}>
        <DatePicker
          value={date}
          onChange={handleDateChange}
          placeholder="Choose future date"
          format="yyyy-MM-dd"
          error={error}
          helperText={error ? 'Please select a future date' : 'Select any date in the future'}
          minDate={new Date()}
          clearable
        />
        <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          Selected Date: {date ? date.toISOString().split('T')[0] : 'None'}
        </p>
      </div>
    )
  },
}