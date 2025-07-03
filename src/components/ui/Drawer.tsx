import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchor?: Anchor;
  width?: string;
  height?: string;
  showCloseIcon?: boolean;
  elevation?: number;
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const slideIn = {
  left: keyframes`from { transform: translateX(-100%); } to { transform: translateX(0); }`,
  right: keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`,
  top: keyframes`from { transform: translateY(-100%); } to { transform: translateY(0); }`,
  bottom: keyframes`from { transform: translateY(100%); } to { transform: translateY(0); }`,
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.3s ease;
  z-index: 998;
`;

const Wrapper = styled.div<{ anchor: Anchor }>`
  position: fixed;
  z-index: 999;
  ${(props) =>
    props.anchor === 'left' &&
    css`
      top: 0;
      left: 0;
      height: 100%;
    `}
  ${(props) =>
    props.anchor === 'right' &&
    css`
      top: 0;
      right: 0;
      height: 100%;
    `}
  ${(props) =>
    props.anchor === 'top' &&
    css`
      top: 0;
      left: 0;
      width: 100%;
    `}
  ${(props) =>
    props.anchor === 'bottom' &&
    css`
      bottom: 0;
      left: 0;
      width: 100%;
    `}
`;

const getElevation = (elevation = 12) => {
  const clamped = Math.min(Math.max(elevation, 0), 24);
  const base = 0.1 + clamped * 0.02;
  return `0 4px 20px rgba(0, 0, 0, ${base})`;
};

const Panel = styled.div<{
  anchor: Anchor;
  width?: string;
  height?: string;
  elevation: number;
}>`
  background: #fff;
  box-shadow: ${({ elevation }) => getElevation(elevation)};
  animation: ${({ anchor }) => slideIn[anchor]} 0.3s ease forwards;
  ${({ anchor, width, height }) =>
    anchor === 'left' || anchor === 'right'
      ? css`
          width: ${width || '300px'};
          height: 100%;
        `
      : css`
          height: ${height || '300px'};
          width: 100%;
        `}
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
`;

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  anchor = 'right',
  width,
  height,
  showCloseIcon = true,
  elevation = 12,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleKey);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper anchor={anchor}>
        <Panel anchor={anchor} width={width} height={height} elevation={elevation}>
          {showCloseIcon && <CloseButton onClick={onClose}>&times;</CloseButton>}
          {children}
        </Panel>
      </Wrapper>
    </>
  );
};

export default Drawer;
