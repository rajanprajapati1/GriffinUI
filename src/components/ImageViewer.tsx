import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ImageViewerProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
};

const Thumbnail = styled.img<{ width?: string; height?: string; borderRadius?: string }>`
  width: ${(p) => p.width || '100%'};
  height: ${(p) => p.height || 'auto'};
  object-fit: cover;
  border-radius: ${(p) => p.borderRadius || '8px'};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10000;

  &:hover {
    opacity: 0.8;
  }
`;

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt = '', width, height, borderRadius }) => {
  const [open, setOpen] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <Thumbnail
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        onClick={() => setOpen(true)}
      />
      {open && (
        <FullscreenOverlay onClick={() => setOpen(false)}>
          <CloseButton onClick={() => setOpen(false)}>&times;</CloseButton>
          <FullscreenImage src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
        </FullscreenOverlay>
      )}
    </>
  );
};

export default ImageViewer;
