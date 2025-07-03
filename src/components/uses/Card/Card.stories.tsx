import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from '../../ui/Card';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 0.75rem 0.75rem 0 0;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const meta: Meta<typeof Card> = {
  title: 'Components/ui/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['elevated', 'outlined'] },
    elevation: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 6, 8, 12, 16, 24],
    },
    padding: { control: 'text' },
    rounded: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const ImageCard: Story = {
  args: {
    children: (
      <>
        <Img src="https://picsum.photos/seed/picsum/200/300" alt="Nature" />
        <CardContent>
          <h3>Beautiful Nature</h3>
          <p>Experience the serene beauty of untouched landscapes.</p>
          <Button>Explore</Button>
        </CardContent>
      </>
    ),
    variant: 'elevated',
    elevation: 4,
    padding: '0',
    rounded: '1rem',
    fullWidth: false,
  },
};

export const OutlinedActionCard: Story = {
  args: {
    children: (
      <CardContent>
        <h3>Upgrade Your Plan</h3>
        <p>Get more features and priority support with our premium plan.</p>
        <Button>Upgrade Now</Button>
      </CardContent>
    ),
    variant: 'outlined',
    elevation: 0,
    padding: '1.5rem',
    rounded: '0.75rem',
    fullWidth: false,
  },
};

export const FullWidthElevatedCard: Story = {
  args: {
    children: (
      <CardContent>
        <h3>Welcome Back!</h3>
        <p>Your dashboard is ready to explore.</p>
        <Button>Go to Dashboard</Button>
      </CardContent>
    ),
    variant: 'elevated',
    elevation: 12,
    padding: '2rem',
    rounded: '1rem',
    fullWidth: true,
  },
};
