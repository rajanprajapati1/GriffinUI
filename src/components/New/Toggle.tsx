

import React from "react"
import styled, { css } from "styled-components"

type ToggleProps = {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "ghost"
  children: React.ReactNode
  className?: string
}

type StyledToggleProps = {
  size: "sm" | "md" | "lg"
  variant: "default" | "outline" | "ghost"
  isPressed: boolean
  disabled?: boolean
}

const sizeStyles = {
  sm: css`
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  `,
  md: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  `,
  lg: css`
    height: 3rem;
    padding: 0 1.5rem;
    font-size: 1rem;
  `,
}

const variantStyles = {
  default: css<{ isPressed: boolean }>`
    background-color: ${(props) => (props.isPressed ? "#3b82f6" : "white")};
    color: ${(props) => (props.isPressed ? "white" : "#374151")};
    border: 1px solid ${(props) => (props.isPressed ? "#3b82f6" : "#d1d5db")};
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isPressed ? "#2563eb" : "#f3f4f6")};
      border-color: ${(props) => (props.isPressed ? "#2563eb" : "#9ca3af")};
    }
  `,
  outline: css<{ isPressed: boolean }>`
    background-color: transparent;
    color: ${(props) => (props.isPressed ? "#3b82f6" : "#374151")};
    border: 1px solid ${(props) => (props.isPressed ? "#3b82f6" : "#d1d5db")};
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isPressed ? "rgba(59, 130, 246, 0.1)" : "#f3f4f6")};
    }
  `,
  ghost: css<{ isPressed: boolean }>`
    background-color: ${(props) => (props.isPressed ? "rgba(59, 130, 246, 0.1)" : "transparent")};
    color: ${(props) => (props.isPressed ? "#3b82f6" : "#374151")};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: ${(props) => (props.isPressed ? "rgba(59, 130, 246, 0.15)" : "#f3f4f6")};
    }
  `,
}

const StyledToggle = styled.button<StyledToggleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant]}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Toggle: React.FC<ToggleProps> = ({
  pressed,
  defaultPressed = false,
  onPressedChange,
  disabled = false,
  size = "md",
  variant = "default",
  children,
  className,
}) => {
  const [internalPressed, setInternalPressed] = React.useState(defaultPressed)

  const isControlled = pressed !== undefined
  const isPressed = isControlled ? pressed : internalPressed

  const handleClick = () => {
    if (disabled) return

    if (!isControlled) {
      setInternalPressed(!internalPressed)
    }

    if (onPressedChange) {
      onPressedChange(!isPressed)
    }
  }

  return (
    <StyledToggle
      type="button"
      size={size}
      variant={variant}
      isPressed={isPressed}
      disabled={disabled}
      onClick={handleClick}
      aria-pressed={isPressed}
      className={className}
    >
      {children}
    </StyledToggle>
  )
}

export default Toggle
