import React from 'react';
import styled, { css } from 'styled-components';

type FlashViewProps = {
  baseSrc: string;
  previewSrc?: string;
  previewType?: 'image' | 'video';
  alt?: string;
  hoverEffect?: 'fade' | 'zoom';
  variant?: 'rounded' | 'square' | 'circle';
  elevation?: number;
  aspectRatio?: string;
  borderColor?: string;
  showPlayIcon?: boolean;
};

const getBorderRadius = (variant: FlashViewProps['variant']) => {
  switch (variant) {
    case 'circle':
      return '50%';
    case 'rounded':
      return '12px';
    default:
      return '0px';
  }
};

const getHoverEffect = (effect: FlashViewProps['hoverEffect']) => {
  switch (effect) {
    case 'zoom':
      return css`
        transform: scale(1.05);
      `;
    case 'fade':
    default:
      return css`
        opacity: 1;
      `;
  }
};

const Wrapper = styled.div<{
  borderRadius: string;
  aspectRatio?: string;
  elevation: number;
  borderColor?: string;
}>`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => p.borderRadius};
  aspect-ratio: ${(p) => p.aspectRatio || '16/9'};
  box-shadow: ${(p) =>
    p.elevation ? `0px ${p.elevation}px ${p.elevation * 2}px rgba(0,0,0,0.1)` : 'none'};
  border: ${(p) => (p.borderColor ? `1px solid ${p.borderColor}` : 'none')};
`;

const BaseMedia = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PreviewOverlay = styled.div<{
  effect: FlashViewProps['hoverEffect'];
}>`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;

  ${Wrapper}:hover & {
    ${(p) => getHoverEffect(p.effect)}
  }
`;

const PreviewMedia = styled.div`
  width: 100%;
  height: 100%;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayIconOverlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  pointer-events: none;
  opacity: 0.8;
`;

const FlashView: React.FC<FlashViewProps> = ({
  baseSrc,
  previewSrc,
  previewType = 'image',
  alt = '',
  hoverEffect = 'fade',
  variant = 'rounded',
  elevation = 4,
  aspectRatio = '16/9',
  borderColor,
  showPlayIcon = true,
}) => {
  const showPreview = Boolean(previewSrc);

  return (
    <Wrapper
      borderRadius={getBorderRadius(variant)}
      elevation={elevation}
      aspectRatio={aspectRatio}
      borderColor={borderColor}
    >
      <BaseMedia src={baseSrc} alt={alt} />
      {showPreview && (
        <PreviewOverlay effect={hoverEffect}>
          <PreviewMedia>
            {previewType === 'video' ? (
              <video src={previewSrc} muted loop autoPlay />
            ) : (
              <img src={previewSrc} alt={alt + ' preview'} />
            )}
          </PreviewMedia>
        </PreviewOverlay>
      )}
      {showPreview && previewType === 'video' && showPlayIcon && (
        <PlayIconOverlay>
          ▶
        </PlayIconOverlay>
      )}
    </Wrapper>
  );
};

export default FlashView;
