import React, { useState, useRef, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

type CommandProps = {
  children: React.ReactNode
  className?: string
  label?: string
  shouldFilter?: boolean
  loop?: boolean
}

type CommandInputProps = {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  autoFocus?: boolean
}

type CommandListProps = {
  children: React.ReactNode
  className?: string
}

type CommandGroupProps = {
  children: React.ReactNode
  heading?: React.ReactNode
  className?: string
}

type CommandItemProps = {
  children: React.ReactNode
  value?: string
  onSelect?: (value: string) => void
  disabled?: boolean
  className?: string
}

type CommandSeparatorProps = {
  className?: string
}

type CommandEmptyProps = {
  children: React.ReactNode
  className?: string
}

type CommandContextType = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  filtered: boolean
  shouldFilter: boolean
  loop: boolean
  itemCount: number
  setItemCount: React.Dispatch<React.SetStateAction<number>>
}

const CommandContext = React.createContext<CommandContextType>({
  search: "",
  setSearch: () => {},
  value: "",
  setValue: () => {},
  activeIndex: -1,
  setActiveIndex: () => {},
  filtered: false,
  shouldFilter: true,
  loop: true,
  itemCount: 0,
  setItemCount: () => {},
})

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const CommandContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-out;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
`

const SearchIcon = styled.div`
  display: flex;
  margin-right: 0.75rem;
  color: #9ca3af;
`

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 0.95rem;
  outline: none;
  color: #111827;
  
  &::placeholder {
    color: #9ca3af;
  }
`

const List = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5rem 0;
`

const Group = styled.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const GroupHeading = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Item = styled.div<{ active?: boolean; disabled?: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  ${(props) =>
    props.active &&
    css`
    background-color: #f3f4f6;
  `}
  
  ${(props) =>
    !props.disabled &&
    css`
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${(props) =>
    props.disabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

const Separator = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 0.5rem 0;
`

const Empty = styled.div`
  padding: 1rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
`

const CommandRoot: React.FC<CommandProps> = ({ children, className, label, shouldFilter = true, loop = true }) => {
  const [search, setSearch] = useState("")
  const [value, setValue] = useState("")
  const [activeIndex, setActiveIndex] = useState(-1)
  const [itemCount, setItemCount] = useState(0)

  return (
    <CommandContext.Provider
      value={{
        search,
        setSearch,
        value,
        setValue,
        activeIndex,
        setActiveIndex,
        filtered: search.length > 0,
        shouldFilter,
        loop,
        itemCount,
        setItemCount,
      }}
    >
      <CommandContainer className={className} role="dialog" aria-label={label}>
        {children}
      </CommandContainer>
    </CommandContext.Provider>
  )
}

const CommandInput: React.FC<CommandInputProps> = ({
  placeholder = "Type a command or search...",
  value,
  onValueChange,
  className,
  autoFocus = false,
}) => {
  const { setSearch } = React.useContext(CommandContext)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (onValueChange) {
      onValueChange(newValue)
    }
    setSearch(newValue)
  }

  return (
    <InputWrapper className={className}>
      <SearchIcon>
        <SearchIconSvg />
      </SearchIcon>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        aria-autocomplete="list"
      />
    </InputWrapper>
  )
}

const CommandList: React.FC<CommandListProps> = ({ children, className }) => {
  const { activeIndex, setActiveIndex, loop, itemCount } = React.useContext(CommandContext)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (itemCount === 0) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setActiveIndex((prevIndex) => {
          if (prevIndex === itemCount - 1) {
            return loop ? 0 : prevIndex
          }
          return prevIndex + 1
        })
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setActiveIndex((prevIndex) => {
          if (prevIndex <= 0) {
            return loop ? itemCount - 1 : 0
          }
          return prevIndex - 1
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [itemCount, loop, setActiveIndex])

  return (
    <List ref={listRef} className={className}>
      {children}
    </List>
  )
}

const CommandGroup: React.FC<CommandGroupProps> = ({ children, heading, className }) => {
  return (
    <Group className={className}>
      {heading && <GroupHeading>{heading}</GroupHeading>}
      {children}
    </Group>
  )
}

const CommandItem: React.FC<CommandItemProps> = ({ children, value, onSelect, disabled = false, className }) => {
  const { search, setSearch, setValue, activeIndex, setActiveIndex, filtered, shouldFilter, itemCount, setItemCount } =
    React.useContext(CommandContext)

  const itemRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    setItemCount((prevCount) => prevCount + 1)
    setIndex(itemCount)

    return () => {
      setItemCount((prevCount) => prevCount - 1)
    }
  }, [itemCount, setItemCount])

  useEffect(() => {
    if (shouldFilter && filtered && value) {
      const itemValue = value.toLowerCase()
      const searchValue = search.toLowerCase()
      setIsVisible(itemValue.includes(searchValue))
    } else {
      setIsVisible(true)
    }
  }, [shouldFilter, filtered, search, value])

  useEffect(() => {
    if (activeIndex === index && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [activeIndex, index])

  const handleClick = () => {
    if (disabled) return

    if (onSelect && value) {
      onSelect(value)
    }

    setValue(value || "")
    setSearch("")
  }

  const handleMouseEnter = () => {
    if (!disabled) {
      setActiveIndex(index)
    }
  }

  if (!isVisible) return null

  return (
    <Item
      ref={itemRef}
      active={activeIndex === index}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      role="option"
      aria-selected={activeIndex === index}
      aria-disabled={disabled}
    >
      {children}
    </Item>
  )
}

const CommandSeparator: React.FC<CommandSeparatorProps> = ({ className }) => {
  return <Separator className={className} role="separator" />
}

const CommandEmpty: React.FC<CommandEmptyProps> = ({ children, className }) => {
  const { filtered } = React.useContext(CommandContext)

  if (!filtered) return null

  return <Empty className={className}>{children}</Empty>
}

// Simple search icon
const SearchIconSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9624 10.9625L13.9999 14.0001"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Command = {
  Root: CommandRoot,
  Input: CommandInput,
  List: CommandList,
  Group: CommandGroup,
  Item: CommandItem,
  Separator: CommandSeparator,
  Empty: CommandEmpty,
}

export default Command
