
import type React from "react"
import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

type ResizableProps = {
  children: React.ReactNode
  direction?: "horizontal" | "vertical" | "both"
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  defaultSize?: { width?: number | string; height?: number | string }
  onResize?: (size: { width: number; height: number }) => void
  className?: string
}

type HandleProps = {
  direction:
    | "horizontal"
    | "vertical"
    | "both"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
}

const ResizableContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const Handle = styled.div<HandleProps>`
  position: absolute;
  
  ${(props) => {
    switch (props.direction) {
      case "horizontal":
        return `
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `
      case "vertical":
        return `
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `
      case "both":
        return `
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `
      case "top":
        return `
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `
      case "right":
        return `
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `
      case "bottom":
        return `
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `
      case "left":
        return `
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `
      case "topLeft":
        return `
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `
      case "topRight":
        return `
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nesw-resize;
        `
      case "bottomLeft":
        return `
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          cursor: nesw-resize;
        `
      case "bottomRight":
        return `
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `
      default:
        return ""
    }
  }}
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const Resizable: React.FC<ResizableProps> = ({
  children,
  direction = "both",
  minWidth = 100,
  minHeight = 100,
  maxWidth = Number.POSITIVE_INFINITY,
  maxHeight = Number.POSITIVE_INFINITY,
  defaultSize = {},
  onResize,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({
    width: defaultSize.width || "auto",
    height: defaultSize.height || "auto",
  })
  const [resizing, setResizing] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [startSize, setStartSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current && (defaultSize.width || defaultSize.height)) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setSize({
        width: defaultSize.width || width,
        height: defaultSize.height || height,
      })
    }
  }, [defaultSize])

  const handleMouseDown = (e: React.MouseEvent, handleDirection: string) => {
    e.preventDefault()

    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()

      setResizing(true)
      setStartPos({ x: e.clientX, y: e.clientY })
      setStartSize({ width, height })

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!resizing) return

    let newWidth = startSize.width
    let newHeight = startSize.height

    if (direction === "horizontal" || direction === "both") {
      const deltaX = e.clientX - startPos.x
      newWidth = Math.max(minWidth, Math.min(maxWidth, startSize.width + deltaX))
    }

    if (direction === "vertical" || direction === "both") {
      const deltaY = e.clientY - startPos.y
      newHeight = Math.max(minHeight, Math.min(maxHeight, startSize.height + deltaY))
    }

    setSize({ width: newWidth, height: newHeight })

    if (onResize) {
      onResize({ width: newWidth, height: newHeight })
    }
  }

  const handleMouseUp = () => {
    setResizing(false)
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  return (
    <ResizableContainer
      ref={containerRef}
      className={className}
      style={{
        width: typeof size.width === "number" ? `${size.width}px` : size.width,
        height: typeof size.height === "number" ? `${size.height}px` : size.height,
      }}
    >
      {children}

      {direction === "horizontal" && (
        <Handle direction="horizontal" onMouseDown={(e) => handleMouseDown(e, "horizontal")} />
      )}

      {direction === "vertical" && <Handle direction="vertical" onMouseDown={(e) => handleMouseDown(e, "vertical")} />}

      {direction === "both" && <Handle direction="both" onMouseDown={(e) => handleMouseDown(e, "both")} />}
    </ResizableContainer>
  )
}

export default Resizable
