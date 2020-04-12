import React from 'react';
import '../styles/Header.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to='/'>
          <h1>G <span className="make_red">A</span> D</h1>
        </Link>
      </div>
      <div className="contact-list">
        <div className="icons">
          <i className="fas fa-phone-alt"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="phone-numbers">
          <p>0810 347 2314</p>
        </div>
      </div>
      <div className="login-signup">
        <Button name="Login" />
        <Button name="Sign up" />
      </div>
    </div>
  )
}

export default Header;