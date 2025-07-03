// src/stories/Tooltip.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Tooltip, { TooltipPresets } from '../../ui/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A comprehensive tooltip component with extensive customization options including:
- Multiple positions and triggers
- Various color variants and sizes
- Rich content support
- Interactive tooltips
- Follow cursor functionality
- Custom animations
        `,
      },
    },
  },
  argTypes: {
    content: { 
      control: 'text',
      description: 'Content to display in the tooltip'
    },
    title: { 
      control: 'text',
      description: 'Optional title for the tooltip'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the tooltip relative to the trigger element'
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'How the tooltip is triggered'
    },
    variant: {
      control: 'select',
      options: ['default', 'dark', 'light', 'success', 'warning', 'error', 'info', 'primary', 'secondary'],
      description: 'Visual variant of the tooltip'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the tooltip'
    },
    animation: {
      control: 'select',
      options: ['fade', 'slide', 'bounce', 'pulse', 'none'],
      description: 'Animation when showing/hiding the tooltip'
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay before showing tooltip (ms)'
    },
    duration: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: 'Duration before auto-hiding tooltip (ms)'
    },
    offset: {
      control: { type: 'number', min: 0, max: 50, step: 2 },
      description: 'Distance between tooltip and trigger element'
    },
    maxWidth: {
      control: { type: 'number', min: 100, max: 500, step: 10 },
      description: 'Maximum width of the tooltip'
    },
    arrow: {
      control: 'boolean',
      description: 'Show arrow pointing to trigger element'
    },
    shadow: {
      control: 'boolean',
      description: 'Add drop shadow to tooltip'
    },
    rounded: {
      control: 'boolean',
      description: 'Use rounded corners'
    },
    multiline: {
      control: 'boolean',
      description: 'Allow multiline content'
    },
    interactive: {
      control: 'boolean',
      description: 'Allow interaction with tooltip content'
    },
    followCursor: {
      control: 'boolean',
      description: 'Tooltip follows cursor movement'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic Stories
export const Default: Story = {
  args: {
    content: 'This is a tooltip!',
    position: 'top',
    variant: 'default',
    size: 'md',
    animation: 'fade',
    arrow: true,
    shadow: true,
  },
  render: (args) => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <button style={{ 
          padding: '12px 24px', 
          fontSize: '16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const WithTitle: Story = {
  args: {
    title: 'Tooltip Title',
    content: 'This tooltip has both a title and content description.',
    variant: 'info',
  },
  render: (args) => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <span style={{ 
          textDecoration: 'underline', 
          cursor: 'pointer',
          fontSize: '18px',
          color: '#007bff'
        }}>
          Hover for titled tooltip
        </span>
      </Tooltip>
    </div>
  ),
};

// Position Variants
export const AllPositions: Story = {
  render: () => (
    <div style={{ 
      padding: '6rem', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3rem',
      placeItems: 'center'
    }}>
      <Tooltip content="Top Left" position="top-left">
        <button style={buttonStyle}>Top Left</button>
      </Tooltip>
      <Tooltip content="Top" position="top">
        <button style={buttonStyle}>Top</button>
      </Tooltip>
      <Tooltip content="Top Right" position="top-right">
        <button style={buttonStyle}>Top Right</button>
      </Tooltip>
      
      <Tooltip content="Left" position="left">
        <button style={buttonStyle}>Left</button>
      </Tooltip>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'bold' }}>
        Center
      </div>
      <Tooltip content="Right" position="right">
        <button style={buttonStyle}>Right</button>
      </Tooltip>
      
      <Tooltip content="Bottom Left" position="bottom-left">
        <button style={buttonStyle}>Bottom Left</button>
      </Tooltip>
      <Tooltip content="Bottom" position="bottom">
        <button style={buttonStyle}>Bottom</button>
      </Tooltip>
      <Tooltip content="Bottom Right" position="bottom-right">
        <button style={buttonStyle}>Bottom Right</button>
      </Tooltip>
    </div>
  ),
};

// Color Variants
export const ColorVariants: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '1rem', 
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <Tooltip content="Default variant" variant="default">
        <button style={buttonStyle}>Default</button>
      </Tooltip>
      <Tooltip content="Dark variant" variant="dark">
        <button style={buttonStyle}>Dark</button>
      </Tooltip>
      <Tooltip content="Light variant" variant="light">
        <button style={buttonStyle}>Light</button>
      </Tooltip>
      <Tooltip content="Success message" variant="success">
        <button style={buttonStyle}>Success</button>
      </Tooltip>
      <Tooltip content="Warning message" variant="warning">
        <button style={buttonStyle}>Warning</button>
      </Tooltip>
      <Tooltip content="Error message" variant="error">
        <button style={buttonStyle}>Error</button>
      </Tooltip>
      <Tooltip content="Information" variant="info">
        <button style={buttonStyle}>Info</button>
      </Tooltip>
      <Tooltip content="Primary action" variant="primary">
        <button style={buttonStyle}>Primary</button>
      </Tooltip>
      <Tooltip content="Secondary action" variant="secondary">
        <button style={buttonStyle}>Secondary</button>
      </Tooltip>
    </div>
  ),
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '2rem', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tooltip content="Extra small" size="xs">
        <button style={buttonStyle}>XS</button>
      </Tooltip>
      <Tooltip content="Small size" size="sm">
        <button style={buttonStyle}>SM</button>
      </Tooltip>
      <Tooltip content="Medium size" size="md">
        <button style={buttonStyle}>MD</button>
      </Tooltip>
      <Tooltip content="Large size tooltip" size="lg">
        <button style={buttonStyle}>LG</button>
      </Tooltip>
      <Tooltip content="Extra large tooltip content" size="xl">
        <button style={buttonStyle}>XL</button>
      </Tooltip>
    </div>
  ),
};

// Animation Variants
export const AnimationVariants: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '2rem',
      justifyContent: 'center'
    }}>
      <Tooltip content="Fade animation" animation="fade">
        <button style={buttonStyle}>Fade</button>
      </Tooltip>
      <Tooltip content="Slide animation" animation="slide">
        <button style={buttonStyle}>Slide</button>
      </Tooltip>
      <Tooltip content="Bounce animation" animation="bounce">
        <button style={buttonStyle}>Bounce</button>
      </Tooltip>
      <Tooltip content="Pulse animation" animation="pulse">
        <button style={buttonStyle}>Pulse</button>
      </Tooltip>
      <Tooltip content="No animation" animation="none">
        <button style={buttonStyle}>None</button>
      </Tooltip>
    </div>
  ),
};

// Trigger Types
export const TriggerTypes: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '2rem',
      justifyContent: 'center'
    }}>
      <Tooltip content="Hover to see tooltip" trigger="hover">
        <button style={buttonStyle}>Hover</button>
      </Tooltip>
      <Tooltip content="Click to toggle tooltip" trigger="click">
        <button style={buttonStyle}>Click</button>
      </Tooltip>
      <Tooltip content="Focus to see tooltip" trigger="focus">
        <button style={buttonStyle}>Focus</button>
      </Tooltip>
    </div>
  ),
};

// Interactive Features
export const InteractiveTooltip: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        content={
          <div>
            <p>This tooltip is interactive!</p>
            <button 
              style={{ 
                padding: '4px 8px', 
                margin: '4px 0',
                background: '#fff',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => alert('Button clicked!')}
            >
              Click me
            </button>
          </div>
        }
        interactive
        trigger="click"
        multiline
        variant="light"
      >
        <button style={buttonStyle}>Interactive Tooltip</button>
      </Tooltip>
    </div>
  ),
};

// Rich Content
export const RichContent: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        content={`
          <strong>Rich HTML Content</strong><br/>
          <em>This supports HTML formatting</em><br/>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <code>console.log('code example')</code>
        `}
        rich
        multiline
        maxWidth={300}
        variant="dark"
      >
        <button style={buttonStyle}>Rich Content</button>
      </Tooltip>
    </div>
  ),
};

// Follow Cursor
export const FollowCursor: Story = {
  render: () => (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        content="I follow your cursor!"
        followCursor
        variant="primary"
      >
        <div style={{
          width: '200px',
          height: '100px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Move mouse over me
        </div>
      </Tooltip>
    </div>
  ),
};

// Controlled Tooltip
export const ControlledTooltip: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    
    return (
      <div style={{ 
        padding: '4rem', 
        display: 'flex', 
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <button 
          style={buttonStyle}
          onClick={() => setVisible(!visible)}
        >
          Toggle Tooltip
        </button>
        
        <Tooltip
          content="This is a controlled tooltip"
          visible={visible}
          trigger="manual"
          variant="success"
        >
          <div style={{
            padding: '16px',
            background: '#f0f0f0',
            borderRadius: '8px',
            border: '2px dashed #ccc'
          }}>
            Target Element
          </div>
        </Tooltip>
      </div>
    );
  },
};

// Preset Examples
export const PresetExamples: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <Tooltip {...TooltipPresets.info({ content: 'Info preset' })}>
        <button style={buttonStyle}>Info Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.success({ content: 'Success preset' })}>
        <button style={buttonStyle}>Success Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.warning({ content: 'Warning preset' })}>
        <button style={buttonStyle}>Warning Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.error({ content: 'Error preset' })}>
        <button style={buttonStyle}>Error Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.clickable({ content: 'Click me to toggle' })}>
        <button style={buttonStyle}>Clickable Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.rich({ 
        content: '<strong>Rich</strong> <em>content</em> preset with <code>HTML</code>' 
      })}>
        <button style={buttonStyle}>Rich Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.minimal({ content: 'Minimal preset' })}>
        <button style={buttonStyle}>Minimal Preset</button>
      </Tooltip>
      
      <Tooltip {...TooltipPresets.deluxe({ content: 'Deluxe preset with all features' })}>
        <button style={buttonStyle}>Deluxe Preset</button>
      </Tooltip>
    </div>
  ),
};

// Advanced Features
export const AdvancedFeatures: Story = {
  render: () => (
    <div style={{ 
      padding: '4rem', 
      display: 'flex', 
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <Tooltip
        content="Delayed tooltip with custom timing"
        delay={1000}
        duration={3000}
        variant="warning"
        onShow={() => console.log('Tooltip shown!')}
        onHide={() => console.log('Tooltip hidden!')}
      >
        <button style={buttonStyle}>Delayed (1s)</button>
      </Tooltip>
      
      <Tooltip
        content="This tooltip has no arrow and custom offset"
        arrow={false}
        offset={20}
        variant="dark"
      >
        <button style={buttonStyle}>No Arrow</button>
      </Tooltip>
      
      <Tooltip
        content="Rounded corners with extra shadow"
        rounded
        shadow
        variant="primary"
      >
        <button style={buttonStyle}>Rounded</button>
      </Tooltip>
      
      <Tooltip
        content="This is a very long tooltip text that demonstrates the multiline capability and max width settings working together to create readable content"
        multiline
        maxWidth={200}
        variant="info"
      >
        <button style={buttonStyle}>Multiline</button>
      </Tooltip>
    </div>
  ),
};

// Playground Story for interactive testing
export const Playground: Story = {
  args: {
    content: 'Customize me with the controls!',
    position: 'top',
    variant: 'default',
    size: 'md',
    animation: 'fade',
    trigger: 'hover',
    arrow: true,
    shadow: true,
    rounded: false,
    multiline: false,
    interactive: false,
    followCursor: false,
    disabled: false,
    delay: 0,
    duration: 0,
    offset: 8,
    maxWidth: 250,
  },
  render: (args) => (
    <div style={{ 
      padding: '6rem', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px'
    }}>
      <Tooltip {...args}>
        <button style={{
          ...buttonStyle,
          background: args.disabled ? '#ccc' : '#007bff',
          cursor: args.disabled ? 'not-allowed' : 'pointer'
        }}>
          {args.disabled ? 'Disabled' : 'Test Element'}
        </button>
      </Tooltip>
    </div>
  ),
};

// Helper styles
const buttonStyle: React.CSSProperties = {
  padding: '10px 16px',
  fontSize: '14px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontWeight: '500',
};