import React from 'react';
import styled, { css } from 'styled-components';

type CardProps = {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined';
  elevation?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
  padding?: string;
  rounded?: string;
  fullWidth?: boolean;
  className?: string;
};

const getShadow = (elevation: NonNullable<CardProps['elevation']>) => {
  const shadows = {
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.12)',
    2: '0 2px 4px rgba(0,0,0,0.14)',
    3: '0 3px 6px rgba(0,0,0,0.16)',
    4: '0 4px 8px rgba(0,0,0,0.18)',
    6: '0 6px 12px rgba(0,0,0,0.20)',
    8: '0 8px 16px rgba(0,0,0,0.22)',
    12: '0 12px 24px rgba(0,0,0,0.24)',
    16: '0 16px 32px rgba(0,0,0,0.26)',
    24: '0 24px 48px rgba(0,0,0,0.30)',
  };
  return shadows[elevation] || shadows[1];
};

const StyledCard = styled.div<CardProps>`
  background-color: white;
  border-radius: ${(props) => props.rounded || '0.75rem'};
  padding: ${(props) => props.padding || '1rem'};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  transition: box-shadow 0.3s ease, border 0.3s ease;
  ${(props) =>
    props.variant === 'outlined'
      ? css`
          border: 1px solid #e0e0e0;
          box-shadow: none;
        `
      : css`
          border: none;
          box-shadow: ${getShadow(props.elevation || 1)};
        `}
`;

const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  elevation = 1,
  padding,
  rounded,
  fullWidth = false,
  className,
}) => {
  return (
    <StyledCard
      variant={variant}
      elevation={elevation}
      padding={padding}
      rounded={rounded}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
