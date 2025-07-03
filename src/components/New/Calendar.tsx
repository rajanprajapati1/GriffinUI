import type React from "react"
import { useState, useEffect } from "react"
import styled, { css } from "styled-components"

type Locale = string // Declared Locale type

type CalendarProps = {
  value?: Date
  onChange?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  className?: string
  showOutsideDays?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  locale?: Locale
}

type DayProps = {
  isToday?: boolean
  isSelected?: boolean
  isOutsideMonth?: boolean
  isDisabled?: boolean
}

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  font-family: inherit;
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const MonthTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`

const NavigationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: #4b5563;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const WeekdaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 0.5rem;
`

const Weekday = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  padding: 0.5rem 0;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`

const Day = styled.button<DayProps>`
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  
  ${(props) =>
    props.isToday &&
    css`
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #3b82f6;
    }
  `}
  
  ${(props) =>
    props.isSelected &&
    css`
    background-color: #3b82f6;
    color: white;
    font-weight: 500;
    
    &:hover {
      background-color: #2563eb;
    }
  `}
  
  ${(props) =>
    !props.isSelected &&
    css`
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${(props) =>
    props.isOutsideMonth &&
    css`
    color: #9ca3af;
  `}
  
  ${(props) =>
    props.isDisabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  className,
  showOutsideDays = true,
  weekStartsOn = 0,
  locale = undefined,
}) => {
  const [currentDate, setCurrentDate] = useState(value || new Date())
  const [viewDate, setViewDate] = useState(new Date(currentDate))

  useEffect(() => {
    if (value) {
      setCurrentDate(value)
      setViewDate(new Date(value))
    }
  }, [value])

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    return (
      currentDate &&
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    )
  }

  const isDisabled = (date: Date) => {
    // Check if date is in disabledDates
    const isInDisabledDates = disabledDates.some(
      (disabledDate) =>
        date.getDate() === disabledDate.getDate() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getFullYear() === disabledDate.getFullYear(),
    )

    // Check if date is before minDate
    const isBeforeMinDate = minDate && date < minDate

    // Check if date is after maxDate
    const isAfterMaxDate = maxDate && date > maxDate

    return isInDisabledDates || isBeforeMinDate || isAfterMaxDate
  }

  const handlePrevMonth = () => {
    setViewDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() - 1)
      return newDate
    })
  }

  const handleNextMonth = () => {
    setViewDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + 1)
      return newDate
    })
  }

  const handleDateClick = (date: Date) => {
    if (isDisabled(date)) return

    setCurrentDate(date)
    if (onChange) onChange(date)
  }

  const renderCalendarDays = () => {
    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    // Adjust for week start day
    const adjustedFirstDay = (firstDayOfMonth - weekStartsOn + 7) % 7

    // Previous month days
    const daysInPrevMonth = getDaysInMonth(year, month - 1)
    const prevMonthDays = []

    for (let i = daysInPrevMonth - adjustedFirstDay + 1; i <= daysInPrevMonth; i++) {
      const date = new Date(year, month - 1, i)
      prevMonthDays.push(
        <Day
          key={`prev-${i}`}
          isOutsideMonth={true}
          isDisabled={isDisabled(date)}
          onClick={() => handleDateClick(date)}
          isToday={isToday(date)}
          isSelected={isSelected(date)}
        >
          {showOutsideDays ? i : ""}
        </Day>,
      )
    }

    // Current month days
    const currentMonthDays = []

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      currentMonthDays.push(
        <Day
          key={`current-${i}`}
          isDisabled={isDisabled(date)}
          onClick={() => handleDateClick(date)}
          isToday={isToday(date)}
          isSelected={isSelected(date)}
        >
          {i}
        </Day>,
      )
    }

    // Next month days
    const nextMonthDays = []
    const totalDaysDisplayed = prevMonthDays.length + currentMonthDays.length
    const daysToAdd = 42 - totalDaysDisplayed // 6 rows of 7 days

    for (let i = 1; i <= daysToAdd; i++) {
      const date = new Date(year, month + 1, i)
      nextMonthDays.push(
        <Day
          key={`next-${i}`}
          isOutsideMonth={true}
          isDisabled={isDisabled(date)}
          onClick={() => handleDateClick(date)}
          isToday={isToday(date)}
          isSelected={isSelected(date)}
        >
          {showOutsideDays ? i : ""}
        </Day>,
      )
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
  }

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const orderedWeekdays = [...weekdays.slice(weekStartsOn), ...weekdays.slice(0, weekStartsOn)]

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <CalendarContainer className={className}>
      <CalendarHeader>
        <MonthSelector>
          <MonthTitle>
            {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
          </MonthTitle>
        </MonthSelector>
        <div>
          <NavigationButton onClick={handlePrevMonth}>
            <ChevronLeft />
          </NavigationButton>
          <NavigationButton onClick={handleNextMonth}>
            <ChevronRight />
          </NavigationButton>
        </div>
      </CalendarHeader>

      <WeekdaysRow>
        {orderedWeekdays.map((day) => (
          <Weekday key={day}>{day}</Weekday>
        ))}
      </WeekdaysRow>

      <DaysGrid>{renderCalendarDays()}</DaysGrid>
    </CalendarContainer>
  )
}

// Simple chevron icons
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Calendar
