import React from 'react';
import { Overlay } from './Overlay';
import { Menu } from './Menu';
import { useOverlay } from '~hooks/useOverlay';

export const OverlayLayer = () => {
  const { overlayStyle, menuStyle, targetInfo } = useOverlay();

  return (
    <>
      <Overlay style={overlayStyle} />
      <Menu style={menuStyle} targetInfo={targetInfo} />
    </>
  );
};