import React from 'react';
import styled from 'styled-components';

type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'fullWidth' | 'inset' | 'middle';
  text?: string;
};

const DividerWrapper = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ orientation }) => orientation === 'vertical' ? 'center' : 'stretch'};
  margin: ${({ variant }) => {
    switch (variant) {
      case 'inset':
        return '1rem 1rem 1rem 2.5rem';
      case 'middle':
        return '1rem 4rem';
      default:
        return '1rem 0';
    }
  }};
  ${({ orientation }) =>
    orientation === 'vertical' &&
    `
    flex-direction: column;
    height: 100px;
  `}
`;

const Line = styled.div<DividerProps>`
  background-color: #e0e0e0;
  ${({ orientation }) =>
    orientation === 'vertical'
      ? `
    width: 1px;
    height: 100%;
  `
      : `
    height: 1px;
    width: 100%;
  `}
`;

const Text = styled.span`
  padding: 0 1rem;
  color: #666;
  font-size: 0.875rem;
  white-space: nowrap;
`;

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'fullWidth',
  text,
}) => {
  if (orientation === 'vertical') {
    return (
      <DividerWrapper orientation="vertical">
        <Line orientation="vertical" />
      </DividerWrapper>
    );
  }

  return (
    <DividerWrapper orientation="horizontal" variant={variant}>
      <Line orientation="horizontal" />
      {text && <Text>{text}</Text>}
      {text && <Line orientation="horizontal" />}
    </DividerWrapper>
  );
};

export default Divider;
