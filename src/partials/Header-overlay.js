import React from 'react';
import { TypingEffect } from '.';
import '../styles/HeaderOverlay.css';

let HeaderOverlay = () => {

  return (
    <div className="header-overlay">
      <TypingEffect />      
    </div>
  );
}

export default HeaderOverlay;