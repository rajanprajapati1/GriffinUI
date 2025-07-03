import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import AspectRatio from '../../New/AspectRatio'

type Story = StoryObj<typeof AspectRatio>

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/New/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number', min: 0.1, step: 0.1 },
      description: 'The aspect ratio of the container (e.g., 16 / 9)',
      defaultValue: 16 / 9,
    },
    children: {
      control: false,
      description: 'Content inside the aspect ratio container',
    },
  },
}

export default meta

// Basic Example with Image
export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://picsum.photos/200/300 "
        alt="Example image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
}

// Square Ratio
export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#3b82f6', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        1:1 Square
      </div>
    ),
  },
}

// Portrait Ratio (4:5)
export const Portrait: Story = {
  args: {
    ratio: 4 / 5,
    children: (
      <img
        src="https://picsum.photos/200/300 "
        alt="Portrait image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
}

// Custom Content with Overlay Text
export const WithTextOverlay: Story = {
  args: {
    ratio: 3 / 4,
    children: (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #00000080, #000000aa), url(https://picsum.photos/200/300 )',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        Custom Content Inside
      </div>
    ),
  },
}