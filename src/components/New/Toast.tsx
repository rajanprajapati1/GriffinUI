
import React, { useState, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type ToastProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "success" | "warning" | "error"
  duration?: number
  position?: "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left"
  className?: string
}

type ToastProviderProps = {
  children: React.ReactNode
  swipeDirection?: "up" | "down" | "left" | "right"
  swipeThreshold?: number
}

type ToastContextType = {
  toasts: ToastProps[]
  addToast: (toast: ToastProps) => string
  removeToast: (id: string) => void
  updateToast: (id: string, toast: Partial<ToastProps>) => void
}

const ToastContext = React.createContext<ToastContextType>({
  toasts: [],
  addToast: () => "",
  removeToast: () => {},
  updateToast: () => {},
})

const slideIn = {
  top: keyframes`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  "top-right": keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  "top-left": keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,
  "bottom-right": keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,
  "bottom-left": keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,
}

const slideOut = {
  top: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  `,
  "top-right": keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  `,
  "top-left": keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  `,
  "bottom-right": keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  `,
  "bottom-left": keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `,
}

const getPositionStyles = (position: string) => {
  switch (position) {
    case "top":
      return css`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `
    case "top-right":
      return css`
        top: 1rem;
        right: 1rem;
      `
    case "top-left":
      return css`
        top: 1rem;
        left: 1rem;
      `
    case "bottom":
      return css`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `
    case "bottom-right":
      return css`
        bottom: 1rem;
        right: 1rem;
      `
    case "bottom-left":
      return css`
        bottom: 1rem;
        left: 1rem;
      `
    default:
      return css`
        top: 1rem;
        right: 1rem;
      `
  }
}

const ToastContainer = styled.div<{ position: string }>`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 420px;
  
  ${(props) => getPositionStyles(props.position)}
`

const ToastItem = styled.div<{ variant: string; position: string; closing: boolean }>`
  display: flex;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  animation: ${(props) => (props.closing ? slideOut[props.position as keyof typeof slideOut] : slideIn[props.position as keyof typeof slideIn])} 0.2s ease-out;
  
  ${(props) => {
    switch (props.variant) {
      case "success":
        return css`
          border-left: 4px solid #10b981;
        `
      case "warning":
        return css`
          border-left: 4px solid #f59e0b;
        `
      case "error":
        return css`
          border-left: 4px solid #ef4444;
        `
      default:
        return css`
          border-left: 4px solid #3b82f6;
        `
    }
  }}
`

const ToastContent = styled.div`
  flex: 1;
`

const ToastTitle = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
`

const ToastDescription = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
`

const ToastAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  
  &:hover {
    color: #374151;
  }
`

const ToastProvider: React.FC<ToastProviderProps> = ({ children, swipeDirection = "right", swipeThreshold = 50 }) => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string; closing: boolean })[]>([])

  const addToast = (toast: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...toast, id, closing: false }])
    return id
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, closing: true } : toast)))

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 200)
  }

  const updateToast = (id: string, toast: Partial<ToastProps>) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, ...toast } : t)))
  }

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration !== Number.POSITIVE_INFINITY && !toast.closing) {
        const timer = setTimeout(() => {
          removeToast(toast.id)
        }, toast.duration || 5000)

        return () => clearTimeout(timer)
      }
    })
  }, [toasts])

  return (
    <ToastContext.Provider value={{ toasts: toasts as ToastProps[], addToast, removeToast, updateToast }}>
      {children}

      {Object.keys(slideIn).map((position) => (
        <ToastContainer key={position} position={position}>
          {toasts
            .filter((toast) => toast.position === position)
            .map((toast) => (
              <ToastItem
                key={toast.id}
                variant={toast.variant || "default"}
                position={position}
                closing={toast.closing}
              >
                <ToastContent>
                  {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                  {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
                </ToastContent>

                {toast.action && <ToastAction>{toast.action}</ToastAction>}

                <CloseButton onClick={() => removeToast(toast.id)}>
                  <CloseIcon />
                </CloseButton>
              </ToastItem>
            ))}
        </ToastContainer>
      ))}
    </ToastContext.Provider>
  )
}

const Toast: React.FC<ToastProps> = ({
  open,
  onOpenChange,
  title,
  description,
  action,
  variant = "default",
  duration = 5000,
  position = "top-right",
  className,
}) => {
  const { addToast, removeToast } = React.useContext(ToastContext)
  const [toastId, setToastId] = useState<string | null>(null)

  useEffect(() => {
    if (open && !toastId) {
      const id = addToast({
        title,
        description,
        action,
        variant,
        duration,
        position,
      })
      setToastId(id)
    } else if (!open && toastId) {
      removeToast(toastId)
      setToastId(null)
    }
  }, [open, toastId, title, description, action, variant, duration, position])

  return null
}

// Simple close icon
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4L12 12M4 12L12 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Hook to use toast
export const useToast = () => {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return {
    toast: (props: ToastProps) => {
      const id = context.addToast(props)

      return {
        id,
        update: (props: Partial<ToastProps>) => context.updateToast(id, props),
        dismiss: () => context.removeToast(id),
      }
    },
  }
}


interface ToastComponent extends React.FC<ToastProps> {
  Provider: React.FC<ToastProviderProps>
}

const ToastWithProvider: ToastComponent = (props) => {
  return <Toast {...props} />
}

ToastWithProvider.Provider = ToastProvider

export default ToastWithProvider
