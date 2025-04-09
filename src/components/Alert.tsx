import React from 'react';
import styled, { css } from 'styled-components';

type AlertProps = {
  type?: 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined' | 'standard';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  icon?: React.ReactNode;
};

const typeStyles = {
  success: {
    bg: '#d1fae5',
    color: '#065f46',
    border: '#10b981',
  },
  info: {
    bg: '#dbeafe',
    color: '#1e3a8a',
    border: '#3b82f6',
  },
  warning: {
    bg: '#fef3c7',
    color: '#92400e',
    border: '#f59e0b',
  },
  error: {
    bg: '#fee2e2',
    color: '#991b1b',
    border: '#ef4444',
  },
};

const getAlertStyles = (type: keyof typeof typeStyles, variant: AlertProps['variant']) => {
  const t = typeStyles[type];
  switch (variant) {
    case 'filled':
      return css`
        background-color: ${t.bg};
        color: ${t.color};
        border: none;
      `;
    case 'outlined':
      return css`
        background-color: transparent;
        color: ${t.color};
        border: 1px solid ${t.border};
      `;
    default:
      return css`
        background-color: #f9fafb;
        color: ${t.color};
        border-left: 4px solid ${t.border};
      `;
  }
};

const AlertWrapper = styled.div<Required<Pick<AlertProps, 'type' | 'variant'>>>`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  position: relative;
  gap: 0.75rem;
  ${(props) => getAlertStyles(props.type, props.variant)}
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
`;

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  variant = 'standard',
  title,
  children,
  onClose,
  icon,
}) => {
  return (
    <AlertWrapper type={type} variant={variant}>
      {icon && <span>{icon}</span>}
      <div>
        {title && <Title>{title}</Title>}
        <div>{children}</div>
      </div>
      {onClose && <CloseButton onClick={onClose}>&times;</CloseButton>}
    </AlertWrapper>
  );
};

export default Alert;
