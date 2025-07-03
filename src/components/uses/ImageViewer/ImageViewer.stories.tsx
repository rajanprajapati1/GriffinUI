import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ImageViewer from '../../ui/ImageViewer'; // Adjust the import path if needed

const meta: Meta<typeof ImageViewer> = {
  title: 'Components/ui/ImageViewer',
  component: ImageViewer,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ImageViewer>;

const defaultImage = 'https://picsum.photos/id/1011/600/400';

export const Default: Story = {
  args: {
    src: defaultImage,
    alt: 'Beautiful landscape',
  },
};

export const CustomSize: Story = {
  args: {
    src: defaultImage,
    alt: 'Custom sized image',
    width: '300px',
    height: '200px',
  },
};

export const WithBorderRadius: Story = {
  args: {
    src: defaultImage,
    alt: 'Rounded corners image',
    width: '250px',
    height: '180px',
    borderRadius: '16px',
  },
};

export const FullScreenBehavior: Story = {
  args: {
    src: defaultImage,
    alt: 'Click to view fullscreen',
    width: '100%',
    height: 'auto',
  },
};
