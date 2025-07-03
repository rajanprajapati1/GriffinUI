import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import Resizable from '../../New/Resizable'
import styled from 'styled-components'

type Story = StoryObj<typeof Resizable>

const meta: Meta<typeof Resizable> = {
  title: 'Components/New/Resizable',
  component: Resizable,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical', 'both'],
      },
      defaultValue: 'both',
    },
    minWidth: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    minHeight: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    maxWidth: {
      control: { type: 'number' },
      defaultValue: 500,
    },
    maxHeight: {
      control: { type: 'number' },
      defaultValue: 400,
    },
    defaultSize: {
      control: false,
    },
    onResize: {
      action: 'onResize',
      table: {
        disable: true,
      },
    },
  },
}

export default meta

// Basic Example with Horizontal Resize
export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    minWidth: 100,
    maxWidth: 300,
  },
  render: (args) => {
    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable {...args} defaultSize={{ width: 200, height: 150 }}>
          <ContentBox>Resize Me Horizontally</ContentBox>
        </Resizable>
      </div>
    )
  },
}

// Vertical Resize Example
export const Vertical: Story = {
  args: {
    direction: 'vertical',
    minHeight: 100,
    maxHeight: 300,
  },
  render: (args) => {
    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable {...args} defaultSize={{ width: 200, height: 150 }}>
          <ContentBox>Resize Me Vertically</ContentBox>
        </Resizable>
      </div>
    )
  },
}

// Both Directions Resize
export const BothDirections: Story = {
  args: {
    direction: 'both',
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 300,
  },
  render: (args) => {
    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable {...args} defaultSize={{ width: 200, height: 150 }}>
          <ContentBox>Resize Me (Both)</ContentBox>
        </Resizable>
      </div>
    )
  },
}

// Controlled Resize Example
export const ControlledResize: Story = {
  args: {
    direction: 'both',
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 300,
  },
  render: () => {
    const [dimensions, setDimensions] = useState({ width: 200, height: 150 })

    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable
          direction="both"
          defaultSize={{ width: 200, height: 150 }}
          onResize={(size) => setDimensions(size)}
          minWidth={100}
          minHeight={100}
          maxWidth={400}
          maxHeight={300}
        >
          <ContentBox>
            Width: {dimensions.width}px<br />
            Height: {dimensions.height}px
          </ContentBox>
        </Resizable>
      </div>
    )
  },
}

// Minimal Example without Borders
export const MinimalResizable: Story = {
  args: {
    direction: 'horizontal',
    minWidth: 100,
    maxWidth: 300,
  },
  render: (args) => {
    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable {...args} defaultSize={{ width: 200, height: 80 }}>
          <MinimalBox>Drag to resize horizontally</MinimalBox>
        </Resizable>
      </div>
    )
  },
}

// Custom Handle Positioning (e.g., bottom right handle)
export const WithCustomHandle: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', padding: '2rem' }}>
        <Resizable
          direction="both"
          defaultSize={{ width: 200, height: 150 }}
          minWidth={100}
          minHeight={100}
          maxWidth={400}
          maxHeight={300}
        >
          <ContentBox style={{ position: 'relative', height: '100%' }}>
            <p>Custom Handle Example</p>
            <CustomHandle
              onMouseDown={(e) => {
                e.stopPropagation()
                // Add custom resize logic here if needed
              }}
            >
              ⇘
            </CustomHandle>
          </ContentBox>
        </Resizable>
      </div>
    )
  },
}

// Fully Customized Example
export const FullCustomExample: Story = {
  render: () => {
    const [size, setSize] = useState({ width: 250, height: 200 })

    return (
      <div style={{ width: '100%', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Resizable
          direction="both"
          defaultSize={{ width: 250, height: 200 }}
          minWidth={150}
          minHeight={100}
          maxWidth={600}
          maxHeight={400}
          onResize={setSize}
        >
          <CustomResizableBox style={{ width: size.width, height: size.height }}>
            <h4>Resizable Box</h4>
            <p>Width: {size.width}px</p>
            <p>Height: {size.height}px</p>
            <small>Resize me by dragging the edges!</small>
          </CustomResizableBox>
        </Resizable>
      </div>
    )
  },
}



const ContentBox = styled.div`
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  user-select: none;
`

const MinimalBox = styled.div`
  background-color: #f0fdf4;
  border: 1px dashed #bbf7d0;
  padding: 1rem;
  text-align: center;
  font-size: 0.85rem;
  user-select: none;
`

const CustomResizableBox = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
`

const CustomHandle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: nwse-resize;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  user-select: none;
  z-index: 10;

  &:hover {
    background-color: #2563eb;
  }
`