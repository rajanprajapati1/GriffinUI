import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Tabs from '../../ui/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/ui/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabItems = [
  {
    label: 'Home',
    value: 'home',
    content: <div className="text-gray-700">Welcome to the Home tab!</div>,
  },
  {
    label: 'Profile',
    value: 'profile',
    content: <div className="text-gray-700">Here is your profile info.</div>,
  },
  {
    label: 'Settings',
    value: 'settings',
    content: <div className="text-gray-700">Adjust your settings here.</div>,
  },
];

export const Default: Story = {
  args: {
    tabs: tabItems,
    defaultValue: 'home',
  },
};
