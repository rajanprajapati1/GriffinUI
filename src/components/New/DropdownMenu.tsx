
import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"


type DropdownMenuProps = {
  children: React.ReactNode
  className?: string
}

type DropdownMenuTriggerProps = {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

type DropdownMenuContentProps = {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  sideOffset?: number
  className?: string
}

type DropdownMenuItemProps = {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}

type DropdownMenuSeparatorProps = {
  className?: string
}

type DropdownMenuLabelProps = {
  children: React.ReactNode
  className?: string
}

type DropdownMenuGroupProps = {
  children: React.ReactNode
  className?: string
}

type DropdownMenuCheckboxItemProps = {
  children: React.ReactNode
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

type DropdownMenuRadioGroupProps = {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

type DropdownMenuRadioItemProps = {
  children: React.ReactNode
  value: string
  disabled?: boolean
  className?: string
}

const DropdownContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

const RadioGroupContext = React.createContext<{
  value: string | undefined
  onValueChange: ((value: string) => void) | undefined
}>({
  value: undefined,
  onValueChange: undefined,
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const Content = styled.div<{ align?: "start" | "center" | "end" }>`
  position: absolute;
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

const Item = styled.div<{ disabled?: boolean }>`
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

const Label = styled.div`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
`

const Group = styled.div`
  margin: 0.25rem 0;
`

const CheckboxItem = styled(Item)`
  justify-content: space-between;
`

const CheckboxIndicator = styled.div<{ checked?: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`

const RadioItem = styled(Item)`
  justify-content: space-between;
`

const RadioIndicator = styled.div<{ checked?: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`

const DropdownMenuRoot: React.FC<DropdownMenuProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <DropdownContainer className={className}>{children}</DropdownContainer>
    </DropdownContext.Provider>
  )
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, asChild = false, className }) => {
  const { open, setOpen } = React.useContext(DropdownContext)

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

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  align = "end",
  sideOffset = 8,
  className,
}) => {
  const { open, setOpen } = React.useContext(DropdownContext)
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

  if (!open) return null

  return (
    <Content ref={contentRef} align={align} className={className} style={{ top: `${sideOffset}px` }}>
      {children}
    </Content>
  )
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, onSelect, disabled = false, className }) => {
  const { setOpen } = React.useContext(DropdownContext)

  const handleClick = () => {
    if (disabled) return

    if (onSelect) {
      onSelect()
    }

    setOpen(false)
  }

  return (
    <Item onClick={handleClick} disabled={disabled} className={className} role="menuitem">
      {children}
    </Item>
  )
}

const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({ className }) => {
  return <Separator className={className} role="separator" />
}

const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ children, className }) => {
  return <Label className={className}>{children}</Label>
}

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ children, className }) => {
  return (
    <Group className={className} role="group">
      {children}
    </Group>
  )
}

const DropdownMenuCheckboxItem: React.FC<DropdownMenuCheckboxItemProps> = ({
  children,
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
}) => {
  const { setOpen } = React.useContext(DropdownContext)

  const handleClick = () => {
    if (disabled) return

    if (onCheckedChange) {
      onCheckedChange(!checked)
    }

    setOpen(false)
  }

  return (
    <CheckboxItem
      onClick={handleClick}
      disabled={disabled}
      className={className}
      role="menuitemcheckbox"
      aria-checked={checked}
    >
      {children}
      <CheckboxIndicator checked={checked}>{checked && <CheckIcon />}</CheckboxIndicator>
    </CheckboxItem>
  )
}

const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({
  children,
  value,
  onValueChange,
  className,
}) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={className} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({
  children,
  value,
  disabled = false,
  className,
}) => {
  const { setOpen } = React.useContext(DropdownContext)
  const { value: selectedValue, onValueChange } = React.useContext(RadioGroupContext)

  const isChecked = selectedValue === value

  const handleClick = () => {
    if (disabled) return

    if (onValueChange) {
      onValueChange(value)
    }

    setOpen(false)
  }

  return (
    <RadioItem
      onClick={handleClick}
      disabled={disabled}
      className={className}
      role="menuitemradio"
      aria-checked={isChecked}
    >
      {children}
      <RadioIndicator checked={isChecked}>{isChecked && <CircleIcon />}</RadioIndicator>
    </RadioItem>
  )
}

// Simple check icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Simple circle icon
const CircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="4" fill="currentColor" />
  </svg>
)

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Label: DropdownMenuLabel,
  Group: DropdownMenuGroup,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
}

export default DropdownMenu
