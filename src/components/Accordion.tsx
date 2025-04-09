import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  iconOpen?: React.ReactNode;
  iconClosed?: React.ReactNode;
};

type StyledProps = {
  isOpen: boolean;
  disabled?: boolean;
};

const AccordionWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

const Item = styled.div`
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

const Header = styled.button<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  background: #fff;
  color: #111827;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: none;
  outline: none;
`;

const Arrow = styled.span<StyledProps>`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: ${(props) => (props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
  transition: transform 0.3s ease;
`;

const Content = styled.div<StyledProps>`
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? '1rem' : '0 1rem')};
  transition: all 0.3s ease;
  font-size: 0.95rem;
  color: #4b5563;
`;

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  iconOpen,
  iconClosed,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    if (iconOpen && iconClosed) {
      return isOpen ? iconOpen : iconClosed;
    }
    return <Arrow isOpen={isOpen} />;
  };

  return (
    <Item>
      <Header onClick={toggleOpen} isOpen={isOpen} disabled={disabled}>
        {title}
        {renderIcon()}
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </Item>
  );
};

const Accordion = {
  Item: AccordionItem,
  Wrapper: AccordionWrapper,
};

export default Accordion;
