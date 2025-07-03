import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ToggleGroup from '../../New/ToggleGroup'

type Story = StoryObj<typeof ToggleGroup>

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/New/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const SingleSelection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Text Alignment</h3>
      <ToggleGroup type="single" defaultValue="left">
        <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
        <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
        <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
        <ToggleGroup.Item value="justify">Justify</ToggleGroup.Item>
      </ToggleGroup>
    </div>
  ),
}

export const MultipleSelection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Text Formatting</h3>
      <ToggleGroup type="multiple" defaultValue={['bold']}>
        <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
        <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
        <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
        <ToggleGroup.Item value="strikethrough">Strike</ToggleGroup.Item>
      </ToggleGroup>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h4>Small</h4>
        <ToggleGroup type="single" size="sm">
          <ToggleGroup.Item value="sm1">Small</ToggleGroup.Item>
          <ToggleGroup.Item value="sm2">Size</ToggleGroup.Item>
          <ToggleGroup.Item value="sm3">Toggle</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>Medium</h4>
        <ToggleGroup type="single" size="md">
          <ToggleGroup.Item value="md1">Medium</ToggleGroup.Item>
          <ToggleGroup.Item value="md2">Size</ToggleGroup.Item>
          <ToggleGroup.Item value="md3">Toggle</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>Large</h4>
        <ToggleGroup type="single" size="lg">
          <ToggleGroup.Item value="lg1">Large</ToggleGroup.Item>
          <ToggleGroup.Item value="lg2">Size</ToggleGroup.Item>
          <ToggleGroup.Item value="lg3">Toggle</ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h4>Default</h4>
        <ToggleGroup type="single" variant="default" defaultValue="default2">
          <ToggleGroup.Item value="default1">Option 1</ToggleGroup.Item>
          <ToggleGroup.Item value="default2">Option 2</ToggleGroup.Item>
          <ToggleGroup.Item value="default3">Option 3</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>Outline</h4>
        <ToggleGroup type="single" variant="outline" defaultValue="outline2">
          <ToggleGroup.Item value="outline1">Option 1</ToggleGroup.Item>
          <ToggleGroup.Item value="outline2">Option 2</ToggleGroup.Item>
          <ToggleGroup.Item value="outline3">Option 3</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>Ghost</h4>
        <ToggleGroup type="single" variant="ghost" defaultValue="ghost2">
          <ToggleGroup.Item value="ghost1">Option 1</ToggleGroup.Item>
          <ToggleGroup.Item value="ghost2">Option 2</ToggleGroup.Item>
          <ToggleGroup.Item value="ghost3">Option 3</ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h4>Disabled Group</h4>
        <ToggleGroup type="single" disabled defaultValue="disabled2">
          <ToggleGroup.Item value="disabled1">Option 1</ToggleGroup.Item>
          <ToggleGroup.Item value="disabled2">Option 2</ToggleGroup.Item>
          <ToggleGroup.Item value="disabled3">Option 3</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>Individual Items Disabled</h4>
        <ToggleGroup type="single">
          <ToggleGroup.Item value="item1">Enabled</ToggleGroup.Item>
          <ToggleGroup.Item value="item2" disabled>Disabled</ToggleGroup.Item>
          <ToggleGroup.Item value="item3">Enabled</ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h4>Text Alignment with Icons</h4>
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroup.Item value="left">
            <span>⬅️</span>
            <span style={{ marginLeft: '0.5rem' }}>Left</span>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center">
            <span>↔️</span>
            <span style={{ marginLeft: '0.5rem' }}>Center</span>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right">
            <span>➡️</span>
            <span style={{ marginLeft: '0.5rem' }}>Right</span>
          </ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div>
        <h4>View Mode</h4>
        <ToggleGroup type="single" variant="outline" defaultValue="grid">
          <ToggleGroup.Item value="list">📋</ToggleGroup.Item>
          <ToggleGroup.Item value="grid">⚏</ToggleGroup.Item>
          <ToggleGroup.Item value="card">🗂️</ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const ControlledSingle: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('center')
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4>Controlled Single Selection</h4>
        <ToggleGroup
          type="single"
          value={value}
          onValueChange={(newValue) => setValue(newValue as string)}
        >
          <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
          <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
          <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
        </ToggleGroup>
        <p>Selected: {value || 'None'}</p>
        <button onClick={() => setValue('')}>Clear Selection</button>
      </div>
    )
  },
}

