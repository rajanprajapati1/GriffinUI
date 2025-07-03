// optigo-ui/src/components/Tooltip.tsx
import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';
import styled, { css, keyframes } from 'styled-components';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) scale(0.8); }
  to { opacity: 1; transform: translateX(-50%) scale(1); }
`;

const bounceIn = keyframes`
  0% { opacity: 0; transform: translateX(-50%) scale(0.3); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
  70% { transform: translateX(-50%) scale(0.9); }
  100% { opacity: 1; transform: translateX(-50%) scale(1); }
`;

const pulse = keyframes`
  0% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.05); }
  100% { transform: translateX(-50%) scale(1); }
`;

// Types
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual';
export type TooltipVariant = 'default' | 'dark' | 'light' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary';
export type TooltipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TooltipAnimation = 'fade' | 'slide' | 'bounce' | 'pulse' | 'none';

interface TooltipProps {
  // Content
  content: ReactNode;
  title?: string;
  children: ReactNode;
  
  // Positioning
  position?: TooltipPosition;
  offset?: number;
  followCursor?: boolean;
  
  // Behavior
  trigger?: TooltipTrigger;
  delay?: number;
  duration?: number;
  disabled?: boolean;
  visible?: boolean;
  
  // Styling
  variant?: TooltipVariant;
  size?: TooltipSize;
  animation?: TooltipAnimation;
  arrow?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  
  // Advanced
  maxWidth?: number;
  interactive?: boolean;
  multiline?: boolean;
  rich?: boolean;
  
  // Events
  onShow?: () => void;
  onHide?: () => void;
  onClick?: () => void;
  
  // Custom styling
  className?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
}

// Styled components
const TooltipWrapper = styled.div<{ interactive?: boolean }>`
  position: relative;
  display: inline-block;
  
  ${props => props.interactive && css`
    cursor: pointer;
  `}
