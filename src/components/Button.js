import React from 'react';
import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

let Button = (props) => {
  return (
    <div>
      <Link to={props.linkto} className="btn btn-1">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {props.name}
      </Link>
    </div>
  )
}




export default Button;