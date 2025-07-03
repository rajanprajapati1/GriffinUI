
import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type SheetProps = {
  children: React.ReactNode
  className?: string
}

type SheetTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

type SheetContentProps = {
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
  onClose?: () => void
  showCloseButton?: boolean
}

type SheetHeaderProps = {
  children: React.ReactNode
  className?: string
}

type SheetFooterProps = {
  children: React.ReactNode
  className?: string
}

type SheetTitleProps = {
  children: React.ReactNode
  className?: string
}

type SheetDescriptionProps = {
  children: React.ReactNode
  className?: string
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideInBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
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
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`

const getContentPosition = (side: "top" | "right" | "bottom" | "left") => {
  switch (side) {
    case "top":
      return css`
        top: 0;
        left: 0;
        right: 0;
        animation: ${slideInTop} 0.3s ease-out;
      `
    case "right":
      return css`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${slideInRight} 0.3s ease-out;
      `
    case "bottom":
      return css`
        bottom: 0;
        left: 0;
        right: 0;
        animation: ${slideInBottom} 0.3s ease-out;
      `
    case "left":
      return css`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${slideInLeft} 0.3s ease-out;
      `
    default:
      return css`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${slideInRight} 0.3s ease-out;
      `
  }
}

const getContentSize = (size: "sm" | "md" | "lg" | "xl" | "full", side: "top" | "right" | "bottom" | "left") => {
  const isVertical = side === "top" || side === "bottom"

  switch (size) {
    case "sm":
      return isVertical ? "15rem" : "20rem"
    case "md":
      return isVertical ? "25rem" : "30rem"
    case "lg":
      return isVertical ? "35rem" : "40rem"
    case "xl":
      return isVertical ? "45rem" : "50rem"
    case "full":
      return "100%"
    default:
      return isVertical ? "25rem" : "30rem"
  }
}

const Content = styled.div<{ side: "top" | "right" | "bottom" | "left"; size: "sm" | "md" | "lg" | "xl" | "full" }>`
  position: fixed;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  
  ${(props) => getContentPosition(props.side)}
  
  ${(props) => {
    const sizeValue = getContentSize(props.size, props.side)

    if (props.side === "top" || props.side === "bottom") {
      return css`
        height: ${sizeValue};
        max-height: 80vh;
      `
    } else {
      return css`
        width: ${sizeValue};
        max-width: 80vw;
      `
    }
  }}
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
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
  
  &::before,
  &::after {
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

const Header = styled.div`
  padding: 1.5rem 1.5rem 0.5rem;
`

const Footer = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  margin-top: auto;
`

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`

const Description = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`

const Body = styled.div`
  padding: 1rem 1.5rem;
  overflow-y: auto;
  flex: 1;
`

const SheetRoot: React.FC<SheetProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false)

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      <div className={className}>{children}</div>
    </SheetContext.Provider>
  )
}

const SheetTrigger: React.FC<SheetTriggerProps> = ({ children, asChild = false, className }) => {
  const { setOpen } = React.useContext(SheetContext)

  const handleClick = () => {
    setOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
   return React.cloneElement(child, {
         onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
           handleClick();
           child.props.onClick?.(e);
         },
         className: `${child.props.className || ''} ${className || ''}`.trim() || undefined,
       });
  }

  return (
    <div onClick={handleClick} className={className} style={{ cursor: "pointer" }}>
      {children}
    </div>
  )
}

const SheetContent: React.FC<SheetContentProps> = ({
  children,
  side = "right",
  size = "md",
  className,
  onClose,
  showCloseButton = true,
}) => {
  const { open, setOpen } = React.useContext(SheetContext)
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
      <Content ref={contentRef} side={side} size={size} className={className}>
        {showCloseButton && (
          <CloseButton
            onClick={() => {
              setOpen(false)
              if (onClose) onClose()
            }}
          />
        )}
        {children}
      </Content>
    </Overlay>
  )
}

const SheetHeader: React.FC<SheetHeaderProps> = ({ children, className }) => {
  return <Header className={className}>{children}</Header>
}

const SheetFooter: React.FC<SheetFooterProps> = ({ children, className }) => {
  return <Footer className={className}>{children}</Footer>
}

const SheetTitle: React.FC<SheetTitleProps> = ({ children, className }) => {
  return <Title className={className}>{children}</Title>
}

const SheetDescription: React.FC<SheetDescriptionProps> = ({ children, className }) => {
  return <Description className={className}>{children}</Description>
}

const SheetBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <Body className={className}>{children}</Body>
}

const Sheet = {
  Root: SheetRoot,
  Trigger: SheetTrigger,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
  Body: SheetBody,
}

export default Sheet
