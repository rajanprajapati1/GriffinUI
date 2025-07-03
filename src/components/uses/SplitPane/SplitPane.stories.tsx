import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import SplitPane from '../../New/SplitPane'

type Story = StoryObj<typeof SplitPane>

const meta: Meta<typeof SplitPane> = {
  title: 'Components/New/SplitPane',
  component: SplitPane,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio', options: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    defaultSplit: {
      control: { type: 'number', min: 10, max: 90 },
      defaultValue: 50,
    },
    minSize: {
      control: { type: 'number', min: 5, max: 45 },
      defaultValue: 10,
    },
    maxSize: {
      control: { type: 'number', min: 55, max: 95 },
      defaultValue: 90,
    },
  },
}

export default meta

// Basic Horizontal Layout
export const DefaultHorizontal: Story = {
  args: {
    direction: 'horizontal',
    defaultSplit: 50,
    minSize: 10,
    maxSize: 90,
  },
  render: (args) => (
    <div style={{ height: '300px' }}>
      <SplitPane {...args}>
        <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>Left Pane</div>
        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>Right Pane</div>
      </SplitPane>
    </div>
  ),
}

// Vertical Layout
export const VerticalLayout: Story = {
  args: {
    direction: 'vertical',
    defaultSplit: 40,
    minSize: 15,
    maxSize: 85,
  },
  render: (args) => (
    <div style={{ width: '100%', height: '400px' }}>
      <SplitPane {...args}>
        <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>Top Pane</div>
        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>Bottom Pane</div>
      </SplitPane>
    </div>
  ),
}

// Controlled Example with Size Display
export const ControlledWithSizeDisplay: Story = {
  args: {
    direction: 'horizontal',
    defaultSplit: 50,
    minSize: 20,
    maxSize: 80,
  },
  render: () => {
    const [firstSize, setFirstSize] = useState(50)
    const handleDragEnd = (size: number) => {
      setFirstSize(size)
    }

    return (
      <div style={{ height: '300px' }}>
        <div style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
          Left Pane: {firstSize.toFixed(0)}% | Right Pane: {(100 - firstSize).toFixed(0)}%
        </div>
        <SplitPane defaultSplit={50} onDragEnd={handleDragEnd}>
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>Left Pane</div>
          <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>Right Pane</div>
        </SplitPane>
      </div>
    )
  },
}

// With Custom Divider
export const WithCustomDivider: Story = {
  args: {
    direction: 'horizontal',
    defaultSplit: 60,
    minSize: 20,
    maxSize: 80,
  },
  render: (args) => (
    <div style={{ height: '300px' }}>
      <SplitPane {...args}>
        <div style={{ padding: '1rem', backgroundColor: '#f9fafb' }}>Left Pane</div>
        <SplitPane.Divider
          style={{
            backgroundColor: '#3b82f6',
            width: '6px',
            cursor: 'col-resize',
          }}
        />
        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>Right Pane</div>
      </SplitPane>
    </div>
  ),
}

// Minimalistic Panes
export const MinimalPanes: Story = {
  args: {
    direction: 'vertical',
    defaultSplit: 30,
    minSize: 15,
    maxSize: 70,
  },
  render: (args) => (
    <div style={{ width: '100%', height: '300px' }}>
      <SplitPane {...args}>
        <SplitPane.Pane style={{ padding: '0', backgroundColor: '#ffffff' }}>
          <div style={{ height: '100%', borderRight: '1px solid #e5e7eb', padding: '1rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '500' }}>Code Editor</h3>
            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.9rem', backgroundColor: '#f9fafb', padding: '1rem' }}>
              function example() {'{'}
              {'  '}console.log("Hello World")
              {'}'}
            </pre>
          </div>
        </SplitPane.Pane>
        <SplitPane.Divider
          style={{
            backgroundColor: '#ef4444',
            width: '6px',
            cursor: 'row-resize',
          }}
        />
        <SplitPane.Pane style={{ padding: '0', backgroundColor: '#f9fafb' }}>
          <div style={{ height: '100%', padding: '1rem', backgroundColor: '#f3f4f6' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '500' }}>Preview</h3>
            <p>This pane updates in real-time as you resize the split.</p>
          </div>
        </SplitPane.Pane>
      </SplitPane>
    </div>
  ),
}

// Fully Customized Example
export const FullCustomExample: Story = {
  args: {
    direction: 'horizontal',
    defaultSplit: 40,
    minSize: 10,
    maxSize: 80,
  },
  render: (args) => (
    <div style={{ height: '400px', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
      <SplitPane {...args}>
        <SplitPane.Pane style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRight: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>Documentation</h3>
          <p style={{ margin: '0 0 0.5rem 0' }}>Left Pane Content</p>
          <p>Resize this pane by dragging the divider between them.</p>
        </SplitPane.Pane>
        <SplitPane.Divider
          style={{
            backgroundColor: '#3b82f6',
            width: '4px',
            cursor: 'col-resize',
          }}
        />
        <SplitPane.Pane style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>Live Preview</h3>
          <div style={{ border: '1px dashed #d1d5db', padding: '1rem', backgroundColor: '#f9fafb' }}>
            This right pane dynamically resizes when you drag.
          </div>
        </SplitPane.Pane>
      </SplitPane>
    </div>
  ),
}