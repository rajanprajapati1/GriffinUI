import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: #6c757d;
        color: white;

        &:hover:not(:disabled) {
          background-color: #5a6268;
        }
      `;
    case 'tertiary':
      return css`
        background-color: #f8f9fa;
        color: #212529;

        &:hover:not(:disabled) {
          background-color: #e2e6ea;
        }
      `;
    default:
      return css`
        background-color: #6366f1;
        color: white;

        &:hover:not(:disabled) {
          background-color: #4f46e5;
        }
      `;
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.25rem 0.75rem;
        font-size: 0.875rem;
      `;
    case 'lg':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;
    default:
      return css`
        padding: 0.5rem 1.25rem;
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getSizeStyles(props.size)}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default Button;
