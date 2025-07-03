import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Spacer from '../../ui/Spacer'; // Adjust path if needed
import styled from 'styled-components';

const Container = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border: 1px dashed #9ca3af;
`;

const meta: Meta<typeof Spacer> = {
  title: 'Components/ui/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: 'text',
      description: 'Height of the spacer (e.g. "1rem", "20px")',
      defaultValue: '1rem',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    height: '1rem',
  },
  render: (args) => (
    <Container>
      <div>Above Spacer</div>
      <Spacer {...args} />
      <div>Below Spacer</div>
    </Container>
  ),
};

export const CustomHeight: Story = {
  args: {
    height: '3rem',
  },
  render: (args) => (
    <Container>
      <div>Above Spacer</div>
      <Spacer {...args} />
      <div>Below Spacer</div>
    </Container>
  ),
};
