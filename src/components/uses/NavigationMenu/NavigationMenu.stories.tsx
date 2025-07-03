import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

// 🔁 Importing directly from main file
import NavigationMenu from '../../New/NavigationMenu'

type Story = StoryObj<typeof NavigationMenu.Root>

const meta: Meta<typeof NavigationMenu.Root> = {
  title: 'Components/New/NavigationMenu',
  component: NavigationMenu.Root,
  tags: ['autodocs'],
}

export default meta

// Basic Horizontal Menu
export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="home">
            <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Dashboard</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Analytics</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="products">
            <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">All Products</NavigationMenu.Link>
              <NavigationMenu.Link href="#">New Arrivals</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="about">
            <NavigationMenu.Trigger>About</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Our Story</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Team</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  ),
}

// With Active Link Highlight
export const WithActiveLink: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="dashboard">
            <NavigationMenu.Link active={true} href="#">
              Dashboard
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="settings">
            <NavigationMenu.Link href="#">Settings</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="profile">
            <NavigationMenu.Link href="#">Profile</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  ),
}

// With Dropdown Submenus
export const WithDropdowns: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="docs">
            <NavigationMenu.Trigger>Documentation</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Getting Started</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Guides</NavigationMenu.Link>
              <NavigationMenu.Link href="#">API Reference</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="support">
            <NavigationMenu.Trigger>Support</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">FAQ</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="account">
            <NavigationMenu.Trigger>Account</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Profile</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Billing</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Logout</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  ),
}

// Full Header Example
export const FullHeaderExample: Story = {
  render: () => (
    <div style={{ padding: '1rem', background: '#f9fafb' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="home">
            <NavigationMenu.Link active href="#">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="features">
            <NavigationMenu.Trigger>Features</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Enterprise</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="company">
            <NavigationMenu.Trigger>Company</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">About Us</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Careers</NavigationMenu.Link>
              <NavigationMenu.Link href="#">News</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="contact">
            <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  ),
}

// Minimal Topbar with No Indicator
export const MinimalTopBar: Story = {
  render: () => (
    <div style={{ padding: '0.5rem 1rem', background: '#ffffff', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="home">
            <NavigationMenu.Link active href="#">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="services">
            <NavigationMenu.Trigger>Services</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Consulting</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Development</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="contact">
            <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  ),
}

// Fully Customized Example
export const FullCustomExample: Story = {
  render: () => (
    <div style={{ padding: '1rem 2rem', background: '#ffffff', borderRadius: '0.5rem', margin: '2rem auto', maxWidth: '800px' }}>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item value="dashboard">
            <NavigationMenu.Link active href="#">
              Dashboard
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="projects">
            <NavigationMenu.Trigger>Projects</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">All Projects</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Create New</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="team">
            <NavigationMenu.Trigger>Team</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Members</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Invite</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="settings">
            <NavigationMenu.Trigger>Settings</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">Preferences</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Integrations</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Security</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item value="help">
            <NavigationMenu.Trigger>Help</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="#">FAQ</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Support</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </div>
  ),
}