import React from 'react';
import '../../styles/card.css';

const Card = (props) => {
  return (
    <div className="artisancard">
      <div className="imgbanner">
        <img src={props.imgsrc} alt={props.altname} />
      </div>
      <div className="text">
        <div className="profile">
          <div className="imgprofile">
            <img src={props.imgsrc} alt={props.altname} />
          </div>
          <div className="username">
            <h3>{props.username}</h3>
            <p>{props.location}</p>
          </div>
          <div className="hireme">
            <button>Hire me</button>
          </div>
        </div>
      </div>
      <div className="user-description">
        <p className="description">{props.description}</p>
        <p className="status">{props.status}</p>
      </div>
    </div>
  )
}

export default Card;