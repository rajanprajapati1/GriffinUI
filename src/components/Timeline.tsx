import React from 'react';
import styled from 'styled-components';

const StyledTimeline = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

type TimelineProps = {
  children: React.ReactNode;
  className?: string;
};

const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return <StyledTimeline className={className}>{children}</StyledTimeline>;
};

export default Timeline;
