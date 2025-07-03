
import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type HoverCardProps = {
  children: React.ReactNode
  className?: string
  openDelay?: number
  closeDelay?: number
}

type HoverCardTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

type HoverCardContentProps = {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  sideOffset?: number
  className?: string
}

const HoverCardContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const HoverCardContainer = styled.div`
  position: relative;
  display: inline-block;
`

const Content = styled.div<{ align?: "start" | "center" | "end" }>`
  position: absolute;
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${fadeIn} 0.15s ease-out;
  
  ${(props) =>
    props.align === "center" &&
    css`
    left: 50%;
    transform: translateX(-50%);
  `}
  
  ${(props) =>
    props.align === "start" &&
    css`
    left: 0;
  `}
  
  ${(props) =>
    props.align === "end" &&
    css`
    right: 0;
  `}
`

const HoverCardRoot: React.FC<HoverCardProps> = ({ children, className, openDelay = 300, closeDelay = 200 }) => {
  const [open, setOpen] = useState(false)
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleOpen = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    if (!open && !openTimeoutRef.current) {
      openTimeoutRef.current = setTimeout(() => {
        setOpen(true)
        openTimeoutRef.current = null
      }, openDelay)
    }
  }

  const handleClose = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }

    if (open && !closeTimeoutRef.current) {
      closeTimeoutRef.current = setTimeout(() => {
        setOpen(false)
        closeTimeoutRef.current = null
      }, closeDelay)
    }
  }

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current)
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <HoverCardContext.Provider value={{ open, setOpen }}>
      <HoverCardContainer className={className} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </HoverCardContainer>
    </HoverCardContext.Provider>
  )
}

const HoverCardTrigger: React.FC<HoverCardTriggerProps> = ({ children, asChild = false, className }) => {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
    return React.cloneElement(child, {
      className: `${child.props.className || ""} ${className || ""}`.trim() || undefined,
    })
  }

  return <div className={className}>{children}</div>
}

const HoverCardContent: React.FC<HoverCardContentProps> = ({
  children,
  align = "center",
  sideOffset = 8,
  className,
}) => {
  const { open } = React.useContext(HoverCardContext)

  if (!open) return null

  return (
    <Content align={align} className={className} style={{ top: `${sideOffset}px` }}>
      {children}
    </Content>
  )
}

const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
}

export default HoverCard
