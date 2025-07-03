import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Toggle from '../../New/Toggle'

type Story = StoryObj<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  title: 'Components/New/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost'],
    },
    pressed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

export const Default: Story = {
  render: () => (
    <Toggle>
      Toggle Button
    </Toggle>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="ghost">Ghost</Toggle>
    </div>
  ),
}

export const PressedStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle pressed={false}>Not Pressed</Toggle>
      <Toggle pressed={true}>Pressed</Toggle>
    </div>
  ),
}

export const PressedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle variant="default" pressed={true}>Default Pressed</Toggle>
      <Toggle variant="outline" pressed={true}>Outline Pressed</Toggle>
      <Toggle variant="ghost" pressed={true}>Ghost Pressed</Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle disabled>Disabled</Toggle>
      <Toggle disabled pressed={true}>Disabled Pressed</Toggle>
    </div>
  ),
}

export const DisabledVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle variant="default" disabled>Default Disabled</Toggle>
      <Toggle variant="outline" disabled>Outline Disabled</Toggle>
      <Toggle variant="ghost" disabled>Ghost Disabled</Toggle>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Toggle>
        <span>🔔</span>
        <span style={{ marginLeft: '0.5rem' }}>Notifications</span>
      </Toggle>
      <Toggle pressed={true}>
        <span>❤️</span>
        <span style={{ marginLeft: '0.5rem' }}>Favorite</span>
      </Toggle>
      <Toggle variant="outline">
        <span>🌙</span>
        <span style={{ marginLeft: '0.5rem' }}>Dark Mode</span>
      </Toggle>
    </div>
  ),
}

export const ControlledToggle: Story = {
  render: () => {
    const [pressed, setPressed] = React.useState(false)
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Toggle
          pressed={pressed}
          onPressedChange={setPressed}
        >
          Controlled Toggle
        </Toggle>
        <p>State: {pressed ? 'Pressed' : 'Not Pressed'}</p>
      </div>
    )
  },
}

export const UncontrolledToggle: Story = {
  render: () => {
    const [lastState, setLastState] = React.useState<boolean | null>(null)
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Toggle
          defaultPressed={false}
          onPressedChange={(pressed) => setLastState(pressed)}
        >
          Uncontrolled Toggle
        </Toggle>
        <p>Last change: {lastState === null ? 'None' : lastState ? 'Pressed' : 'Not Pressed'}</p>
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: false,
      darkMode: true,
      autoSave: false,
    })
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <h3>Settings</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Notifications</span>
          <Toggle
            pressed={settings.notifications}
            onPressedChange={(pressed) => setSettings(prev => ({ ...prev, notifications: pressed }))}
            size="sm"
          >
            {settings.notifications ? 'On' : 'Off'}
          </Toggle>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Dark Mode</span>
          <Toggle
            pressed={settings.darkMode}
            onPressedChange={(pressed) => setSettings(prev => ({ ...prev, darkMode: pressed }))}
            variant="outline"
            size="sm"
          >
            {settings.darkMode ? '🌙' : '☀️'}
          </Toggle>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Auto Save</span>
          <Toggle
            pressed={settings.autoSave}
            onPressedChange={(pressed) => setSettings(prev => ({ ...prev, autoSave: pressed }))}
            variant="ghost"
            size="sm"
          >
            {settings.autoSave ? 'On' : 'Off'}
          </Toggle>
        </div>
      </div>
    )
  },
}

export const SizeAndVariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Size & Variant Matrix</h3>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ minWidth: '60px', fontSize: '0.875rem' }}>{size}:</span>
          <Toggle size={size} variant="default">Default</Toggle>
          <Toggle size={size} variant="outline">Outline</Toggle>
          <Toggle size={size} variant="ghost">Ghost</Toggle>
        </div>
      ))}
    </div>
  ),
}

export const Playground: Story = {
  args: {
    children: 'Toggle Button',
    size: 'md',
    variant: 'default',
    pressed: false,
    disabled: false,
  },
}