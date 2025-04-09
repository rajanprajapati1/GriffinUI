import React from 'react';
import styled from 'styled-components';

type StepperProps = {
  activeStep?: number;
  children: React.ReactNode;
};

const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Stepper: React.FC<StepperProps> = ({ activeStep = 0, children }) => {
  return (
    <StepperWrapper>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          index,
          isActive: index === activeStep,
          isCompleted: index < activeStep,
          isLast: index === React.Children.count(children) - 1,
        })
      )}
    </StepperWrapper>
  );
};

export default Stepper;
