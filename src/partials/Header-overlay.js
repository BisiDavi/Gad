import React from 'react';
import Button from '../components/Button';
import TypingEffect from './TypingEffect'
import '../styles/HeaderOverlay.css';

let HeaderOverlay = () => {

  return (
    <div className="header-overlay">
      <TypingEffect />
      <div className="button-overlay">
        <Button name="Book a Service" />
        <Button name="Become a GadPro" />
        <Button name="Refer an Artisan" />
      </div>
    </div>
  );
}

export default HeaderOverlay;