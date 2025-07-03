import React, { useState, useRef, useEffect, HTMLAttributes } from "react"
import styled, { css, keyframes } from "styled-components"

type AlertDialogProps = {
  children: React.ReactNode
}

type AlertDialogTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
}

type AlertDialogContentProps = {
  children: React.ReactNode
  onClose?: () => void
  showCloseButton?: boolean
}

type AlertDialogTitleProps = {
  children: React.ReactNode
}

type AlertDialogDescriptionProps = {
  children: React.ReactNode
}

type AlertDialogFooterProps = {
  children: React.ReactNode
}

type AlertDialogActionProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "ghost"
}

type AlertDialogCancelProps = {
  children: React.ReactNode
  onClick?: () => void
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const DialogContent = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  animation: ${fadeIn} 0.2s ease-out;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  color: #6b7280;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: currentColor;
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`

const Description = styled.p`
  margin: 0.5rem 0 1.5rem 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

const Button = styled.button<{ variant?: "default" | "destructive" | "outline" | "ghost" }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${(props) => {
    switch (props.variant) {
      case "destructive":
        return css`
          background-color: #ef4444;
          color: white;
          border: none;
          &:hover {
            background-color: #dc2626;
          }
        `
      case "outline":
        return css`
          background-color: transparent;
          color: #111827;
          border: 1px solid #d1d5db;
          &:hover {
            background-color: #f3f4f6;
            border-color: #9ca3af;
          }
        `
      case "ghost":
        return css`
          background-color: transparent;
          color: #111827;
          border: none;
          &:hover {
            background-color: #f3f4f6;
          }
        `
      default:
        return css`
          background-color: #3b82f6;
          color: white;
          border: none;
          &:hover {
            background-color: #2563eb;
          }
        `
    }
  }}
`

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  background-color: transparent;
  color: #111827;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }
`

const AlertDialogContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

const AlertDialogRoot: React.FC<AlertDialogProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return <AlertDialogContext.Provider value={{ open, setOpen }}>{children}</AlertDialogContext.Provider>
}

const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({ children, asChild = false }) => {
  const { setOpen } = React.useContext(AlertDialogContext);

  if (asChild) {
    return React.cloneElement(children as React.ReactElement<HTMLAttributes<any>>, {
      onClick: () => setOpen(true),
    });
  }

  return <div onClick={() => setOpen(true)}>{children}</div>;
};


const AlertDialogContent: React.FC<AlertDialogContentProps> = ({ children, onClose, showCloseButton = true }) => {
  const { open, setOpen } = React.useContext(AlertDialogContext)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        if (onClose) onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setOpen(false)
        if (onClose) onClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, setOpen, onClose])

  if (!open) return null

  return (
    <Overlay>
      <DialogContent ref={contentRef}>
        {showCloseButton && (
          <CloseButton
            onClick={() => {
              setOpen(false)
              if (onClose) onClose()
            }}
          />
        )}
        {children}
      </DialogContent>
    </Overlay>
  )
}

const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({ children }) => {
  return <Title>{children}</Title>
}

const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({ children }) => {
  return <Description>{children}</Description>
}

const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({ children }) => {
  return <Footer>{children}</Footer>
}

const AlertDialogAction: React.FC<AlertDialogActionProps> = ({ children, onClick, variant = "default" }) => {
  const { setOpen } = React.useContext(AlertDialogContext)

  return (
    <Button
      variant={variant}
      onClick={() => {
        setOpen(false)
        if (onClick) onClick()
      }}
    >
      {children}
    </Button>
  )
}

const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({ children, onClick }) => {
  const { setOpen } = React.useContext(AlertDialogContext)

  return (
    <CancelButton
      onClick={() => {
        setOpen(false)
        if (onClick) onClick()
      }}
    >
      {children}
    </CancelButton>
  )
}

const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
}

export default AlertDialog
