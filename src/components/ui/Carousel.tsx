import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type CarouselProps = {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  transitionDuration?: number;
  width?: string;
  height?: string;
};

const CarouselWrapper = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

const SlideContainer = styled.div<{ currentIndex: number; transitionDuration: number }>`
  display: flex;
  transition: transform ${(props) => props.transitionDuration}ms ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
`;

const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? '#111827' : '#d1d5db')};
  cursor: pointer;
`;

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = true,
  loop = true,
  transitionDuration = 500,
  width = '100%',
  height = '300px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const totalSlides = children.length;

  const nextSlide = () => {
    if (currentIndex === totalSlides - 1) {
      setCurrentIndex(loop ? 0 : currentIndex);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(loop ? totalSlides - 1 : currentIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, autoPlay, interval]);

  return (
    <CarouselWrapper width={width} height={height}>
      {showArrows && (
        <>
          <Arrow direction="left" onClick={prevSlide}>
            &#8592;
          </Arrow>
          <Arrow direction="right" onClick={nextSlide}>
            &#8594;
          </Arrow>
        </>
      )}

      <SlideContainer currentIndex={currentIndex} transitionDuration={transitionDuration}>
        {children.map((child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </SlideContainer>

      {showDots && (
        <DotContainer>
          {children.map((_, index) => (
            <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
          ))}
        </DotContainer>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
