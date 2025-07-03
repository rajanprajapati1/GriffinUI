import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Stepper from '../../ui/Stepper';  // Adjust paths as needed
import Step from '../../ui/Step';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const meta: Meta<typeof Stepper> = {
  title: 'Components/ui/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    activeStep: { control: { type: 'number', min: 0 } },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    activeStep: 1,
  },
  render: (args) => (
    <Container>
      <Stepper activeStep={args.activeStep}>
        <Step label="Step One" />
        <Step label="Step Two" />
        <Step label="Step Three" isLast />
      </Stepper>
    </Container>
  ),
};

export const InteractiveStepper: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Login', 'Shipping Address', 'Payment', 'Review Order'];

    return (
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label} label={label} />
          ))}
        </Stepper>
        <div style={{ marginTop: '1rem' }}>
          <button
            onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
            disabled={activeStep === 0}
            style={{ marginRight: '0.5rem' }}
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep((s) => Math.min(steps.length - 1, s + 1))}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </Container>
    );
  },
};
