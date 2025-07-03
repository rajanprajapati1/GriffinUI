import React from 'react';
import styled, { css } from 'styled-components';

type TextFieldProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'unstyled';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledInput = styled.input<Required<Pick<TextFieldProps, 'size' | 'variant'>> & { error?: boolean; hasIcon?: boolean }>`
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

  ${(props) =>
    props.hasIcon &&
    css`
      padding-left: 2.5rem;
    `}

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const IconContainer = styled.span<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;')}
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
`;

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error = false,
  disabled = false,
  size = 'md',
  variant = 'outline',
  iconLeft,
  iconRight,
  type = 'text',
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputWrapper disabled={disabled}>
        {iconLeft && <IconContainer position="left">{iconLeft}</IconContainer>}
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          variant={variant}
          error={error}
          hasIcon={!!iconLeft}
          disabled={disabled}
        />
        {iconRight && <IconContainer position="right">{iconRight}</IconContainer>}
      </InputWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  );
};

export default TextField;
