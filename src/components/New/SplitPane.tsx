
import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"

type SplitPaneProps = {
  children: [React.ReactNode, React.ReactNode]
  direction?: "horizontal" | "vertical"
  defaultSplit?: number
  minSize?: number
  maxSize?: number
  className?: string
  onDragEnd?: (size: number) => void
}

type PaneProps = {
  children: React.ReactNode
  className?: string
}

type DividerProps = {
  direction: "horizontal" | "vertical"
  className?: string
}

const Container = styled.div<{ direction: "horizontal" | "vertical" }>`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  ${(props) =>
    props.direction === "vertical" &&
    css`
    flex-direction: column;
  `}
`

const PaneContainer = styled.div<{ size: string; isFirst: boolean; direction: "horizontal" | "vertical" }>`
  overflow: auto;
  
  ${(props) =>
    props.direction === "horizontal"
      ? css`
        width: ${props.size};
        height: 100%;
      `
      : css`
        width: 100%;
        height: ${props.size};
      `}
`

const DividerContainer = styled.div<{ direction: "horizontal" | "vertical" }>`
  background-color: #e5e7eb;
  position: relative;
  
  ${(props) =>
    props.direction === "horizontal"
      ? css`
        width: 4px;
        height: 100%;
        cursor: col-resize;
        
        &:hover {
          background-color: #d1d5db;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: -3px;
          right: -3px;
          bottom: 0;
          z-index: 10;
        }
      `
      : css`
        width: 100%;
        height: 4px;
        cursor: row-resize;
        
        &:hover {
          background-color: #d1d5db;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 0;
          right: 0;
          bottom: -3px;
          z-index: 10;
        }
      `}
`

const SplitPaneContext = React.createContext<{
  direction: "horizontal" | "vertical"
  firstPaneSize: string
  secondPaneSize: string
}>({
  direction: "horizontal",
  firstPaneSize: "50%",
  secondPaneSize: "50%",
})

type SplitPaneComponent = React.FC<SplitPaneProps> & {
  Pane: React.FC<PaneProps>
  Divider: React.FC<DividerProps>
}


const SplitPaneComponent: SplitPaneComponent = ({
  children,
  direction = "horizontal",
  defaultSplit = 50,
  minSize = 10,
  maxSize = 90,
  className,
  onDragEnd,
}) => {
  const [firstPaneSize, setFirstPaneSize] = useState(`${defaultSplit}%`)
  const [secondPaneSize, setSecondPaneSize] = useState(`${100 - defaultSplit}%`)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDragStart = () => {
    setIsDragging(true)
    document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize"
    document.body.style.userSelect = "none"
  }

  const handleDrag = (clientPosition: number) => {
    if (!containerRef.current || !isDragging) return

    const containerRect = containerRef.current.getBoundingClientRect()
    let percentage

    if (direction === "horizontal") {
      percentage = ((clientPosition - containerRect.left) / containerRect.width) * 100
    } else {
      percentage = ((clientPosition - containerRect.top) / containerRect.height) * 100
    }

    // Clamp percentage between minSize and maxSize
    percentage = Math.max(minSize, Math.min(maxSize, percentage))

    setFirstPaneSize(`${percentage}%`)
    setSecondPaneSize(`${100 - percentage}%`)
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    setIsDragging(false)
    document.body.style.cursor = ""
    document.body.style.userSelect = ""

    if (onDragEnd) {
      const percentage = Number.parseFloat(firstPaneSize)
      onDragEnd(percentage)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (direction === "horizontal") {
        handleDrag(e.clientX)
      } else {
        handleDrag(e.clientY)
      }
    }

    const handleMouseUp = () => {
      handleDragEnd()
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, direction])

  return (
    <SplitPaneContext.Provider value={{ direction, firstPaneSize, secondPaneSize }}>
      <Container ref={containerRef} direction={direction} className={className}>
        <PaneContainer size={firstPaneSize} isFirst={true} direction={direction}>
          {children[0]}
        </PaneContainer>
        <DividerContainer direction={direction} onMouseDown={handleDragStart} onTouchStart={handleDragStart} />
        <PaneContainer size={secondPaneSize} isFirst={false} direction={direction}>
          {children[1]}
        </PaneContainer>
      </Container>
    </SplitPaneContext.Provider>
  )
}

const Pane: React.FC<PaneProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

const Divider: React.FC<DividerProps> = ({ direction, className }) => {
  return <DividerContainer direction={direction} className={className} />
}

SplitPaneComponent.Pane = Pane
SplitPaneComponent.Divider = Divider
export default SplitPaneComponent

