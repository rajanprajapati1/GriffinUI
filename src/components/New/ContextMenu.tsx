import React, { useState, useRef, useEffect, HTMLAttributes } from "react"
import styled, { css, keyframes } from "styled-components"

type ContextMenuProps = {
  children: React.ReactNode
  className?: string
}

type ContextMenuTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
  disabled?: boolean
  className?: string
}

type ContextMenuContentProps = {
  children: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
  sideOffset?: number
}

type ContextMenuItemProps = {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}

type ContextMenuSeparatorProps = {
  className?: string
}

type ContextMenuSubProps = {
  children: React.ReactNode
  className?: string
}

type ContextMenuSubTriggerProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

type ContextMenuSubContentProps = {
  children: React.ReactNode
  className?: string
  sideOffset?: number
}

type Position = {
  x: number
  y: number
}

const ContextMenuContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  position: Position
  setPosition: React.Dispatch<React.SetStateAction<Position>>
}>({
  open: false,
  setOpen: () => {},
  position: { x: 0, y: 0 },
  setPosition: () => {},
})

const ContextMenuSubContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

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

const MenuContent = styled.div<{ align?: "start" | "center" | "end" }>`
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${fadeIn} 0.1s ease-out;
  
  ${(props) =>
    props.align === "center" &&
    css`
    transform-origin: center;
  `}
  
  ${(props) =>
    props.align === "start" &&
    css`
    transform-origin: top left;
  `}
  
  ${(props) =>
    props.align === "end" &&
    css`
    transform-origin: top right;
  `}
`

const MenuItem = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  
  ${(props) =>
    !props.disabled &&
    css`
    &:hover {
      background-color: #f3f4f6;
    }
    
    &:active {
      background-color: #e5e7eb;
    }
  `}
  
  ${(props) =>
    props.disabled &&
    css`
    color: #9ca3af;
    cursor: not-allowed;
  `}
`

const Separator = styled.div`
  height: 1px;
  margin: 0.5rem 0;
  background-color: #e5e7eb;
`

const SubTrigger = styled(MenuItem)<{ isOpen?: boolean }>`
  justify-content: space-between;
  
  ${(props) =>
    props.isOpen &&
    css`
    background-color: #f3f4f6;
  `}
`

const ChevronRight = styled.div`
  margin-left: 0.5rem;
`

const SubContent = styled(MenuContent)`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
`

const ContextMenuRoot: React.FC<ContextMenuProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  return (
    <ContextMenuContext.Provider value={{ open, setOpen, position, setPosition }}>
      <div className={className}>{children}</div>
    </ContextMenuContext.Provider>
  )
}

const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = ({
  children,
  asChild = false,
  disabled = false,
  className,
}) => {
  const { setOpen, setPosition } = React.useContext(ContextMenuContext)

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled) return

    e.preventDefault()
    setOpen(true)
    setPosition({ x: e.clientX, y: e.clientY })
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  
    return React.cloneElement(child, {
      onContextMenu: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        handleContextMenu(e);
        child.props.onContextMenu?.(e);
      },
      className: `${child.props.className || ''} ${className || ''}`.trim() || undefined,
    });
  }

  return (
    <div onContextMenu={handleContextMenu} className={className}>
      {children}
    </div>
  )
}

const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
  children,
  className,
  align = "start",
  sideOffset = 0,
}) => {
  const { open, setOpen, position } = React.useContext(ContextMenuContext)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, setOpen])

  useEffect(() => {
    if (open && contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let { x, y } = position

      // Adjust horizontal position if menu would go off screen
      if (x + rect.width > viewportWidth) {
        x = viewportWidth - rect.width - 10
      }

      // Adjust vertical position if menu would go off screen
      if (y + rect.height > viewportHeight) {
        y = viewportHeight - rect.height - 10
      }

      contentRef.current.style.position = "fixed"
      contentRef.current.style.top = `${y + sideOffset}px`
      contentRef.current.style.left = `${x}px`
    }
  }, [open, position, sideOffset])

  if (!open) return null

  return (
    <MenuContent ref={contentRef} className={className} align={align} role="menu">
      {children}
    </MenuContent>
  )
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ children, onSelect, disabled = false, className }) => {
  const { setOpen } = React.useContext(ContextMenuContext)

  const handleClick = () => {
    if (disabled) return

    if (onSelect) {
      onSelect()
    }

    setOpen(false)
  }

  return (
    <MenuItem onClick={handleClick} disabled={disabled} className={className} role="menuitem">
      {children}
    </MenuItem>
  )
}

const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({ className }) => {
  return <Separator className={className} role="separator" />
}

const ContextMenuSub: React.FC<ContextMenuSubProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false)

  return (
    <ContextMenuSubContext.Provider value={{ open, setOpen }}>
      <div className={className}>{children}</div>
    </ContextMenuSubContext.Provider>
  )
}

const ContextMenuSubTrigger: React.FC<ContextMenuSubTriggerProps> = ({ children, className, disabled = false }) => {
  const { open, setOpen } = React.useContext(ContextMenuSubContext)

  const handleMouseEnter = () => {
    if (!disabled) {
      setOpen(true)
    }
  }

  return (
    <SubTrigger onMouseEnter={handleMouseEnter} disabled={disabled} isOpen={open} className={className}>
      {children}
      <ChevronRight>
        <ChevronRightIcon />
      </ChevronRight>
    </SubTrigger>
  )
}

const ContextMenuSubContent: React.FC<ContextMenuSubContentProps> = ({ children, className, sideOffset = 0 }) => {
  const { open } = React.useContext(ContextMenuSubContext)
  const contentRef = useRef<HTMLDivElement>(null)

  if (!open) return null

  return (
    <SubContent ref={contentRef} className={className} style={{ marginLeft: `${sideOffset}px` }} role="menu">
      {children}
    </SubContent>
  )
}

// Simple chevron right icon
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
}

export default ContextMenu
