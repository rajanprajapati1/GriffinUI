import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Step from '../../ui/Step'; // Adjust path if needed
import styled from 'styled-components';

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const meta: Meta<typeof Step> = {
  title: 'Components/ui/Step',
  component: Step,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    subLabel: { control: 'text' },
    index: { control: { type: 'number', min: 0 } },
    isActive: { control: 'boolean' },
    isCompleted: { control: 'boolean' },
    isLast: { control: 'boolean' },
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
    label: 'Step 1',
    index: 0,
    isActive: true,
    isCompleted: false,
    isLast: false,
  },
  render: (args) => (
    <StepsWrapper>
      <Step {...args} />
      <Step label="Step 2" index={1} />
      <Step label="Step 3" index={2} isLast />
    </StepsWrapper>
  ),
};

export const CompletedStep: Story = {
  args: {
    label: 'Step 1',
    index: 0,
    isCompleted: true,
    isLast: false,
  },
  render: (args) => (
    <StepsWrapper>
      <Step {...args} />
      <Step label="Step 2" index={1} isActive />
      <Step label="Step 3" index={2} isLast />
    </StepsWrapper>
  ),
};

export const ErrorStep: Story = {
  args: {
    label: 'Step 2',
    index: 1,
    isError: true,
    isLast: false,
  },
  render: (args) => (
    <StepsWrapper>
      <Step label="Step 1" index={0} isCompleted />
      <Step {...args} />
      <Step label="Step 3" index={2} isLast />
    </StepsWrapper>
  ),
};

export const WithSubLabelAndIcon: Story = {
  args: {
    label: 'Review',
    subLabel: 'Verify details',
    index: 2,
    icon: <span>⭐</span>,
    isActive: true,
    isLast: true,
  },
  render: (args) => (
    <StepsWrapper>
      <Step label="Step 1" index={0} isCompleted />
      <Step label="Step 2" index={1} isCompleted />
      <Step {...args} />
    </StepsWrapper>
  ),
};
