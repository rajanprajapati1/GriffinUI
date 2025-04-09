import React from 'react';
import styled, { css } from 'styled-components';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'rounded' | 'square';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  shadow?: boolean;
  border?: boolean;
};

const sizeMap = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '56px',
  xl: '72px',
};

const borderRadiusMap = {
  circle: '50%',
  rounded: '12px',
  square: '0',
};

const StyledAvatar = styled.div<Required<Pick<AvatarProps, 'size' | 'variant'>>>`
  width: ${(props) => sizeMap[props.size]};
  height: ${(props) => sizeMap[props.size]};
  border-radius: ${(props) => borderRadiusMap[props.variant]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb;
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
  user-select: none;

  ${(props) =>
    props.variant === 'circle' &&
    css`
      font-size: 0.875rem;
    `}
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  variant = 'circle',
  children,
  icon,
  shadow,
  border,
}) => {
  return (
    <StyledAvatar
      size={size}
      variant={variant}
      style={{
        boxShadow: shadow ? '0 2px 6px rgba(0, 0, 0, 0.1)' : undefined,
        border: border ? '2px solid #d1d5db' : undefined,
      }}
    >
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </StyledAvatar>
  );
};

export default Avatar;
