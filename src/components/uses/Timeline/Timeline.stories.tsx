import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Timeline from '../../ui/Timeline'; // Adjust paths accordingly
import TimelineItem from '../../ui/TimelineItem';

const meta: Meta<typeof Timeline> = {
  title: 'Components/ui/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    // Optional: you can add controls if you want to enable interactive tweaking
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem
        color="primary"
        oppositeContent="09:00 AM"
        dotContent="🚀"
        connector="solid"
      >
        Project kickoff meeting with the team to align goals and milestones.
      </TimelineItem>
      <TimelineItem
        color="success"
        oppositeContent="12:00 PM"
        dotContent="📝"
        connector="dashed"
      >
        Draft initial design concepts and wireframes.
      </TimelineItem>
      <TimelineItem
        color="warning"
        oppositeContent="03:00 PM"
        dotContent="⚠️"
        connector="solid"
      >
        Review feedback from stakeholders and prioritize changes.
      </TimelineItem>
      <TimelineItem
        color="error"
        oppositeContent="05:00 PM"
        dotContent="❌"
        connector="none"
      >
        Finalize report and submit to management.
      </TimelineItem>
    </Timeline>
  ),
};

export const WithOppositeContentOnly: Story = {
  render: () => (
    <Timeline>
      <TimelineItem oppositeContent="Day 1" dotContent="🌟" connector="solid">
        Kickoff & brainstorming session.
      </TimelineItem>
      <TimelineItem oppositeContent="Day 2" dotContent="🔧" connector="solid" color="primary">
        Development sprint starts.
      </TimelineItem>
      <TimelineItem oppositeContent="Day 3" dotContent="🧪" connector="solid" color="success">
        Testing & quality assurance.
      </TimelineItem>
      <TimelineItem oppositeContent="Day 4" dotContent="🎉" connector="none" color="warning">
        Launch day celebration.
      </TimelineItem>
    </Timeline>
  ),
};

export const DotContentVariations: Story = {
  render: () => (
    <Timeline>
      <TimelineItem dotContent="✔️" color="success" connector="solid">
        Task completed successfully.
      </TimelineItem>
      <TimelineItem dotContent={<span style={{ fontWeight: 'bold' }}>!</span>} color="warning" connector="dashed">
        Important warning to check.
      </TimelineItem>
      <TimelineItem dotContent={<span>🚧</span>} color="error" connector="solid">
        Work in progress.
      </TimelineItem>
      <TimelineItem dotContent={<span>⏳</span>} connector="none">
        Awaiting approval.
      </TimelineItem>
    </Timeline>
  ),
};

export const CustomConnectorStyles: Story = {
  render: () => (
    <Timeline>
      <TimelineItem dotContent="1" color="primary" connector="solid">
        First step with solid connector.
      </TimelineItem>
      <TimelineItem dotContent="2" color="success" connector="dashed">
        Second step with dashed connector.
      </TimelineItem>
      <TimelineItem dotContent="3" color="warning" connector="none">
        Third step without connector.
      </TimelineItem>
    </Timeline>
  ),
};
