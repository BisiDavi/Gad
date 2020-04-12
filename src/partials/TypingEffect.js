import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const TypingEffect = () => {
  return (
    <div className="text-overlay">
      <h1>
        Hire a Professional
        <span className="text-spell">
          <ReactTypingEffect
            text={[" Welder ", " Electrician ", " Carpenter ", " Technician ", " Painter ", " Fashion Designer ", " Brick-layer ", " Hair Dresser "]}
          />
        </span>
       Now.
      </h1>
    </div>
  )
};

export default TypingEffect;