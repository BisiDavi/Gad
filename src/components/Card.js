import React from 'react'
import '../styles/Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgName} alt={props.alt} />
      <div className="card-details">
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default Card;
