import React from 'react';
import styled, { css } from 'styled-components';

type StepProps = {
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
  index?: number;
  isActive?: boolean;
  isCompleted?: boolean;
  isLast?: boolean;
  isError?: boolean;
  disabled?: boolean;
};

const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StepIconWrapper = styled.div<{ active?: boolean; completed?: boolean; error?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ completed, error }) =>
    completed ? '#10b981' : error ? '#ef4444' : '#e5e7eb'};
  color: ${({ completed, error }) =>
    completed || error ? '#fff' : '#374151'};
  border: ${({ active }) => (active ? '2px solid #3b82f6' : '2px solid transparent')};
`;

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

const Label = styled.div`
  font-weight: 600;
`;

const SubLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const Connector = styled.div<{ isLast?: boolean }>`
  flex: 1;
  height: 2px;
  background-color: #d1d5db;
  margin: 0 0.5rem;
  ${({ isLast }) =>
    isLast &&
    css`
      display: none;
    `}
`;

const Step: React.FC<StepProps> = ({
  label,
  subLabel,
  icon,
  index,
  isActive,
  isCompleted,
  isLast,
  isError,
  disabled,
}) => {
  const displayIcon =
    icon || isCompleted ? (
      <span style={{ fontSize: '14px' }}>{isCompleted ? '✔️' : index! + 1}</span>
    ) : (
      index! + 1
    );

  return (
    <>
      <StepContainer>
        <StepIconWrapper active={isActive} completed={isCompleted} error={isError}>
          {displayIcon}
        </StepIconWrapper>
        <LabelBox>
          <Label>{label}</Label>
          {subLabel && <SubLabel>{subLabel}</SubLabel>}
        </LabelBox>
      </StepContainer>
      <Connector isLast={isLast} />
    </>
  );
};

export default Step;
