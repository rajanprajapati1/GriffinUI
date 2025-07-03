import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FlashView from '../../ui/FlashView'; // Adjust the import path if needed

const meta: Meta<typeof FlashView> = {
  title: 'Components/ui/FlashView',
  component: FlashView,
  tags: ['autodocs'],
  argTypes: {
    hoverEffect: {
      control: 'select',
      options: ['fade', 'zoom'],
    },
    variant: {
      control: 'select',
      options: ['rounded', 'square', 'circle'],
    },
    previewType: {
      control: 'select',
      options: ['image', 'video'],
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    aspectRatio: {
      control: 'text',
    },
    borderColor: {
      control: 'color',
    },
    showPlayIcon: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FlashView>;

export const ImagePreview: Story = {
  args: {
    baseSrc: 'https://picsum.photos/id/237/400/300',
    previewSrc: 'https://picsum.photos/id/238/400/300',
    alt: 'Sample Image',
    hoverEffect: 'fade',
    variant: 'rounded',
    elevation: 6,
    aspectRatio: '4/3',
    borderColor: '#3b82f6',
  },
};

export const ZoomPreview: Story = {
  args: {
    baseSrc: 'https://picsum.photos/id/239/400/300',
    previewSrc: 'https://picsum.photos/id/240/400/300',
    alt: 'Zoom Image',
    hoverEffect: 'zoom',
    variant: 'square',
    elevation: 12,
    aspectRatio: '16/9',
  },
};

export const VideoPreview: Story = {
  args: {
    baseSrc: 'https://picsum.photos/id/241/400/300',
    previewSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    previewType: 'video',
    alt: 'Video Preview',
    hoverEffect: 'fade',
    variant: 'rounded',
    showPlayIcon: true,
    elevation: 10,
  },
};

export const CircleVariant: Story = {
  args: {
    baseSrc: 'https://picsum.photos/id/242/400/400',
    previewSrc: 'https://picsum.photos/id/243/400/400',
    alt: 'Circular Image',
    hoverEffect: 'fade',
    variant: 'circle',
    aspectRatio: '1/1',
    elevation: 4,
  },
};
