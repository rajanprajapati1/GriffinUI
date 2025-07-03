import React from 'react';
import styled from 'styled-components';

type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  label?: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  direction?: 'row' | 'column';
  error?: boolean;
  helperText?: string;
};

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
`;

const GroupLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Group = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 1rem;
`;

const Label = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 0.95rem;
  transition: all 0.2s ease;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

const StyledCircle = styled.span<{
  checked: boolean;
  error?: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ error }) => (error ? '#ef4444' : '#cbd5e1')};
  background-color: ${({ checked }) => (checked ? '#6366f1' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;

  ${Label}:hover & {
    border-color: ${({ error }) => (error ? '#ef4444' : '#6366f1')};
  }

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;

const HelperText = styled.p<{ error?: boolean }>`
  font-size: 0.75rem;
  margin-top: 0.35rem;
  color: ${({ error }) => (error ? '#ef4444' : '#6b7280')};
`;

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  direction = 'column',
  error,
  helperText,
}) => {
  return (
    <Wrapper>
      {label && <GroupLabel>{label}</GroupLabel>}
      <Group direction={direction}>
        {options.map((opt) => (
          <Label key={opt.value} disabled={opt.disabled}>
            <HiddenRadio
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={opt.disabled}
            />
            <StyledCircle checked={value === opt.value} error={error} />
            {opt.label}
          </Label>
        ))}
      </Group>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default RadioGroup;
