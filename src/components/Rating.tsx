import React, { useState } from 'react';
import styled from 'styled-components';

type RatingProps = {
  value?: number;
  defaultValue?: number;
  max?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  size?: number;
};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const IconWrapper = styled.span<{ filled: boolean; size: number }>`
  display: inline-flex;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ filled }) => (filled ? '#facc15' : '#e5e7eb')};
    transition: fill 0.2s ease;
  }
`;

const DefaultIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Rating: React.FC<RatingProps> = ({
  value,
  defaultValue = 0,
  max = 5,
  readOnly = false,
  onChange,
  icon = DefaultIcon,
  emptyIcon = DefaultIcon,
  size = 24,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;

  const getValue = () => (isControlled ? value! : internalValue);

  const handleClick = (index: number) => {
    if (readOnly) return;
    if (!isControlled) setInternalValue(index + 1);
    onChange?.(index + 1);
  };

  return (
    <Wrapper>
      {Array.from({ length: max }).map((_, i) => {
        const filled = hovered !== null ? i < hovered + 1 : i < getValue();
        return (
          <IconWrapper
            key={i}
            filled={filled}
            size={size}
            onClick={() => handleClick(i)}
            onMouseEnter={() => !readOnly && setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {filled ? icon : emptyIcon}
          </IconWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Rating;
