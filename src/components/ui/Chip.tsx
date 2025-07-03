import React from 'react';
import styled, { css } from 'styled-components';

const colorStyles = {
  default: {
    filled: css`
      background: #f3f4f6;
      color: #374151;
    `,
    outlined: css`
      border: 1px solid #d1d5db;
      color: #374151;
    `
  },
  primary: {
    filled: css`
      background: #3b82f6;
      color: white;
    `,
    outlined: css`
      border: 1px solid #3b82f6;
      color: #3b82f6;
    `
  },
  success: {
    filled: css`
      background: #10b981;
      color: white;
    `,
    outlined: css`
      border: 1px solid #10b981;
      color: #10b981;
    `
  },
  error: {
    filled: css`
      background: #ef4444;
      color: white;
    `,
    outlined: css`
      border: 1px solid #ef4444;
      color: #ef4444;
    `
  },
  warning: {
    filled: css`
      background: #f59e0b;
      color: white;
    `,
    outlined: css`
      border: 1px solid #f59e0b;
      color: #f59e0b;
    `
  }
};

const sizeStyles = {
  sm: css`
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  `,
  md: css`
    font-size: 0.875rem;
    padding: 0.3rem 0.75rem;
  `,
  lg: css`
    font-size: 1rem;
    padding: 0.4rem 1rem;
  `
};

const StyledChip = styled.span<Required<Pick<ChipProps, 'variant' | 'color' | 'size'>>>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  font-weight: 500;
  cursor: default;
  ${(props) => colorStyles[props.color][props.variant]}
  ${(props) => sizeStyles[props.size]}
`;

const DeleteIcon = styled.span`
  margin-left: 4px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    opacity: 0.8;
  }
`;

type ChipProps = {
  label: string;
  variant?: 'filled' | 'outlined';
  color?: 'default' | 'primary' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  avatar?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onDelete?: () => void;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({
  label,
  avatar,
  startIcon,
  endIcon,
  onDelete,
  variant = 'filled',
  color = 'default',
  size = 'md',
  className
}) => {
  return (
    <StyledChip variant={variant} color={color} size={size} className={className}>
      {avatar}
      {startIcon}
      {label}
      {endIcon}
      {onDelete && (
        <DeleteIcon onClick={onDelete}>
          <span>&times;</span>
        </DeleteIcon>
      )}
    </StyledChip>
  );
};

export default Chip;
