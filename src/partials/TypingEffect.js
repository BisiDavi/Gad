import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const TypingEffect = () => {
  return (
    <div className="text-overlay">
      <h1>
        Hire a Professional
        <span className="text-spell">
          <ReactTypingEffect
            text={[" Event Planner ", " Electrician ", " Photographer ", " Technician ", " Makeup ", " Fashion Designer ", " Home decor ", " Hair Stylist "]}
          />
        </span>
       Now.
      </h1>
    </div>
  )
};

export default TypingEffect;