import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Accordion from '../../ui/Accordion';

const meta: Meta<typeof Accordion.Wrapper> = {
  title: 'Components/ui/Accordion',
  component: Accordion.Wrapper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion.Wrapper>;

export const Basic: Story = {
  render: () => (
    <Accordion.Wrapper>
      <Accordion.Item title="Item 1">
        This is the content of Accordion Item 1.
      </Accordion.Item>
      <Accordion.Item title="Item 2" defaultOpen>
        This item is open by default.
      </Accordion.Item>
      <Accordion.Item title="Item 3" disabled>
        This item is disabled.
      </Accordion.Item>
    </Accordion.Wrapper>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <Accordion.Wrapper>
      <Accordion.Item
        title="Item with custom icons"
        iconOpen={<span>🔽</span>}
        iconClosed={<span>▶️</span>}
      >
        This item has custom open/close icons.
      </Accordion.Item>
    </Accordion.Wrapper>
  ),
};
