import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Toast, { useToast } from '../../New/Toast'

type Story = StoryObj<typeof Toast>

const meta: Meta<typeof Toast> = {
  title: 'Components/New/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Toast.Provider>
        <Story />
      </Toast.Provider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'],
    },
    duration: {
      control: { type: 'number' },
    },
  },
}

export default meta

// Helper component to demonstrate toast usage
const ToastDemo: React.FC<{ 
  variant?: 'default' | 'success' | 'warning' | 'error'
  position?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left'
  title?: string
  description?: string
  withAction?: boolean
  duration?: number
}> = ({ 
  variant = 'default', 
  position = 'top-right', 
  title = 'Toast Title',
  description = 'This is a toast message description.',
  withAction = false,
  duration = 5000
}) => {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title,
      description,
      variant,
      position,
      duration,
      action: withAction ? (
        <button
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
          onClick={() => alert('Action clicked!')}
        >
          Action
        </button>
      ) : undefined,
    })
  }

  return (
    <button
      onClick={showToast}
      style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        cursor: 'pointer',
      }}
    >
      Show Toast
    </button>
  )
}

export const Default: Story = {
  render: () => <ToastDemo />,
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ToastDemo variant="default" title="Default Toast" />
      <ToastDemo variant="success" title="Success Toast" description="Operation completed successfully!" />
      <ToastDemo variant="warning" title="Warning Toast" description="Please check your input." />
      <ToastDemo variant="error" title="Error Toast" description="Something went wrong!" />
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '600px' }}>
      <ToastDemo position="top-left" title="Top Left" />
      <ToastDemo position="top" title="Top Center" />
      <ToastDemo position="top-right" title="Top Right" />
      <ToastDemo position="bottom-left" title="Bottom Left" />
      <ToastDemo position="bottom" title="Bottom Center" />
      <ToastDemo position="bottom-right" title="Bottom Right" />
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ToastDemo 
        variant="default" 
        title="Confirmation Required" 
        description="Are you sure you want to proceed?"
        withAction={true}
      />
      <ToastDemo 
        variant="success" 
        title="File Uploaded" 
        description="Your file has been uploaded successfully."
        withAction={true}
      />
      <ToastDemo 
        variant="error" 
        title="Upload Failed" 
        description="Failed to upload file. Please try again."
        withAction={true}
      />
    </div>
  ),
}

export const CustomDurations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ToastDemo 
        duration={1000} 
        title="Quick Toast" 
        description="This disappears in 1 second"
      />
      <ToastDemo 
        duration={3000} 
        title="Medium Toast" 
        description="This disappears in 3 seconds"
      />
      <ToastDemo 
        duration={10000} 
        title="Long Toast" 
        description="This disappears in 10 seconds"
      />
      <ToastDemo 
        duration={Number.POSITIVE_INFINITY} 
        title="Persistent Toast" 
        description="This stays until manually closed"
      />
    </div>
  ),
}

export const MultipleToasts: Story = {
  render: () => {
    const { toast } = useToast()

    const showMultipleToasts = () => {
      toast({
        title: 'First Toast',
        description: 'This is the first toast',
        variant: 'default',
        position: 'top-right',
      })

      setTimeout(() => {
        toast({
          title: 'Second Toast',
          description: 'This is the second toast',
          variant: 'success',
          position: 'top-right',
        })
      }, 500)

      setTimeout(() => {
        toast({
          title: 'Third Toast',
          description: 'This is the third toast',
          variant: 'warning',
          position: 'top-right',
        })
      }, 1000)
    }

    return (
      <button
        onClick={showMultipleToasts}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Multiple Toasts
      </button>
    )
  },
}

