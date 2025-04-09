// optigo-ui/src/components/Tooltip.tsx
import React from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: max-content;
  max-width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

 const Tooltip: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText>{label}</TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;