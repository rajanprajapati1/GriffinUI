
import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type NavigationMenuProps = {
  children: React.ReactNode
  className?: string
}

type NavigationMenuListProps = {
  children: React.ReactNode
  className?: string
}

type NavigationMenuItemProps = {
  children: React.ReactNode
  value?: string
  className?: string
}

type NavigationMenuTriggerProps = {
  children: React.ReactNode
  className?: string
}

type NavigationMenuContentProps = {
  children: React.ReactNode
  className?: string
}

type NavigationMenuLinkProps = {
  children: React.ReactNode
  href?: string
  active?: boolean
  className?: string
}

type NavigationMenuViewportProps = {
  className?: string
}

type NavigationMenuIndicatorProps = {
  className?: string
}

const NavigationMenuContext = React.createContext<{
  activeItem: string | null
  setActiveItem: React.Dispatch<React.SetStateAction<string | null>>
  indicatorPosition: { left: number; width: number } | null
  setIndicatorPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number } | null>>
}>({
  activeItem: null,
  setActiveItem: () => {},
  indicatorPosition: null,
  setIndicatorPosition: () => {},
})

const ItemContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  value: string | null
}>({
  open: false,
  setOpen: () => {},
  value: null,
})

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const NavigationMenuContainer = styled.nav`
  position: relative;
  z-index: 10;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 0.5rem;
`

const Item = styled.li`
  position: relative;
`

const Trigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  animation: ${fadeIn} 0.2s ease;
`

const Link = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#3b82f6" : "#4b5563")};
  background-color: ${(props) => (props.active ? "#eff6ff" : "transparent")};
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    color: ${(props) => (props.active ? "#2563eb" : "#111827")};
    background-color: ${(props) => (props.active ? "#dbeafe" : "#f3f4f6")};
  }
`

const Viewport = styled.div`
  position: relative;
  width: 100%;
  height: var(--radix-navigation-menu-viewport-height);
  overflow: hidden;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: width, height 0.3s ease;
`

const Indicator = styled.div<{ position: { left: number; width: number } | null }>`
  position: absolute;
  height: 2px;
  bottom: 0;
  background-color: #3b82f6;
  transition: all 0.2s ease;
  
  ${(props) =>
    props.position &&
    css`
    left: ${props.position.left}px;
    width: ${props.position.width}px;
  `}
`

const NavigationMenuRoot: React.FC<NavigationMenuProps> = ({ children, className }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [indicatorPosition, setIndicatorPosition] = useState<{ left: number; width: number } | null>(null)

  return (
    <NavigationMenuContext.Provider value={{ activeItem, setActiveItem, indicatorPosition, setIndicatorPosition }}>
      <NavigationMenuContainer className={className}>{children}</NavigationMenuContainer>
    </NavigationMenuContext.Provider>
  )
}

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ children, className }) => {
  return <List className={className}>{children}</List>
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ children, value = "", className }) => {
  const { activeItem, setActiveItem } = React.useContext(NavigationMenuContext)
  const [open, setOpen] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)
  const { setIndicatorPosition } = React.useContext(NavigationMenuContext)

  useEffect(() => {
    if (activeItem === value && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect()
      const parentRect = itemRef.current.parentElement?.getBoundingClientRect() || { left: 0 }

      setIndicatorPosition({
        left: rect.left - parentRect.left,
        width: rect.width,
      })
    }
  }, [activeItem, value, setIndicatorPosition])

  useEffect(() => {
    setOpen(activeItem === value)
  }, [activeItem, value])

  return (
    <ItemContext.Provider value={{ open, setOpen, value }}>
      <Item ref={itemRef} className={className}>
        {children}
      </Item>
    </ItemContext.Provider>
  )
}

const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({ children, className }) => {
  const { setActiveItem } = React.useContext(NavigationMenuContext)
  const { value } = React.useContext(ItemContext)

  const handleClick = () => {
    setActiveItem((prev) => (prev === value ? null : value))
  }

  return (
    <Trigger onClick={handleClick} className={className}>
      {children}
    </Trigger>
  )
}

const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({ children, className }) => {
  const { open } = React.useContext(ItemContext)

  if (!open) return null

  return <Content className={className}>{children}</Content>
}

const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({ children, href = "#", active = false, className }) => {
  return (
    <Link href={href} active={active} className={className}>
      {children}
    </Link>
  )
}

const NavigationMenuViewport: React.FC<NavigationMenuViewportProps> = ({ className }) => {
  return <Viewport className={className} />
}

const NavigationMenuIndicator: React.FC<NavigationMenuIndicatorProps> = ({ className }) => {
  const { indicatorPosition } = React.useContext(NavigationMenuContext)

  return <Indicator position={indicatorPosition} className={className} />
}

const NavigationMenu = {
  Root: NavigationMenuRoot,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  Viewport: NavigationMenuViewport,
  Indicator: NavigationMenuIndicator,
}

export default NavigationMenu
