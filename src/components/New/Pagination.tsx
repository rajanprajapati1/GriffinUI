
import type React from "react"
import styled, { css } from "styled-components"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  showFirstLast?: boolean
  showPrevNext?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "outline" | "filled"
  shape?: "rounded" | "square" | "circle"
  className?: string
}

type ButtonProps = {
  size: "sm" | "md" | "lg"
  variant: "outline" | "filled"
  shape: "rounded" | "square" | "circle"
  active?: boolean
  disabled?: boolean
}

const sizeStyles = {
  sm: css`
    height: 2rem;
    min-width: 2rem;
    font-size: 0.75rem;
  `,
  md: css`
    height: 2.5rem;
    min-width: 2.5rem;
    font-size: 0.875rem;
  `,
  lg: css`
    height: 3rem;
    min-width: 3rem;
    font-size: 1rem;
  `,
}

const shapeStyles = {
  rounded: css`
    border-radius: 0.375rem;
  `,
  square: css`
    border-radius: 0;
  `,
  circle: css`
    border-radius: 9999px;
  `,
}

const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
`

const PaginationItem = styled.li`
  margin: 0;
`

const PaginationButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  border: 1px solid ${(props) => (props.active ? "#3b82f6" : "#d1d5db")};
  background-color: ${(props) => {
    if (props.active) {
      return props.variant === "outline" ? "white" : "#3b82f6"
    }
    return props.variant === "outline" ? "white" : "#f3f4f6"
  }};
  color: ${(props) => {
    if (props.active) {
      return props.variant === "outline" ? "#3b82f6" : "white"
    }
    return props.variant === "outline" ? "#4b5563" : "#4b5563"
  }};
  cursor: pointer;
  transition: all 0.2s;
  
  ${(props) => sizeStyles[props.size]}
  ${(props) => shapeStyles[props.shape]}
  
  &:hover:not(:disabled) {
    background-color: ${(props) => {
      if (props.active) {
        return props.variant === "outline" ? "#eff6ff" : "#2563eb"
      }
      return props.variant === "outline" ? "#f3f4f6" : "#e5e7eb"
    }};
    border-color: ${(props) => (props.active ? "#2563eb" : "#9ca3af")};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Ellipsis = styled.span<{ size: "sm" | "md" | "lg" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => sizeStyles[props.size]}
  padding: 0 0.5rem;
  color: #6b7280;
`

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  size = "md",
  variant = "outline",
  shape = "rounded",
  className,
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  const createPaginationItems = () => {
    const items: (number | "ellipsis")[] = []

    // Calculate the range of pages to show
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    // Whether to show ellipsis on left and right
    const showLeftEllipsis = leftSiblingIndex > 2
    const showRightEllipsis = rightSiblingIndex < totalPages - 1

    if (showFirstLast && showLeftEllipsis) {
      items.push(1)
      items.push("ellipsis")
    }

    // Add pages in the middle
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    items.push(...middleRange)

    if (showFirstLast && showRightEllipsis) {
      items.push("ellipsis")
      items.push(totalPages)
    }

    return items
  }

  const paginationItems = createPaginationItems()

  return (
    <PaginationContainer className={className} aria-label="Pagination">
      <PaginationList>
        {showPrevNext && (
          <PaginationItem>
            <PaginationButton
              size={size}
              variant={variant}
              shape={shape}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <PrevIcon />
            </PaginationButton>
          </PaginationItem>
        )}

        {showFirstLast && !paginationItems.includes(1) && (
          <PaginationItem>
            <PaginationButton
              size={size}
              variant={variant}
              shape={shape}
              onClick={() => onPageChange(1)}
              active={currentPage === 1}
            >
              1
            </PaginationButton>
          </PaginationItem>
        )}

        {paginationItems.map((item, index) => {
          if (item === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <Ellipsis size={size}>...</Ellipsis>
              </PaginationItem>
            )
          }

          return (
            <PaginationItem key={item}>
              <PaginationButton
                size={size}
                variant={variant}
                shape={shape}
                onClick={() => onPageChange(item)}
                active={currentPage === item}
              >
                {item}
              </PaginationButton>
            </PaginationItem>
          )
        })}

        {showFirstLast && !paginationItems.includes(totalPages) && (
          <PaginationItem>
            <PaginationButton
              size={size}
              variant={variant}
              shape={shape}
              onClick={() => onPageChange(totalPages)}
              active={currentPage === totalPages}
            >
              {totalPages}
            </PaginationButton>
          </PaginationItem>
        )}

        {showPrevNext && (
          <PaginationItem>
            <PaginationButton
              size={size}
              variant={variant}
              shape={shape}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <NextIcon />
            </PaginationButton>
          </PaginationItem>
        )}
      </PaginationList>
    </PaginationContainer>
  )
}

// Simple prev icon
const PrevIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Simple next icon
const NextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Pagination
