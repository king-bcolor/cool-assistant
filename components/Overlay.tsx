import React from 'react';

const overlayBaseStyle = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9998,
  backgroundColor: '#9786FA60',
  transition: 'all 0.1s ease-out',
};

export const Overlay = ({ style }) => (
  <div id="overlay" onClick={(e)=>{
    e.stopPropagation();
    e.preventDefault();
    console.log('click overlay');
    
  }} style={{ ...overlayBaseStyle, ...style }} />
);