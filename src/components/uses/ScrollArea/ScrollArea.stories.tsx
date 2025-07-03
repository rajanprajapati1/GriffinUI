import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// 🔁 Importing directly from main file
import ScrollArea from '../../New/ScrollArea'
import styled from 'styled-components'

type Story = StoryObj<typeof ScrollArea>

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/New/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['auto', 'always', 'scroll', 'hover'],
      },
      defaultValue: 'hover',
    },
    orientation: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal', 'both'],
      },
      defaultValue: 'vertical',
    },
    scrollbarSize: {
      control: { type: 'number' },
      defaultValue: 8,
    },
    scrollbarRadius: {
      control: { type: 'number' },
      defaultValue: 4,
    },
  },
}

export default meta

// Vertical Scroll Example
export const VerticalScroll: Story = {
  args: {
    type: 'hover',
    orientation: 'vertical',
    scrollbarSize: 8,
    scrollbarRadius: 4,
  },
  render: (args) => (
    <div style={{ width: '300px', height: '200px', margin: '2rem auto' }}>
      <ScrollArea {...args}>
        <Content>
          <p>This is scrollable content.</p>
          <p>Scroll vertically to see the hidden scrollbar.</p>
          <p>It appears on hover and fades out after a short delay.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Content>
      </ScrollArea>
    </div>
  ),
}

// Horizontal Scroll Example
export const HorizontalScroll: Story = {
  args: {
    type: 'always',
    orientation: 'horizontal',
    scrollbarSize: 8,
    scrollbarRadius: 4,
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', whiteSpace: 'nowrap' }}>
      <ScrollArea {...args}>
        <HorizontalContent>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
          <Item>Item 7</Item>
          <Item>Item 8</Item>
        </HorizontalContent>
      </ScrollArea>
    </div>
  ),
}


const Content = styled.div`
  padding: 1rem;
  line-height: 1.5;
`

const HorizontalContent = styled.div`
  display: inline-flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`

const Item = styled.div`
  min-width: 150px;
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
  text-align: center;
  flex-shrink: 0;
`