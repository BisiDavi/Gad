import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';


let Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="section-1">
          <Link to="/">
            <h4><span className="make_red">A1 Pro </span>Limited</h4>
          </Link>
          <Link to="/about">About us</Link>
          <li><a href="#service">Terms of Services</a></li>
          <li><a href="#policy">Privacy Policy</a></li>          
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
          <div className="social-icons">
            <a href="#facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright"><p>&#169; copyright 2020. All Rights Reserved </p></span>
        <p className="verrbtext">Made with <span className="love">&#9829;</span>  <span className="verrb">By Verrb Inc.</span></p>
      </div>
    </div>
  )
}

export default Footer;