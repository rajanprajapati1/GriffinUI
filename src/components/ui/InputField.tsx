import React from 'react';
import styled, { css } from 'styled-components';

type InputTextFieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
};

const Wrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.35rem;
  color: #374151;
`;

const StyledInput = styled.input<{ error?: boolean; disabled?: boolean }>`
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ error }) => (error ? '#dc2626' : '#d1d5db')};
  border-radius: 0.5rem;
  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : '#fff')};
  color: #111827;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${({ error }) => (error ? '#dc2626' : '#6366f1')};
    box-shadow: 0 0 0 2px ${({ error }) => (error ? '#fecaca' : '#c7d2fe')};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

const HelperText = styled.span<{ error?: boolean }>`
  font-size: 0.75rem;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
  margin-top: 0.25rem;
`;

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  fullWidth,
  error,
  helperText,
  disabled,
}) => {
  return (
    <Wrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
        disabled={disabled}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default InputTextField;
