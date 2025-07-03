
import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type MenubarProps = {
  children: React.ReactNode
  className?: string
}

type MenubarMenuProps = {
  children: React.ReactNode
  value: string
  className?: string
}

type MenubarTriggerProps = {
  children: React.ReactNode
  className?: string
}

type MenubarContentProps = {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  sideOffset?: number
  className?: string
}

type MenubarItemProps = {
  children: React.ReactNode
  onSelect?: () => void
  disabled?: boolean
  className?: string
}

type MenubarSeparatorProps = {
  className?: string
}

type MenubarGroupProps = {
  children: React.ReactNode
  className?: string
}

type MenubarCheckboxItemProps = {
  children: React.ReactNode
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

type MenubarRadioGroupProps = {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

type MenubarRadioItemProps = {
  children: React.ReactNode
  value: string
  disabled?: boolean
  className?: string
}

type MenubarSubMenuProps = {
  children: React.ReactNode
  className?: string
}

type MenubarSubTriggerProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

type MenubarSubContentProps = {
  children: React.ReactNode
  className?: string
  sideOffset?: number
}

const MenubarContext = React.createContext<{
  activeMenu: string | null
  setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>
}>({
  activeMenu: null,
  setActiveMenu: () => {},
})

const MenuContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  value: string
}>({
  open: false,
  setOpen: () => {},
  value: "",
})

const RadioGroupContext = React.createContext<{
  value: string | undefined
  onValueChange: ((value: string) => void) | undefined
}>({
  value: undefined,
  onValueChange: undefined,
})

const SubMenuContext = React.createContext<{
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

const MenubarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 0.25rem;
`

const MenuContainer = styled.div`
  position: relative;
`

const Trigger = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${(props) => (props.active ? "#f3f4f6" : "transparent")};
  color: #374151;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`

const Content = styled.div<{ align?: "start" | "center" | "end" }>`
  position: absolute;
  top: 100%;
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

const SubTrigger = styled(Item)<{ isOpen?: boolean }>`
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

const SubContent = styled(Content)`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
`

const MenubarRoot: React.FC<MenubarProps> = ({ children, className }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <MenubarContainer className={className} role="menubar">
        {children}
      </MenubarContainer>
    </MenubarContext.Provider>
  )
}

const MenubarMenu: React.FC<MenubarMenuProps> = ({ children, value, className }) => {
  const { activeMenu, setActiveMenu } = React.useContext(MenubarContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (activeMenu !== value) {
      setOpen(false)
    }
  }, [activeMenu, value])

  return (
    <MenuContext.Provider value={{ open, setOpen, value }}>
      <MenuContainer className={className} role="none">
        {children}
      </MenuContainer>
    </MenuContext.Provider>
  )
}

const MenubarTrigger: React.FC<MenubarTriggerProps> = ({ children, className }) => {
  const { activeMenu, setActiveMenu } = React.useContext(MenubarContext)
  const { open, setOpen, value } = React.useContext(MenuContext)

  const handleClick = () => {
    if (activeMenu === value) {
      setActiveMenu(null)
      setOpen(false)
    } else {
      setActiveMenu(value)
      setOpen(true)
    }
  }

  return (
    <Trigger
      onClick={handleClick}
      active={open}
      className={className}
      role="menuitem"
      aria-expanded={open}
      aria-haspopup="true"
    >
      {children}
    </Trigger>
  )
}

const MenubarContent: React.FC<MenubarContentProps> = ({ children, align = "start", sideOffset = 8, className }) => {
  const { open, setOpen } = React.useContext(MenuContext)
  const { setActiveMenu } = React.useContext(MenubarContext)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setOpen(false)
        setActiveMenu(null)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        setActiveMenu(null)
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
  }, [open, setOpen, setActiveMenu])

  if (!open) return null

  return (
    <Content ref={contentRef} align={align} className={className} style={{ marginTop: `${sideOffset}px` }} role="menu">
      {children}
    </Content>
  )
}

const MenubarItem: React.FC<MenubarItemProps> = ({ children, onSelect, disabled = false, className }) => {
  const { setOpen } = React.useContext(MenuContext)
  const { setActiveMenu } = React.useContext(MenubarContext)

  const handleClick = () => {
    if (disabled) return

    if (onSelect) {
      onSelect()
    }

    setOpen(false)
    setActiveMenu(null)
  }

  return (
    <Item onClick={handleClick} disabled={disabled} className={className} role="menuitem">
      {children}
    </Item>
  )
}

const MenubarSeparator: React.FC<MenubarSeparatorProps> = ({ className }) => {
  return <Separator className={className} role="separator" />
}

const MenubarGroup: React.FC<MenubarGroupProps> = ({ children, className }) => {
  return (
    <Group className={className} role="group">
      {children}
    </Group>
  )
}

const MenubarCheckboxItem: React.FC<MenubarCheckboxItemProps> = ({
  children,
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
}) => {
  const { setOpen } = React.useContext(MenuContext)
  const { setActiveMenu } = React.useContext(MenubarContext)

  const handleClick = () => {
    if (disabled) return

    if (onCheckedChange) {
      onCheckedChange(!checked)
    }

    setOpen(false)
    setActiveMenu(null)
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

const MenubarRadioGroup: React.FC<MenubarRadioGroupProps> = ({ children, value, onValueChange, className }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={className} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

const MenubarRadioItem: React.FC<MenubarRadioItemProps> = ({ children, value, disabled = false, className }) => {
  const { setOpen } = React.useContext(MenuContext)
  const { setActiveMenu } = React.useContext(MenubarContext)
  const { value: selectedValue, onValueChange } = React.useContext(RadioGroupContext)

  const isChecked = selectedValue === value

  const handleClick = () => {
    if (disabled) return

    if (onValueChange) {
      onValueChange(value)
    }

    setOpen(false)
    setActiveMenu(null)
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

const MenubarSubMenu: React.FC<MenubarSubMenuProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false)

  return (
    <SubMenuContext.Provider value={{ open, setOpen }}>
      <div className={className}>{children}</div>
    </SubMenuContext.Provider>
  )
}

const MenubarSubTrigger: React.FC<MenubarSubTriggerProps> = ({ children, className, disabled = false }) => {
  const { open, setOpen } = React.useContext(SubMenuContext)

  const handleMouseEnter = () => {
    if (!disabled) {
      setOpen(true)
    }
  }

  return (
    <SubTrigger
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      isOpen={open}
      className={className}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={open}
    >
      {children}
      <ChevronRight>
        <ChevronRightIcon />
      </ChevronRight>
    </SubTrigger>
  )
}

const MenubarSubContent: React.FC<MenubarSubContentProps> = ({ children, className, sideOffset = 0 }) => {
  const { open } = React.useContext(SubMenuContext)

  if (!open) return null

  return (
    <SubContent className={className} style={{ marginLeft: `${sideOffset}px` }} role="menu">
      {children}
    </SubContent>
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

// Simple chevron right icon
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Menubar = {
  Root: MenubarRoot,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Item: MenubarItem,
  Separator: MenubarSeparator,
  Group: MenubarGroup,
  CheckboxItem: MenubarCheckboxItem,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  SubMenu: MenubarSubMenu,
  SubTrigger: MenubarSubTrigger,
  SubContent: MenubarSubContent,
}

export default Menubar
