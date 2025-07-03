
import type React from "react"
import { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"

type ScrollAreaProps = {
  children: React.ReactNode
  className?: string
  type?: "auto" | "always" | "scroll" | "hover"
  scrollHideDelay?: number
  orientation?: "vertical" | "horizontal" | "both"
  scrollbarSize?: number
  scrollbarRadius?: number
  scrollbarThumbColor?: string
  scrollbarTrackColor?: string
}

type ScrollbarProps = {
  orientation: "vertical" | "horizontal"
  size: number
  radius: number
  thumbColor: string
  trackColor: string
  visible: boolean
  thumbPosition: number
  thumbSize: number
}

const ScrollAreaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const Scrollbar = styled.div<ScrollbarProps>`
  position: absolute;
  background-color: ${(props) => props.trackColor};
  border-radius: ${(props) => props.radius}px;
  transition: opacity 0.15s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  
  ${(props) =>
    props.orientation === "vertical"
      ? css`
          top: 0;
          right: 0;
          width: ${props.size}px;
          height: 100%;
        `
      : css`
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${props.size}px;
        `}
`

const Thumb = styled.div<{
  orientation: "vertical" | "horizontal"
  position: number
  size: number
  color: string
  radius: number
}>`
  position: absolute;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.radius}px;
  
  ${(props) =>
    props.orientation === "vertical"
      ? css`
          top: ${props.position}px;
          right: 0;
          width: 100%;
          height: ${props.size}px;
        `
      : css`
          bottom: 0;
          left: ${props.position}px;
          width: ${props.size}px;
          height: 100%;
        `}
`

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
  type = "hover",
  scrollHideDelay = 600,
  orientation = "vertical",
  scrollbarSize = 8,
  scrollbarRadius = 4,
  scrollbarThumbColor = "rgba(0, 0, 0, 0.3)",
  scrollbarTrackColor = "rgba(0, 0, 0, 0.05)",
}) => {
  const [scrollbarVisible, setScrollbarVisible] = useState(type === "always")
  const [verticalThumbPosition, setVerticalThumbPosition] = useState(0)
  const [verticalThumbSize, setVerticalThumbSize] = useState(0)
  const [horizontalThumbPosition, setHorizontalThumbPosition] = useState(0)
  const [horizontalThumbSize, setHorizontalThumbSize] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showScrollbar = () => {
    if (type === "auto" || type === "hover" || type === "scroll") {
      setScrollbarVisible(true)

      if (type === "hover" && hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }
    }
  }

  const hideScrollbar = () => {
    if (type === "hover") {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }

      hideTimeoutRef.current = setTimeout(() => {
        setScrollbarVisible(false)
        hideTimeoutRef.current = null
      }, scrollHideDelay)
    }
  }

  const updateThumbPosition = () => {
    if (!viewportRef.current) return

    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = viewportRef.current

    // Update vertical scrollbar
    if (orientation === "vertical" || orientation === "both") {
      const trackHeight = clientHeight
      const thumbHeight = Math.max(20, (clientHeight / scrollHeight) * clientHeight)
      const thumbPosition = (scrollTop / (scrollHeight - clientHeight)) * (trackHeight - thumbHeight)

      setVerticalThumbSize(thumbHeight)
      setVerticalThumbPosition(thumbPosition)
    }

    // Update horizontal scrollbar
    if (orientation === "horizontal" || orientation === "both") {
      const trackWidth = clientWidth
      const thumbWidth = Math.max(20, (clientWidth / scrollWidth) * clientWidth)
      const thumbPosition = (scrollLeft / (scrollWidth - clientWidth)) * (trackWidth - thumbWidth)

      setHorizontalThumbSize(thumbWidth)
      setHorizontalThumbPosition(thumbPosition)
    }
  }

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    updateThumbPosition()

    viewport.addEventListener("scroll", updateThumbPosition)
    return () => {
      viewport.removeEventListener("scroll", updateThumbPosition)
    }
  }, [orientation])

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  return (
    <ScrollAreaContainer className={className} onMouseEnter={showScrollbar} onMouseLeave={hideScrollbar}>
      <Viewport ref={viewportRef} onScroll={updateThumbPosition}>
        {children}
      </Viewport>

      {(orientation === "vertical" || orientation === "both") && (
        <Scrollbar
          orientation="vertical"
          size={scrollbarSize}
          radius={scrollbarRadius}
          thumbColor={scrollbarThumbColor}
          trackColor={scrollbarTrackColor}
          visible={scrollbarVisible}
          thumbPosition={verticalThumbPosition}
          thumbSize={verticalThumbSize}
        >
          <Thumb
            orientation="vertical"
            position={verticalThumbPosition}
            size={verticalThumbSize}
            color={scrollbarThumbColor}
            radius={scrollbarRadius}
          />
        </Scrollbar>
      )}

      {(orientation === "horizontal" || orientation === "both") && (
        <Scrollbar
          orientation="horizontal"
          size={scrollbarSize}
          radius={scrollbarRadius}
          thumbColor={scrollbarThumbColor}
          trackColor={scrollbarTrackColor}
          visible={scrollbarVisible}
          thumbPosition={horizontalThumbPosition}
          thumbSize={horizontalThumbSize}
        >
          <Thumb
            orientation="horizontal"
            position={horizontalThumbPosition}
            size={horizontalThumbSize}
            color={scrollbarThumbColor}
            radius={scrollbarRadius}
          />
        </Scrollbar>
      )}
    </ScrollAreaContainer>
  )
}

export default ScrollArea
