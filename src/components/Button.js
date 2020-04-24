import React from 'react';
import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

let Button = (props) => {
  return (
    <div className="button">
      <Link to={props.linkto}>
        <button className="btn">
          {props.name}
        </button>
      </Link>
    </div>
  )
}


export default Button;