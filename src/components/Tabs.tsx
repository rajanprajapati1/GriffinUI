import React, { useState } from 'react';
import styled from 'styled-components';

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultValue?: string;
};

const TabsWrapper = styled.div`
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #e5e7eb;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ active }) => (active ? '#6366f1' : 'transparent')};
  color: ${({ active }) => (active ? '#4338ca' : '#6b7280')};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ active }) => (active ? '#4338ca' : '#374151')};
  }
`;

const TabPanel = styled.div`
  padding: 1rem 0;
`;

const Tabs: React.FC<TabsProps> = ({ tabs, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  return (
    <TabsWrapper>
      <TabList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            active={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>

      <TabPanel>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </TabPanel>
    </TabsWrapper>
  );
};

export default Tabs;
