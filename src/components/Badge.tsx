import React from 'react';
import styled, { css } from 'styled-components';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};

const getColorStyles = (color: BadgeProps['color']) => {
  switch (color) {
    case 'success':
      return css`
        background-color: #bbf7d0;
        color: #065f46;
      `;
    case 'warning':
      return css`
        background-color: #fef08a;
        color: #92400e;
      `;
    case 'error':
      return css`
        background-color: #fecaca;
        color: #991b1b;
      `;
    default:
      return css`
        background-color: #e5e7eb;
        color: #374151;
      `;
  }
};

const getSizeStyles = (size: BadgeProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 0.75rem;
        padding: 0.125rem 0.5rem;
      `;
    case 'lg':
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
    default:
      return css`
        font-size: 0.875rem;
        padding: 0.25rem 0.75rem;
      `;
  }
};

const StyledBadge = styled.span<Required<Pick<BadgeProps, 'color' | 'size'>>>`
  display: inline-block;
  border-radius: 9999px;
  font-weight: 600;
  ${(props) => getColorStyles(props.color)}
  ${(props) => getSizeStyles(props.size)}
`;

const Badge: React.FC<BadgeProps> = ({ children, color = 'default', size = 'md' }) => {
  return (
    <StyledBadge color={color} size={size}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
