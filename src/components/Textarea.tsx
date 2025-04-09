import React from 'react';
import styled, { css } from 'styled-components';

type TextareaProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'unstyled';
  autoResize?: boolean;
  rows?: number;
};

const sizeStyles = {
  sm: css`
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.6rem 0.75rem;
  `,
  lg: css`
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
  `,
};

const variantStyles = {
  outline: css`
    border: 1px solid #d1d5db;
    background-color: white;
  `,
  filled: css`
    background-color: #f3f4f6;
    border: 1px solid transparent;
  `,
  unstyled: css`
    border: none;
    background: none;
    padding: 0;
  `,
};

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledTextarea = styled.textarea<Required<Pick<TextareaProps, 'size' | 'variant'>> & { error?: boolean }>`
  width: 100%;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  ${(props) => sizeStyles[props.size]}
  ${(props) => variantStyles[props.variant]}
  ${(props) =>
    props.error &&
    css`
      border-color: #dc2626 !important;
    `}

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
`;

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error = false,
  disabled = false,
  size = 'md',
  variant = 'outline',
  autoResize = false,
  rows = 4,
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <StyledTextarea
        rows={autoResize ? 1 : rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        variant={variant}
        error={error}
        disabled={disabled}
        style={autoResize ? { resize: 'none', overflow: 'hidden' } : undefined}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  );
};

export default Textarea;
