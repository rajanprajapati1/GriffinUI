
import React, { useState, useRef } from "react"
import styled, { css } from "styled-components"

type SliderProps = {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  color?: string
  showValue?: boolean
  valuePrefix?: string
  valueSuffix?: string
  marks?: boolean | { value: number; label?: string }[]
  onChange?: (value: number) => void
  onChangeEnd?: (value: number) => void
  className?: string
}

type TrackProps = {
  orientation: "horizontal" | "vertical"
  size: "sm" | "md" | "lg"
  disabled?: boolean
}

type RangeProps = {
  orientation: "horizontal" | "vertical"
  percent: number
  color: string
  disabled?: boolean
}

type ThumbProps = {
  orientation: "horizontal" | "vertical"
  size: "sm" | "md" | "lg"
  color: string
  disabled?: boolean
  focused?: boolean
}

type MarkProps = {
  orientation: "horizontal" | "vertical"
  active: boolean
  size: "sm" | "md" | "lg"
  color: string
}

const sizeMap = {
  sm: {
    trackSize: 4,
    thumbSize: 14,
    markSize: 4,
  },
  md: {
    trackSize: 6,
    thumbSize: 20,
    markSize: 6,
  },
  lg: {
    trackSize: 8,
    thumbSize: 24,
    markSize: 8,
  },
}

const SliderContainer = styled.div<{ orientation: "horizontal" | "vertical" }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  touch-action: none;
  
  ${(props) =>
    props.orientation === "vertical" &&
    css`
    height: 200px;
    width: auto;
    flex-direction: column;
  `}
`

const Track = styled.div<TrackProps>`
  position: relative;
  border-radius: 9999px;
  background-color: #e5e7eb;
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        width: 100%;
        height: ${sizeMap[props.size].trackSize}px;
      `
      : css`
        height: 100%;
        width: ${sizeMap[props.size].trackSize}px;
      `}
  
  ${(props) =>
    props.disabled &&
    css`
    opacity: 0.6;
  `}
`

const Range = styled.div<RangeProps>`
  position: absolute;
  border-radius: 9999px;
  background-color: ${(props) => props.color};
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        height: 100%;
        left: 0;
        width: ${props.percent}%;
      `
      : css`
        width: 100%;
        bottom: 0;
        height: ${props.percent}%;
      `}
  
  ${(props) =>
    props.disabled &&
    css`
    opacity: 0.6;
  `}
