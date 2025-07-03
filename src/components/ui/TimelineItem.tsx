import React from 'react';
import styled, { css } from 'styled-components';

type Color = 'default' | 'primary' | 'success' | 'error' | 'warning';

type TimelineItemProps = {
  color?: Color;
  dotContent?: React.ReactNode;
  oppositeContent?: React.ReactNode;
  children: React.ReactNode;
  connector?: 'solid' | 'dashed' | 'none';
};

const TimelineItemWrapper = styled.li`
  display: flex;
  position: relative;
  padding: 1rem 0;
`;

const OppositeContent = styled.div`
  flex: 0 0 120px;
  text-align: right;
  font-size: 0.875rem;
  color: #6b7280;
  padding-right: 1rem;
`;

const Dot = styled.div<{ color: Color }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ color }) =>
    color === 'primary' ? '#3b82f6' :
    color === 'success' ? '#10b981' :
    color === 'error' ? '#ef4444' :
    color === 'warning' ? '#f59e0b' :
    '#9ca3af'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Connector = styled.span<{ type: TimelineItemProps['connector'] }>`
  position: absolute;
  top: 14px;
  left: 128px;
  width: 2px;
  height: calc(100% - 14px);
  background: ${({ type }) =>
    type === 'dashed' ? 'repeating-linear-gradient(#d1d5db, #d1d5db 4px, transparent 4px, transparent 8px)' :
    type === 'solid' ? '#d1d5db' :
    'transparent'};
`;

const DotWrapper = styled.div`
  position: relative;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding-left: 1rem;
  flex: 1;
`;

const TimelineItem: React.FC<TimelineItemProps> = ({
  color = 'default',
  dotContent,
  oppositeContent,
  children,
  connector = 'solid'
}) => {
  return (
    <TimelineItemWrapper>
      {oppositeContent && <OppositeContent>{oppositeContent}</OppositeContent>}
      <DotWrapper>
        <Dot color={color}>{dotContent}</Dot>
        <Connector type={connector} />
      </DotWrapper>
      <Content>{children}</Content>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