`;

const TooltipContent = styled.div<{
  $position: TooltipPosition;
  $variant: TooltipVariant;
  $size: TooltipSize;
  $animation: TooltipAnimation;
  $visible: boolean;
  $maxWidth: number;
  $rounded: boolean;
  $shadow: boolean;
  $multiline: boolean;
  $offset: number;
}>`
  position: absolute;
  z-index: 9999;
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  opacity: ${props => props.$visible ? 1 : 0};
  max-width: ${props => props.$maxWidth}px;
  word-wrap: break-word;
  white-space: ${props => props.$multiline ? 'normal' : 'nowrap'};
  
  // Size variants
  ${props => {
    switch (props.$size) {
      case 'xs':
        return css`
          padding: 4px 6px;
          font-size: 10px;
          line-height: 1.2;
        `;
      case 'sm':
        return css`
          padding: 6px 8px;
          font-size: 12px;
          line-height: 1.3;
        `;
      case 'md':
        return css`
          padding: 8px 12px;
          font-size: 14px;
          line-height: 1.4;
        `;
      case 'lg':
        return css`
          padding: 10px 14px;
          font-size: 16px;
          line-height: 1.5;
        `;
      case 'xl':
        return css`
          padding: 12px 16px;
          font-size: 18px;
          line-height: 1.5;
        `;
      default:
        return css`
          padding: 8px 12px;
          font-size: 14px;
          line-height: 1.4;
        `;
    }
  }}
  
  // Color variants
  ${props => {
    switch (props.$variant) {
      case 'dark':
        return css`
          background: #1a1a1a;
          color: #ffffff;
          border: 1px solid #333;
        `;
      case 'light':
        return css`
          background: #ffffff;
          color: #333333;
          border: 1px solid #e2e8f0;
        `;
      case 'success':
        return css`
          background: #10b981;
          color: #ffffff;
          border: 1px solid #059669;
        `;
      case 'warning':
        return css`
          background: #f59e0b;
          color: #ffffff;
          border: 1px solid #d97706;
        `;
      case 'error':
        return css`
          background: #ef4444;
          color: #ffffff;
          border: 1px solid #dc2626;
        `;
      case 'info':
        return css`
          background: #3b82f6;
          color: #ffffff;
          border: 1px solid #2563eb;
        `;
      case 'primary':
        return css`
          background: #8b5cf6;
          color: #ffffff;
          border: 1px solid #7c3aed;
        `;
      case 'secondary':
        return css`
          background: #6b7280;
          color: #ffffff;
          border: 1px solid #4b5563;
        `;
      default:
        return css`
          background: #374151;
          color: #ffffff;
          border: 1px solid #4b5563;
        `;
    }
  }}
  
  // Border radius
  border-radius: ${props => props.$rounded ? '8px' : '4px'};
  
  // Shadow
  ${props => props.$shadow && css`
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `}
  
  // Positioning
  ${props => {
    const offset = props.$offset;
    switch (props.$position) {
      case 'top':
        return css`
          bottom: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return css`
          top: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return css`
          right: calc(100% + ${offset}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right':
        return css`
          left: calc(100% + ${offset}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'top-left':
        return css`
          bottom: calc(100% + ${offset}px);
          right: 0;
        `;
      case 'top-right':
        return css`
          bottom: calc(100% + ${offset}px);
          left: 0;
        `;
      case 'bottom-left':
        return css`
          top: calc(100% + ${offset}px);
          right: 0;
        `;
      case 'bottom-right':
        return css`
          top: calc(100% + ${offset}px);
          left: 0;
        `;
      default:
        return css`
          bottom: calc(100% + ${offset}px);
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}
  
  // Animations
  ${props => {
    if (!props.$visible) return '';
    
    switch (props.$animation) {
      case 'fade':
        return css`
          animation: ${fadeIn} 0.2s ease-out;
        `;
      case 'slide':
        return css`
          animation: ${slideIn} 0.3s ease-out;
        `;
      case 'bounce':
        return css`
          animation: ${bounceIn} 0.4s ease-out;
        `;
      case 'pulse':
        return css`
          animation: ${pulse} 0.3s ease-out;
        `;
      default:
        return css`
          transition: opacity 0.2s ease-out;
        `;
    }
  }}
`;

const TooltipArrow = styled.div<{
  $position: TooltipPosition;
  $variant: TooltipVariant;
}>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  
  ${props => {
    const getBorderColor = () => {
      switch (props.$variant) {
        case 'dark': return '#1a1a1a';
        case 'light': return '#ffffff';
        case 'success': return '#10b981';
        case 'warning': return '#f59e0b';
        case 'error': return '#ef4444';
        case 'info': return '#3b82f6';
        case 'primary': return '#8b5cf6';
        case 'secondary': return '#6b7280';
        default: return '#374151';
      }
    };
    
    const color = getBorderColor();
    
    switch (props.$position) {
      case 'top':
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0 6px;
          border-color: ${color} transparent transparent transparent;
        `;
      case 'bottom':
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 6px 6px 6px;
          border-color: transparent transparent ${color} transparent;
        `;
      case 'left':
        return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-color: transparent transparent transparent ${color};
        `;
      case 'right':
        return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 6px 6px 0;
          border-color: transparent ${color} transparent transparent;
        `;
      default:
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0 6px;
          border-color: ${color} transparent transparent transparent;
        `;
    }
  }}
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 4px;
`;

const TooltipBody = styled.div`
  // Rich content styling
  p {
    margin: 0 0 8px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul, ol {
    margin: 0;
    padding-left: 16px;
  }
  
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 4px;
    border-radius: 2px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
  }
`;

// Main component
const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  children,
  position = 'top',
  offset = 8,
  followCursor = false,
  trigger = 'hover',
  delay = 0,
  duration = 0,
  disabled = false,
  visible: controlledVisible,
  variant = 'default',
  size = 'md',
  animation = 'fade',
  arrow = true,
  rounded = false,
  shadow = true,
  maxWidth = 250,
  interactive = false,
  multiline = false,
  rich = false,
  onShow,
  onHide,
  onClick,
  className,
  style,
  contentStyle,
}) => {
  const [internalVisible, setInternalVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isVisible = controlledVisible !== undefined ? controlledVisible : internalVisible;

  // Handle show/hide logic
  const showTooltip = () => {
    if (disabled) return;
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    if (delay > 0) {
      showTimeoutRef.current = setTimeout(() => {
        setInternalVisible(true);
        onShow?.();
      }, delay);
    } else {
      setInternalVisible(true);
      onShow?.();
    }
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    
    if (duration > 0) {
      hideTimeoutRef.current = setTimeout(() => {
        setInternalVisible(false);
        onHide?.();
      }, duration);
    } else {
      setInternalVisible(false);
      onHide?.();
    }
  };

  // Mouse position tracking for follow cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    if (followCursor) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  // Event handlers
  const handleMouseEnter = () => {
    if (trigger === 'hover') showTooltip();
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') hideTooltip();
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
    onClick?.();
  };

  const handleFocus = () => {
    if (trigger === 'focus') showTooltip();
  };

  const handleBlur = () => {
    if (trigger === 'focus') hideTooltip();
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Click outside to close
  useEffect(() => {
    if (trigger === 'click' && isVisible) {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          hideTooltip();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [trigger, isVisible]);

  // Don't render if no content
  if (!content && !title) return <>{children}</>;

  return (
    <TooltipWrapper
      ref={wrapperRef}
      className={className}
      style={style}
      interactive={interactive}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
      
      {(isVisible || controlledVisible !== undefined) && (
        <TooltipContent
          ref={contentRef}
          $position={position}
          $variant={variant}
          $size={size}
          $animation={animation}
          $visible={isVisible}
          $maxWidth={maxWidth}
          $rounded={rounded}
          $shadow={shadow}
          $multiline={multiline}
          $offset={offset}
          style={contentStyle}
        >
          {title && <TooltipTitle>{title}</TooltipTitle>}
          <TooltipBody>
            {rich ? (
              <div dangerouslySetInnerHTML={{ __html: content as string }} />
            ) : (
              content
            )}
          </TooltipBody>
          
          {arrow && !followCursor && (
            <TooltipArrow $position={position} $variant={variant} />
          )}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;

type TooltipPresetProps = Omit<TooltipProps, 'children'> & { content: React.ReactNode };

export const TooltipPresets = {
  minimal: (props: TooltipPresetProps): TooltipPresetProps => ({
    position: 'top',
    variant: 'default',
    ...props,
  }),

  info: (props: TooltipPresetProps): TooltipPresetProps => ({
    variant: 'info',
    ...props,
  }),

  success: (props: TooltipPresetProps): TooltipPresetProps => ({
    variant: 'success',
    ...props,
  }),

  warning: (props: TooltipPresetProps): TooltipPresetProps => ({
    variant: 'warning',
    ...props,
  }),

  error: (props: TooltipPresetProps): TooltipPresetProps => ({
    variant: 'error',
    ...props,
  }),

  clickable: (props: TooltipPresetProps): TooltipPresetProps => ({
    trigger: 'click',
    interactive: true,
    ...props,
  }),

  rich: (props: TooltipPresetProps): TooltipPresetProps => ({
    rich: true,
    multiline: true,
    maxWidth: 350,
    ...props,
  }),

  deluxe: (props: TooltipPresetProps): TooltipPresetProps => ({
    shadow: true,
    rounded: true,
    animation: 'bounce',
    size: 'lg',
    ...props,
  }),
};

