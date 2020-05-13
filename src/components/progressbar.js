import React from 'react';
import '../styles/progressbar.css';

const Progressbar = () => {
  return (
    <div className="container">
      <div className="hiremodal">
        <div className="mymodal-header"></div>
        <div className="title">
          <h1>Book A Professional</h1>
          <p>Kindly assist us with your details, to enable us get to you !</p>
        </div>
        <div className="process-icon">
          <ul className="progressbar">
            <li className="active"><i className="fa fa-wrench" aria-hidden="true"></i></li>
            <li><i className="fa fa-map-marker" aria-hidden="true"></i></li>
            <li><i className="fa fa-user" aria-hidden="true"></i></li>
            <li><i className="fa fa-check" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Progressbar; 