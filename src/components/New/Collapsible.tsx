import React, { useState, useRef, useEffect, HTMLAttributes } from "react"
import styled from "styled-components"

type CollapsibleProps = {
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

type CollapsibleTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

type CollapsibleContentProps = {
  children: React.ReactNode
  className?: string
}

const CollapsibleContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

const Root = styled.div`
  width: 100%;
`

const Content = styled.div<{ open: boolean; height: number }>`
  overflow: hidden;
  height: ${(props) => (props.open ? `${props.height}px` : "0")};
  transition: height 0.2s ease-in-out;
`

const CollapsibleRoot: React.FC<CollapsibleProps> = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = (value: boolean | ((prevState: boolean) => boolean)) => {
    if (!isControlled) {
      setUncontrolledOpen(value)
    }

    if (onOpenChange) {
      const newValue = typeof value === "function" ? value(open) : value
      onOpenChange(newValue)
    }
  }

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <Root className={className}>{children}</Root>
    </CollapsibleContext.Provider>
  )
}

const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ children, asChild = false, className }) => {
  const { open, setOpen } = React.useContext(CollapsibleContext)

  const handleClick = () => {
    setOpen(!open)
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        handleClick();
        child.props.onClick?.(e);
      },
      'aria-expanded': open,
      className: `${child.props.className || ''} ${className || ''}`.trim() || undefined,
    });
  }
  

  return (
    <div onClick={handleClick} aria-expanded={open} className={className} style={{ cursor: "pointer" }}>
      {children}
    </div>
  )
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children, className }) => {
  const { open } = React.useContext(CollapsibleContext)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setHeight(entry.contentRect.height)
        }
      })

      resizeObserver.observe(contentRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [])

  return (
    <Content open={open} height={height} className={className}>
      <div ref={contentRef}>{children}</div>
    </Content>
  )
}

const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
}

export default Collapsible
