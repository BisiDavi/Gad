import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';


let Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="section-1">
          <Link to="/">
            <h4>G <span className="make_red"> A </span>D</h4>
          </Link>
          <Link to="/about">About us</Link>
          <li><a href="#service">Terms of Services</a></li>
          <li><a href="#policy">Privacy Policy</a></li>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="section-2">
          <h4>PORT HARCOURT</h4>
          <p>Trans Amadi Street, Port Harcourt, Rivers State</p>
        </div>
        <div className="section-3">
          <h4>Subscribe for updates</h4>
          <p>Stay informed on latest task news, announcements and updates!</p>
          <form>
            <input className="footer-input" placeholder="Enter your email" />
            <input className="submit" type="submit"></input>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&#169; copyright 2020. All Rights Reserved </p>
        <p>Made with <span className="love">&#9829;</span>  <span className="verrb">By Verrb Inc.</span></p>
      </div>
    </div>
  )
}

export default Footer;