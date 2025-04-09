import React from 'react';
import styled from 'styled-components';

type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  current?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4b5563;
`;

const Crumb = styled.span<{ isLink?: boolean; isCurrent?: boolean }>`
  display: inline-flex;
  align-items: center;
  font-weight: ${(p) => (p.isCurrent ? 600 : 400)};
  color: ${(p) => (p.isCurrent ? '#111827' : p.isLink ? '#2563eb' : '#4b5563')};
  cursor: ${(p) => (p.isLink ? 'pointer' : 'default')};

  &:hover {
    text-decoration: ${(p) => (p.isLink ? 'underline' : 'none')};
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: #9ca3af;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className
}) => {
  return (
    <Wrapper aria-label="breadcrumbs" className={className}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator>{separator}</Separator>}
          <Crumb
            isLink={!!item.href && !item.current}
            isCurrent={item.current}
            as={item.href && !item.current ? 'a' : 'span'}
            href={item.href}
          >
            {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
            {item.label}
          </Crumb>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs;
