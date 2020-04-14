import React from 'react';
import { ImageGrid, HeaderOverlay } from '.';
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