import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Textura from '../../ui/Textura'; // Adjust path as needed

const meta: Meta<typeof Textura> = {
  title: 'Components/ui/Textura',
  component: Textura,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'subtitle1', 'subtitle2',
        'body1', 'body2',
        'caption', 'overline',
      ],
    },
    align: {
      control: 'radio',
      options: ['left', 'right', 'center', 'justify', 'inherit'],
    },
    gutterBottom: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    color: { control: 'color' },
    children: { control: 'text' },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  args: {
    variant: 'body1',
    align: 'inherit',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    color: 'inherit',
    children: 'The quick brown fox jumps over the lazy dog.',
    as: 'p',
  },
};

export default meta;
type Story = StoryObj<typeof Textura>;

export const Default: Story = {};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Textura variant="h1">Heading 1 - h1</Textura>
      <Textura variant="h2">Heading 2 - h2</Textura>
      <Textura variant="h3">Heading 3 - h3</Textura>
      <Textura variant="h4">Heading 4 - h4</Textura>
      <Textura variant="h5">Heading 5 - h5</Textura>
      <Textura variant="h6">Heading 6 - h6</Textura>
    </div>
  ),
};

export const VariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 500 }}>
      <Textura variant="subtitle1">Subtitle 1</Textura>
      <Textura variant="subtitle2">Subtitle 2</Textura>
      <Textura variant="body1">Body 1 - default body text</Textura>
      <Textura variant="body2">Body 2 - smaller body text</Textura>
      <Textura variant="caption">Caption text</Textura>
      <Textura variant="overline">Overline text</Textura>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <Textura align="left" gutterBottom>
        Left aligned text
      </Textura>
      <Textura align="center" gutterBottom>
        Center aligned text
      </Textura>
      <Textura align="right" gutterBottom>
        Right aligned text
      </Textura>
      <Textura align="justify" gutterBottom>
        Justified text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vulputate.
      </Textura>
    </div>
  ),
};

export const NoWrapAndParagraph: Story = {
  render: () => (
    <>
      <Textura noWrap style={{ maxWidth: 200, border: '1px solid #ddd', padding: '0.5rem' }}>
        This is a very long text that will not wrap but instead show an ellipsis at the end
      </Textura>
      <Textura paragraph>
        This text is a paragraph with margin-bottom applied. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </Textura>
    </>
  ),
};

export const CustomColors: Story = {
  args: {
    variant: 'h4',
    children: 'Colored text',
    color: '#6366f1', // Indigo
  },
};
