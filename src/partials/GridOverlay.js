import React from 'react';
import ImageGrid from './ImageGrid';
import HeaderOverlay from './Header-overlay';
import '../styles/GridOverlay.css';

let GridOverlay = () => {
  return (
    <div className='gridoverlay'>
      <ImageGrid />
      <HeaderOverlay />
    </div>
  );
}

export default GridOverlay;