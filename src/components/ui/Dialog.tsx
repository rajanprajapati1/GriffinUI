import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  fullWidth?: boolean;
  maxWidth?: string;
  elevation?: number;
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease;
  z-index: 999;
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const getElevation = (elevation = 12) => {
  const clamped = Math.min(Math.max(elevation, 0), 24);
  const base = 0.1 + clamped * 0.02;
  return `0 4px 20px rgba(0, 0, 0, ${base})`;
};

const DialogBox = styled.div<{
  fullWidth?: boolean;
  maxWidth?: string;
  elevation: number;
}>`
  background: #fff;
  border-radius: 12px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  max-width: ${({ maxWidth }) => maxWidth || '500px'};
  padding: 1.5rem;
  box-shadow: ${({ elevation }) => getElevation(elevation)};
  animation: ${scaleIn} 0.25s ease;
`;

export const DialogTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const DialogContent = styled.div`
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  fullWidth,
  maxWidth,
  elevation = 12,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!disableBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!disableEscapeKeyDown && e.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose, disableEscapeKeyDown]);

  if (!open) return null;

  return (
    <>
      <Backdrop />
      <Wrapper onClick={handleBackdropClick}>
        <DialogBox fullWidth={fullWidth} maxWidth={maxWidth} elevation={elevation}>
          {children}
        </DialogBox>
      </Wrapper>
    </>
  );
};

export default Dialog;
