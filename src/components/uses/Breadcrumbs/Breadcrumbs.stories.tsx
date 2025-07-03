import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Breadcrumbs from '../../ui/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/ui/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
    items: { control: false }, // complex prop, controlled in story
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const defaultItems = [
  { label: 'Home', href: '/', icon: <span role="img" aria-label="house">🏠</span> },
  { label: 'Category', href: '/category' },
  { label: 'Subcategory', href: '/category/subcategory' },
  { label: 'Current Page', current: true },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    separator: '/',
  },
};

export const CustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: '>',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/', icon: <span role="img" aria-label="dashboard">📊</span> },
      { label: 'Reports', href: '/reports', icon: <span role="img" aria-label="report">📄</span> },
      { label: '2025 Q2', current: true, icon: <span role="img" aria-label="calendar">📅</span> },
    ],
    separator: '→',
  },
};
