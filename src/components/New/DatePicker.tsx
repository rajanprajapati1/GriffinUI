
import type React from "react"
import { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import Calendar from "./Calendar"

type DatePickerProps = {
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  clearable?: boolean
  format?: string
  minDate?: Date
  maxDate?: string
  disabledDates?: Date[]
  className?: string
  error?: boolean
  helperText?: string
}

type InputWrapperProps = {
  focused: boolean
  disabled?: boolean
  error?: boolean
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;
  background-color: white;
  border: 1px solid ${(props) => (props.error ? "#ef4444" : "#d1d5db")};
  border-radius: 0.375rem;
  transition: all 0.2s;
  
  ${(props) =>
    props.focused &&
    css`
    border-color: ${props.error ? "#ef4444" : "#3b82f6"};
    box-shadow: 0 0 0 2px ${props.error ? "rgba(239, 68, 68, 0.2)" : "rgba(59, 130, 246, 0.2)"};
  `}
  
  ${(props) =>
    props.disabled &&
    css`
    background-color: #f3f4f6;
    opacity: 0.6;
    cursor: not-allowed;
  `}
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.875rem;
  color: #1f2937;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`

const CalendarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  margin-left: 0.5rem;
`

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  margin-left: 0.5rem;
  
  &:hover {
    color: #ef4444;
  }
`

const PopoverContent = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 10;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
`

const HelperText = styled.div<{ error?: boolean }>`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: ${(props) => (props.error ? "#ef4444" : "#6b7280")};
`

const formatDate = (date: Date, format: string): string => {
  // Simple date formatter - can be expanded for more complex formats
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()

  return format
    .replace("dd", day)
    .replace("MM", month)
    .replace("yyyy", year.toString())
    .replace("yy", year.toString().slice(-2))
}

const parseDate = (dateString: string, format: string): Date | null => {
  // Simple date parser - can be expanded for more complex formats
  try {
    const dayIndex = format.indexOf("dd")
    const monthIndex = format.indexOf("MM")
    const yearIndex = format.indexOf("yyyy") !== -1 ? format.indexOf("yyyy") : format.indexOf("yy")

    const yearLength = format.indexOf("yyyy") !== -1 ? 4 : 2

    const day = Number.parseInt(dateString.substring(dayIndex, dayIndex + 2))
    const month = Number.parseInt(dateString.substring(monthIndex, monthIndex + 2)) - 1
    let year = Number.parseInt(dateString.substring(yearIndex, yearIndex + yearLength))

    if (yearLength === 2) {
      const currentYear = new Date().getFullYear()
      const century = Math.floor(currentYear / 100) * 100
      year = century + year
    }

    const date = new Date(year, month, day)

    if (isNaN(date.getTime())) {
      return null
    }

    return date
  } catch (error) {
    return null
  }
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = "Select date",
  disabled = false,
  readOnly = false,
  clearable = true,
  format = "MM/dd/yyyy",
  minDate,
  maxDate,
  disabledDates = [],
  className,
  error = false,
  helperText,
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (value) {
      setInputValue(formatDate(value, format))
    } else {
      setInputValue("")
    }
  }, [value, format])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)

    if (newValue.length === format.length) {
      const date = parseDate(newValue, format)
      if (date && onChange) {
        onChange(date)
      }
    }
  }

  const handleInputFocus = () => {
    if (!disabled && !readOnly) {
      setIsFocused(true)
    }
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  const handleCalendarClick = () => {
    if (!disabled && !readOnly) {
      setIsOpen(!isOpen)
      if (!isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const handleDateSelect = (date: Date) => {
    if (onChange) {
      onChange(date)
    }
    setIsOpen(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setInputValue("")
    if (onChange) {
      onChange(undefined as any)
    }
  }

  return (
    <Container ref={containerRef} className={className}>
      <InputWrapper focused={isFocused} disabled={disabled} error={error} onClick={handleCalendarClick}>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
        {clearable && inputValue && !disabled && !readOnly && (
          <ClearButton onClick={handleClear}>
            <CloseIcon />
          </ClearButton>
        )}
        <CalendarIcon>
          <CalendarIconSvg />
        </CalendarIcon>
      </InputWrapper>

      {isOpen && (
        <PopoverContent>
          <Calendar value={value} onChange={handleDateSelect} minDate={minDate} disabledDates={disabledDates} />
        </PopoverContent>
      )}

      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Container>
  )
}

// Simple calendar icon
const CalendarIconSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 1V3M11 1V3M2 6H14M4 3H12C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Simple close icon
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3L11 11M3 11L11 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DatePicker
