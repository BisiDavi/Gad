import React from 'react';
import '../styles/progressbar.css';

// progressicon = () => {
//   const 
// }

const Progressbar = () => {
  return (
    <div className="container">
      <div className="hiremodal">
        <div className="mymodal-header"></div>
        <div className="title">
          <h1>Book A Professional</h1>
        </div>
        <div className="process-icon">
          <ul className="progressbar">
            <li className="wrench"><i className="fa fa-wrench" aria-hidden="true"></i></li>
            <li className="map"><i className="fa fa-map-marker" aria-hidden="true"></i></li>
            <li className="user"><i className="fa fa-user" aria-hidden="true"></i></li>
            <li className="check"><i className="fa fa-check" aria-hidden="true"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Progressbar; 