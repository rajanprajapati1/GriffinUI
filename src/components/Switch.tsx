import React from 'react';
import styled, { css } from 'styled-components';

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
};

const sizes = {
  sm: { width: 32, height: 18, circle: 14 },
  md: { width: 44, height: 24, circle: 20 },
  lg: { width: 56, height: 32, circle: 28 },
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Track = styled.div<{ checked: boolean; size: 'sm' | 'md' | 'lg'; disabled?: boolean }>`
  width: ${({ size }) => sizes[size].width}px;
  height: ${({ size }) => sizes[size].height}px;
  background-color: ${({ checked }) => (checked ? '#4f46e5' : '#d1d5db')};
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Thumb = styled.div<{ checked: boolean; size: 'sm' | 'md' | 'lg' }>`
  width: ${({ size }) => sizes[size].circle}px;
  height: ${({ size }) => sizes[size].circle}px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(${({ checked, size }) => (checked ? sizes[size].width - sizes[size].circle - 4 : 4)}px);
  transition: transform 0.2s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const LabelText = styled.span`
  font-size: 0.875rem;
  color: #374151;
`;

const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled, size = 'md', label }) => {
  return (
    <Wrapper>
      <Track
        checked={checked}
        size={size}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
      >
        <Thumb checked={checked} size={size} />
      </Track>
      {label && <LabelText>{label}</LabelText>}
    </Wrapper>
  );
};

export default Switch;
