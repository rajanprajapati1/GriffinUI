import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Carousel from '../../ui/Carousel'; // Adjust path if needed

const meta: Meta<typeof Carousel> = {
  title: 'Components/ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
    showDots: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    loop: { control: 'boolean' },
    transitionDuration: { control: 'number' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// Use these images from Picsum.photos with different seeds for variety
const slides = [
  <img
    src="https://picsum.photos/seed/1/600/300"
    alt="Slide 1"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    src="https://picsum.photos/seed/2/600/300"
    alt="Slide 2"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    src="https://picsum.photos/seed/3/600/300"
    alt="Slide 3"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
];

export const Default: Story = {
  args: {
    children: slides,
    autoPlay: true,
    interval: 3000,
    showDots: true,
    showArrows: true,
    loop: true,
    transitionDuration: 500,
    width: '600px',
    height: '300px',
  },
};

export const NoAutoPlay: Story = {
  args: {
    ...Default.args,
    autoPlay: false,
  },
};

export const NoArrows: Story = {
  args: {
    ...Default.args,
    showArrows: false,
  },
};

export const NoDots: Story = {
  args: {
    ...Default.args,
    showDots: false,
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    width: '800px',
    height: '400px',
  },
};

export const NoLoop: Story = {
  args: {
    ...Default.args,
    loop: false,
  },
};