export const ControlledMultiple: Story = {
  render: () => {
    const [values, setValues] = React.useState<string[]>(['bold', 'italic'])
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4>Controlled Multiple Selection</h4>
        <ToggleGroup
          type="multiple"
          value={values}
          onValueChange={(newValues) => setValues(newValues as string[])}
        >
          <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
          <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
          <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
          <ToggleGroup.Item value="strikethrough">Strike</ToggleGroup.Item>
        </ToggleGroup>
        <p>Selected: {values.length > 0 ? values.join(', ') : 'None'}</p>
        <button onClick={() => setValues([])}>Clear All</button>
      </div>
    )
  },
}

export const UncontrolledWithCallback: Story = {
  render: () => {
    const [lastChange, setLastChange] = React.useState<string>('')
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4>Uncontrolled with Change Callback</h4>
        <ToggleGroup
          type="single"
          defaultValue="option2"
          onValueChange={(value) => setLastChange(`Changed to: ${value || 'None'}`)}
        >
          <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>
          <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>
          <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>
        </ToggleGroup>
        <p>{lastChange || 'No changes yet'}</p>
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [textAlign, setTextAlign] = React.useState<string>('left')
    const [textFormat, setTextFormat] = React.useState<string[]>([])
    const [viewMode, setViewMode] = React.useState<string>('grid')
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '500px' }}>
        <div>
          <h4>Text Editor Toolbar</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                Text Alignment:
              </label>
              <ToggleGroup
                type="single"
                value={textAlign}
                onValueChange={(value) => setTextAlign(value as string)}
                size="sm"
              >
                <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
                <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
                <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
                <ToggleGroup.Item value="justify">Justify</ToggleGroup.Item>
              </ToggleGroup>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                Text Formatting:
              </label>
              <ToggleGroup
                type="multiple"
                value={textFormat}
                onValueChange={(values) => setTextFormat(values as string[])}
                size="sm"
                variant="outline"
              >
                <ToggleGroup.Item value="bold">B</ToggleGroup.Item>
                <ToggleGroup.Item value="italic">I</ToggleGroup.Item>
                <ToggleGroup.Item value="underline">U</ToggleGroup.Item>
                <ToggleGroup.Item value="strikethrough">S</ToggleGroup.Item>
              </ToggleGroup>
            </div>
          </div>
        </div>
        
        <div>
          <h4>File Browser</h4>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              View Mode:
            </label>
            <ToggleGroup
              type="single"
              value={viewMode}
              onValueChange={(value) => setViewMode(value as string)}
              variant="ghost"
            >
              <ToggleGroup.Item value="list">📋 List</ToggleGroup.Item>
              <ToggleGroup.Item value="grid">⚏ Grid</ToggleGroup.Item>
              <ToggleGroup.Item value="card">🗂️ Cards</ToggleGroup.Item>
            </ToggleGroup>
          </div>
        </div>
        
        <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.375rem' }}>
          <h5>Current Settings:</h5>
          <ul style={{ fontSize: '0.875rem', margin: 0, paddingLeft: '1rem' }}>
            <li>Text Alignment: {textAlign || 'None'}</li>
            <li>Text Formatting: {textFormat.length > 0 ? textFormat.join(', ') : 'None'}</li>
            <li>View Mode: {viewMode || 'None'}</li>
          </ul>
        </div>
      </div>
    )
  },
}

export const SizeVariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h3>Size & Variant Matrix</h3>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ margin: 0 }}>{size.toUpperCase()}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {(['default', 'outline', 'ghost'] as const).map(variant => (
              <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>{variant}:</span>
                <ToggleGroup type="single" size={size} variant={variant} defaultValue="option2">
                  <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>
                  <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>
                  <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>
                </ToggleGroup>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Playground: Story = {
  args: {
    type: 'single',
    size: 'md',
    variant: 'default',
    disabled: false,
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>
      <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>
    </ToggleGroup>
  ),
}