import React from 'react';
import styled, { keyframes } from 'styled-components';

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  radius?: string | number; // 👈 NOT "rounded"
  rounded?: boolean;
};

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonBox = styled.div<SkeletonProps>`
  display: inline-block;
  background-color: #e5e7eb;
  border-radius: ${({ radius, rounded }) => {
    if (rounded) return '9999px';
    if (typeof radius === 'number') return `${radius}px`;
    return radius || '4px';
  }};
  width: ${({ width = '100%' }) => typeof width === 'number' ? `${width}px` : width};
  height: ${({ height = '1rem' }) => typeof height === 'number' ? `${height}px` : height};
  background-image: linear-gradient(
    90deg,
    #e5e7eb 0px,
    #f3f4f6 40px,
    #e5e7eb 80px
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <SkeletonBox {...props} />;
};

export default Skeleton;
