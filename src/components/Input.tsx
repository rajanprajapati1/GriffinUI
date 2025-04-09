import React from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'unstyled';
  icon?: React.ReactNode;
  type?: string;
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

const InputWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledInput = styled.input<Required<Pick<InputProps, 'size' | 'variant'>> & { error?: boolean }>`
  width: 100%;
  border-radius: 8px;
  outline: none;
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
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  color: #9ca3af;
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
`;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  helperText,
  error = false,
  disabled = false,
  size = 'md',
  variant = 'outline',
  icon,
  type = 'text',
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputWrapper disabled={disabled}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          size={size}
          variant={variant}
          error={error}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ paddingLeft: icon ? '2.25rem' : undefined }}
          type={type}
        />
      </InputWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  );
};

export default Input;