`

const Thumb = styled.div<ThumbProps>`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${(props) => props.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        top: 50%;
        transform: translate(-50%, -50%);
        width: ${sizeMap[props.size].thumbSize}px;
        height: ${sizeMap[props.size].thumbSize}px;
      `
      : css`
        left: 50%;
        transform: translate(-50%, 50%);
        width: ${sizeMap[props.size].thumbSize}px;
        height: ${sizeMap[props.size].thumbSize}px;
      `}
  
  ${(props) =>
    !props.disabled &&
    css`
    &:hover {
      transform: ${
        props.orientation === "horizontal" ? "translate(-50%, -50%) scale(1.1)" : "translate(-50%, 50%) scale(1.1)"
      };
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
  `}
  
  ${(props) =>
    props.focused &&
    css`
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  `}
  
  ${(props) =>
    props.disabled &&
    css`
    cursor: not-allowed;
    opacity: 0.6;
  `}
`

const ValueDisplay = styled.div<{ orientation: "horizontal" | "vertical" }>`
  font-size: 0.875rem;
  color: #4b5563;
  margin: ${(props) => (props.orientation === "horizontal" ? "0 0 0.5rem 0" : "0.5rem 0 0 0")};
`

const MarkContainer = styled.div<{ orientation: "horizontal" | "vertical" }>`
  position: absolute;
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      `
      : css`
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
`

const Mark = styled.div<MarkProps>`
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? props.color : "#e5e7eb")};
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        width: ${sizeMap[props.size].markSize}px;
        height: ${sizeMap[props.size].markSize}px;
        transform: translate(-50%, -50%);
      `
      : css`
        width: ${sizeMap[props.size].markSize}px;
        height: ${sizeMap[props.size].markSize}px;
        transform: translate(-50%, 50%);
      `}
`

const MarkLabel = styled.div<{ orientation: "horizontal" | "vertical" }>`
  position: absolute;
  font-size: 0.75rem;
  color: #6b7280;
  white-space: nowrap;
  
  ${(props) =>
    props.orientation === "horizontal"
      ? css`
        top: 100%;
        transform: translateX(-50%);
        margin-top: 0.5rem;
      `
      : css`
        left: 100%;
        transform: translateY(50%);
        margin-left: 0.5rem;
      `}
`

const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  size = "md",
  color = "#3b82f6",
  showValue = false,
  valuePrefix = "",
  valueSuffix = "",
  marks = false,
  onChange,
  onChangeEnd,
  className,
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isDragging, setIsDragging] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  // Use controlled value if provided
  const currentValue = controlledValue !== undefined ? controlledValue : value

  // Calculate percentage for positioning
  const percent = ((currentValue - min) / (max - min)) * 100

  // Generate marks if needed
  const markPositions = React.useMemo(() => {
    if (!marks) return []

    if (Array.isArray(marks)) {
      return marks
    }

    const count = Math.floor((max - min) / step)
    const positions = []

    for (let i = 0; i <= count; i++) {
      const markValue = min + i * step
      positions.push({ value: markValue })
    }

    return positions
  }, [marks, min, max, step])

  const updateValue = (clientPosition: number) => {
    if (!trackRef.current || disabled) return

    const trackRect = trackRef.current.getBoundingClientRect()
    let percentage

    if (orientation === "horizontal") {
      percentage = (clientPosition - trackRect.left) / trackRect.width
    } else {
      percentage = 1 - (clientPosition - trackRect.top) / trackRect.height
    }

    // Clamp percentage between 0 and 1
    percentage = Math.max(0, Math.min(1, percentage))

    // Calculate value based on percentage, min, max, and step
    let newValue = min + percentage * (max - min)

    // Round to nearest step
    newValue = Math.round(newValue / step) * step

    // Ensure value is within bounds
    newValue = Math.max(min, Math.min(max, newValue))

    if (newValue !== currentValue) {
      setValue(newValue)
      if (onChange) onChange(newValue)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return

    e.preventDefault()
    setIsDragging(true)

    if (orientation === "horizontal") {
      updateValue(e.clientX)
    } else {
      updateValue(e.clientY)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (orientation === "horizontal") {
      updateValue(e.clientX)
    } else {
      updateValue(e.clientY)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)

    if (onChangeEnd) onChangeEnd(currentValue)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return

    setIsDragging(true)

    if (orientation === "horizontal") {
      updateValue(e.touches[0].clientX)
    } else {
      updateValue(e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (orientation === "horizontal") {
      updateValue(e.touches[0].clientX)
    } else {
      updateValue(e.touches[0].clientY)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    if (onChangeEnd) onChangeEnd(currentValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    let newValue = currentValue

    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        newValue = Math.min(max, currentValue + step)
        break
      case "ArrowLeft":
      case "ArrowDown":
        newValue = Math.max(min, currentValue - step)
        break
      case "Home":
        newValue = min
        break
      case "End":
        newValue = max
        break
      default:
        return
    }

    if (newValue !== currentValue) {
      setValue(newValue)
      if (onChange) onChange(newValue)
      if (onChangeEnd) onChangeEnd(newValue)
    }
  }

  return (
    <div className={className}>
      {showValue && orientation === "horizontal" && (
        <ValueDisplay orientation={orientation}>
          {valuePrefix}
          {currentValue}
          {valueSuffix}
        </ValueDisplay>
      )}

      <SliderContainer orientation={orientation}>
        {showValue && orientation === "vertical" && (
          <ValueDisplay orientation={orientation}>
            {valuePrefix}
            {currentValue}
            {valueSuffix}
          </ValueDisplay>
        )}

        <Track
          ref={trackRef}
          orientation={orientation}
          size={size}
          disabled={disabled}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Range orientation={orientation} percent={percent} color={color} disabled={disabled} />

          {marks && (
            <MarkContainer orientation={orientation}>
              {markPositions.map((mark, index) => {
                const markPercent = ((mark.value - min) / (max - min)) * 100
                const isActive = mark.value <= currentValue

                return (
                  <React.Fragment key={index}>
                    <Mark
                      orientation={orientation}
                      active={isActive}
                      size={size}
                      color={color}
                      style={{
                        [orientation === "horizontal" ? "left" : "bottom"]: `${markPercent}%`,
                      }}
                    />
                    {mark.label && (
                      <MarkLabel
                        orientation={orientation}
                        style={{
                          [orientation === "horizontal" ? "left" : "bottom"]: `${markPercent}%`,
                        }}
                      >
                        {mark.label}
                      </MarkLabel>
                    )}
                  </React.Fragment>
                )
              })}
            </MarkContainer>
          )}
        </Track>

        <Thumb
          ref={thumbRef}
          orientation={orientation}
          size={size}
          color={color}
          disabled={disabled}
          focused={isFocused}
          style={{
            [orientation === "horizontal" ? "left" : "bottom"]: `${percent}%`,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-orientation={orientation}
          aria-disabled={disabled}
        />
      </SliderContainer>
    </div>
  )
}

export default Slider
