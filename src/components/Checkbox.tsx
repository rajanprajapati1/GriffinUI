import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
};

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const StyledBox = styled.span<{ checked?: boolean; error?: boolean }>`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 4px;
  display: inline-block;
  background: ${({ checked }) => (checked ? '#6366f1' : 'white')};
  border: 2px solid ${({ error }) => (error ? '#dc2626' : '#d1d5db')};
  transition: all 0.2s;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 2px auto;
  }
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  color: ${({ error }) => (error ? '#dc2626' : '#6b7280')};
  margin: 4px 0 0 1.75rem;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  error,
  helperText,
}) => {
  return (
    <div>
      <Wrapper disabled={disabled}>
        <HiddenCheckbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <StyledBox checked={checked} error={error} />
        {label && <span>{label}</span>}
      </Wrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  );
};

export default Checkbox;
