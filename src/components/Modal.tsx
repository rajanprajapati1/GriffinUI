import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  elevation?: number; // 0–24 like MUI
  width?: string;
  maxWidth?: string;
  fullWidth?: boolean;
  centered?: boolean;
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease;
  z-index: 999;
`;

const getElevation = (elevation = 1) => {
  const clamped = Math.min(Math.max(elevation, 0), 24);
  const base = 0.1 + clamped * 0.02;
  return `0 4px 20px rgba(0, 0, 0, ${base})`;
};

const ModalWrapper = styled.div<{ centered?: boolean }>`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  padding: 2rem;
  overflow: auto;
`;

const ModalContainer = styled.div<{
  elevation: number;
  width?: string;
  maxWidth?: string;
  fullWidth?: boolean;
}>`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ elevation }) => getElevation(elevation)};
  animation: ${scaleIn} 0.25s ease;
  width: ${({ fullWidth, width }) => (fullWidth ? '100%' : width || 'auto')};
  max-width: ${({ maxWidth }) => maxWidth || '600px'};
  margin-top: 5rem;
`;

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  elevation = 12,
  fullWidth,
  width,
  maxWidth,
  centered = true,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!disableBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!disableEscapeKeyDown && e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, disableEscapeKeyDown, onClose]);

  if (!open) return null;

  return (
    <>
      <Backdrop />
      <ModalWrapper centered={centered} onClick={handleBackdropClick}>
        <ModalContainer
          elevation={elevation}
          width={width}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
        >
          {children}
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

export default Modal;
