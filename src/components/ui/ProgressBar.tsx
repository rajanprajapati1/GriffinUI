import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type ProgressBarProps = {
  value?: number; // For determinate
  label?: string;
  color?: 'primary' | 'success' | 'error' | 'warning' | 'neutral';
  height?: number;
  radius?: number;
  variant?: 'determinate' | 'indeterminate';
};

const colors = {
  primary: '#3b82f6',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  neutral: '#9ca3af',
};

const indeterminateAnimation = keyframes`
  0% {
    left: -40%;
    width: 40%;
  }
  50% {
    left: 20%;
    width: 60%;
  }
  100% {
    left: 100%;
    width: 80%;
  }
`;

const ProgressContainer = styled.div<{ height: number; radius: number }>`
  background-color: #e5e7eb;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: ${(p) => p.radius}px;
  height: ${(p) => p.height}px;
`;

const ProgressFill = styled.div<{
  width: number;
  color: string;
  variant: 'determinate' | 'indeterminate';
}>`
  background-color: ${(p) => p.color};
  height: 100%;
  transition: width 0.3s ease;
  ${(p) =>
    p.variant === 'indeterminate' &&
    css`
      position: absolute;
      width: 40%;
      animation: ${indeterminateAnimation} 1.2s infinite ease-in-out;
    `}
  ${(p) =>
    p.variant === 'determinate' &&
    css`
      width: ${p.width}%;
    `}
`;

const Label = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  color = 'primary',
  height = 8,
  radius = 6,
  variant = 'determinate',
  label,
}) => {
  return (
    <>
      <ProgressContainer height={height} radius={radius}>
        <ProgressFill
          width={Math.min(Math.max(value, 0), 100)}
          color={colors[color]}
          variant={variant}
        />
      </ProgressContainer>
      {label && <Label>{label}</Label>}
    </>
  );
};

export default ProgressBar;
