import React from 'react';
import '../styles/imgcard.css';
import { Link } from 'react-router-dom';

const ImgCard = (props) => {
  return (
    <div className="example-1 card">
      <div className="wrapper">
        <img src={props.imgsrc} alt={props.imgalt} />
        <div className="data">
          <div className="content">
            <span className="author">Share</span>
            <Link to={props.linkartisan}>
              <h1 className="title">
                {props.name}
              </h1>
            </Link>
            <p></p>
            <label htmlFor="show-menu" className="menu-button"><span></span></label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul className="menu-content">
            <li>
              <a href="#fb">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#tweet">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#whatsapp">
                <i className="fa fa-whatsapp-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImgCard;