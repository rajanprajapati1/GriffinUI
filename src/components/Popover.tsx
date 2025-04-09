import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

type Placement = 'top' | 'bottom' | 'left' | 'right';

type PopoverProps = {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  children: React.ReactNode;
  offset?: number;
  withArrow?: boolean;
  elevation?: number;
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 998;
  background: transparent;
`;

const PopoverContainer = styled.div<{
  top: number;
  left: number;
  elevation: number;
}>`
  position: absolute;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  z-index: 999;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, ${(p) => p.elevation * 0.02});
  border-radius: 8px;
  padding: 0.75rem 1rem;
  min-width: 200px;
`;

const Popover: React.FC<PopoverProps> = ({
  open,
  onClose,
  anchorRef,
  placement = 'bottom',
  children,
  offset = 8,
  withArrow = false,
  elevation = 12,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ top: 0, left: 0 });

  useEffect(() => {
    const calculatePosition = () => {
      const anchor = anchorRef.current;
      const popover = popoverRef.current;
      if (anchor && popover) {
        const anchorRect = anchor.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (placement) {
          case 'top':
            top = anchorRect.top - popoverRect.height - offset;
            left = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
            break;
          case 'bottom':
            top = anchorRect.bottom + offset;
            left = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
            break;
          case 'left':
            top = anchorRect.top + (anchorRect.height - popoverRect.height) / 2;
            left = anchorRect.left - popoverRect.width - offset;
            break;
          case 'right':
            top = anchorRect.top + (anchorRect.height - popoverRect.height) / 2;
            left = anchorRect.right + offset;
            break;
        }

        setCoords({ top, left });
      }
    };

    if (open) {
      calculatePosition();
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);
    }

    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [open, anchorRef, placement, offset]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <PopoverContainer ref={popoverRef} top={coords.top} left={coords.left} elevation={elevation}>
        {children}
      </PopoverContainer>
    </>
  );
};

export default Popover;
