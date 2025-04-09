import React from 'react';
import styled from 'styled-components';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
};

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
  display: inline-block;
`;

const SelectWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledSelect = styled.select<{ error?: boolean }>`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  background-color: white;
  border: 1px solid ${({ error }) => (error ? '#dc2626' : '#d1d5db')};
  font-size: 1rem;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
`;

const Chevron = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
`;

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select...',
  helperText,
  error,
  disabled,
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <SelectWrapper disabled={disabled}>
        <StyledSelect
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          error={error}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </StyledSelect>
        <Chevron>▾</Chevron>
      </SelectWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  );
};

export default Select;
