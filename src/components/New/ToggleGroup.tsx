
import React from "react"
import styled, { css } from "styled-components"

type ToggleGroupProps = {
  type: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "ghost"
  children: React.ReactNode
  className?: string
}

type ToggleGroupItemProps = {
  value: string
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

type StyledToggleGroupProps = {
  size: "sm" | "md" | "lg"
  variant: "default" | "outline" | "ghost"
  disabled?: boolean
}

type StyledToggleGroupItemProps = {
  size: "sm" | "md" | "lg"
  variant: "default" | "outline" | "ghost"
  isSelected: boolean
  disabled?: boolean
}

type ToggleGroupComponent = React.FC<ToggleGroupProps> & {
  Item: React.FC<ToggleGroupItemProps>
}


const ToggleGroupContext = React.createContext<{
  type: "single" | "multiple"
  value: string | string[]
  onValueChange: (value: string) => void
  size: "sm" | "md" | "lg"
  variant: "default" | "outline" | "ghost"
  disabled?: boolean
}>({
  type: "single",
  value: "",
  onValueChange: () => {},
  size: "md",
  variant: "default",
})

const sizeStyles = {
  sm: css`
    height: 2rem;
    font-size: 0.75rem;
  `,
  md: css`
    height: 2.5rem;
    font-size: 0.875rem;
  `,
  lg: css`
    height: 3rem;
    font-size: 1rem;
  `,
}

const variantStyles = {
  default: css`
    background-color: white;
    border: 1px solid #d1d5db;
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid #d1d5db;
  `,
  ghost: css`
    background-color: transparent;
    border: 1px solid transparent;
  `,
}

const itemVariantStyles = {
  default: css<{ isSelected: boolean }>`
    background-color: ${(props) => (props.isSelected ? "#3b82f6" : "transparent")};
    color: ${(props) => (props.isSelected ? "white" : "#374151")};
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isSelected ? "#2563eb" : "#f3f4f6")};
    }
  `,
  outline: css<{ isSelected: boolean }>`
    background-color: ${(props) => (props.isSelected ? "rgba(59, 130, 246, 0.1)" : "transparent")};
    color: ${(props) => (props.isSelected ? "#3b82f6" : "#374151")};
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isSelected ? "rgba(59, 130, 246, 0.15)" : "#f3f4f6")};
    }
  `,
  ghost: css<{ isSelected: boolean }>`
    background-color: ${(props) => (props.isSelected ? "rgba(59, 130, 246, 0.1)" : "transparent")};
    color: ${(props) => (props.isSelected ? "#3b82f6" : "#374151")};
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isSelected ? "rgba(59, 130, 246, 0.15)" : "#f3f4f6")};
    }
  `,
}

const StyledToggleGroup = styled.div<StyledToggleGroupProps>`
  display: inline-flex;
  border-radius: 0.375rem;
  overflow: hidden;
  
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant]}
  
  ${(props) =>
    props.disabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

const StyledToggleGroupItem = styled.button<StyledToggleGroupItemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  
  ${(props) => itemVariantStyles[props.variant]}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    z-index: 1;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:not(:first-child) {
    border-left: 1px solid ${(props) => (props.variant === "ghost" ? "transparent" : "#d1d5db")};
  }
`

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  type,
  value,
  defaultValue = type === "single" ? "" : [],
  onValueChange,
  disabled = false,
  size = "md",
  variant = "default",
  children,
  className,
}) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleValueChange = (itemValue: string) => {
    if (type === "single") {
      const newValue = currentValue === itemValue ? "" : itemValue

      if (!isControlled) {
        setInternalValue(newValue)
      }

      if (onValueChange) {
        onValueChange(newValue)
      }
    } else {
      const currentValueArray = Array.isArray(currentValue) ? currentValue : []
      const newValue = currentValueArray.includes(itemValue)
        ? currentValueArray.filter((v) => v !== itemValue)
        : [...currentValueArray, itemValue]

      if (!isControlled) {
        setInternalValue(newValue)
      }

      if (onValueChange) {
        onValueChange(newValue)
      }
    }
  }

  return (
    <ToggleGroupContext.Provider
      value={{
        type,
        value: currentValue,
        onValueChange: handleValueChange,
        size,
        variant,
        disabled,
      }}
    >
      <StyledToggleGroup size={size} variant={variant} disabled={disabled} className={className} role="group">
        {children}
      </StyledToggleGroup>
    </ToggleGroupContext.Provider>
  )
}

const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({ value, disabled = false, children, className }) => {
  const {
    type,
    value: groupValue,
    onValueChange,
    size,
    variant,
    disabled: groupDisabled,
  } = React.useContext(ToggleGroupContext)

  const isSelected = type === "single" ? groupValue === value : Array.isArray(groupValue) && groupValue.includes(value)

  const isDisabled = disabled || groupDisabled

  const handleClick = () => {
    if (isDisabled) return
    onValueChange(value)
  }

  return (
    <StyledToggleGroupItem
      type="button"
      size={size}
      variant={variant}
      isSelected={isSelected}
      disabled={isDisabled}
      onClick={handleClick}
      aria-pressed={isSelected}
      className={className}
    >
      {children}
    </StyledToggleGroupItem>
  )
}

(ToggleGroup as ToggleGroupComponent).Item = ToggleGroupItem


export default ToggleGroup