export const UpdateableToast: Story = {
  render: () => {
    const { toast } = useToast()

    const showUpdatableToast = () => {
      const toastInstance = toast({
        title: 'Loading...',
        description: 'Please wait while we process your request',
        variant: 'default',
        duration: Number.POSITIVE_INFINITY,
      })

      setTimeout(() => {
        toastInstance.update({
          title: 'Success!',
          description: 'Your request has been processed successfully',
          variant: 'success',
          duration: 3000,
        })
      }, 2000)
    }

    return (
      <button
        onClick={showUpdatableToast}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Updatable Toast
      </button>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const { toast } = useToast()
    const [settings, setSettings] = React.useState({
      variant: 'default' as 'default' | 'success' | 'warning' | 'error',
      position: 'top-right' as 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left',
      duration: 5000,
      title: 'Interactive Toast',
      description: 'This toast can be customized',
    })

    const showCustomToast = () => {
      toast({
        title: settings.title,
        description: settings.description,
        variant: settings.variant,
        position: settings.position,
        duration: settings.duration,
        action: (
          <button
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
            onClick={() => alert('Custom action!')}
          >
            Custom
          </button>
        ),
      })
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <h3>Toast Customizer</h3>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Variant:
          </label>
          <select
            value={settings.variant}
            onChange={(e) => setSettings(prev => ({ ...prev, variant: e.target.value as any }))}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
          >
            <option value="default">Default</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Position:
          </label>
          <select
            value={settings.position}
            onChange={(e) => setSettings(prev => ({ ...prev, position: e.target.value as any }))}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
          >
            <option value="top">Top</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom">Bottom</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Duration (ms):
          </label>
          <input
            type="number"
            value={settings.duration}
            onChange={(e) => setSettings(prev => ({ ...prev, duration: Number(e.target.value) }))}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Title:
          </label>
          <input
            type="text"
            value={settings.title}
            onChange={(e) => setSettings(prev => ({ ...prev, title: e.target.value }))}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Description:
          </label>
          <textarea
            value={settings.description}
            onChange={(e) => setSettings(prev => ({ ...prev, description: e.target.value }))}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db', minHeight: '80px' }}
          />
        </div>

        <button
          onClick={showCustomToast}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Show Custom Toast
        </button>
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const { toast } = useToast()

    const examples = [
      {
        label: 'File Upload Success',
        action: () => toast({
          title: 'Upload Complete',
          description: 'Your file "document.pdf" has been uploaded successfully.',
          variant: 'success',
          position: 'top-right',
          action: (
            <button
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
              onClick={() => alert('View file')}
            >
              View
            </button>
          ),
        }),
      },
      {
        label: 'Connection Error',
        action: () => toast({
          title: 'Connection Failed',
          description: 'Unable to connect to the server. Please check your internet connection.',
          variant: 'error',
          position: 'top-right',
          duration: 8000,
          action: (
            <button
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
              onClick={() => alert('Retry connection')}
            >
              Retry
            </button>
          ),
        }),
      },
      {
        label: 'Form Validation Warning',
        action: () => toast({
          title: 'Validation Warning',
          description: 'Some fields are missing required information. Please review your form.',
          variant: 'warning',
          position: 'top',
          duration: 6000,
        }),
      },
      {
        label: 'Auto-save Notification',
        action: () => toast({
          title: 'Draft Saved',
          description: 'Your changes have been automatically saved.',
          variant: 'default',
          position: 'bottom-right',
          duration: 2000,
        }),
      },
      {
        label: 'Confirmation Required',
        action: () => toast({
          title: 'Delete Confirmation',
          description: 'Are you sure you want to delete this item? This action cannot be undone.',
          variant: 'error',
          position: 'top',
          duration: Number.POSITIVE_INFINITY,
          action: (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Item deleted')}
              >
                Delete
              </button>
              <button
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Cancelled')}
              >
                Cancel
              </button>
            </div>
          ),
        }),
      },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <h3>Real World Examples</h3>
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={example.action}
            style={{
              backgroundColor: '#f3f4f6',
              color: '#374151',
              border: '1px solid #d1d5db',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {example.label}
          </button>
        ))}
      </div>
    )
  },
}

export const Playground: Story = {
  args: {
    variant: 'default',
    position: 'top-right',
    duration: 5000,
  },
  render: (args) => (
    <ToastDemo 
      variant={args.variant}
      position={args.position}
      duration={args.duration}
      title="Playground Toast"
      description="This toast can be customized using the controls"
    />
  ),
}