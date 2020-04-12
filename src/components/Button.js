import React from 'react';
import '../styles/Buttons.css';

let Button = ( props) => {
  return (
    <div className="button">
      <button className="btn">{props.name}</button>
    </div>
  )
}


export default Button;