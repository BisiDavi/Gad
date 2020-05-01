import React from 'react';
import '../styles/Header.css';
// import Button from '../components/Button';
// import { Link } from 'react-router-dom';
import { MyNavbar } from '.';


const Header = () => {
  return (
    /**
      <div className="header">
      <div className="logo">
        <Link to='/'>
          <h1>G <span className="make_red">A</span> D</h1>
        </Link>
      </div>
      <div className="contact-list">        
          <i className="fas fa-phone-alt"></i>
          <i className="fab fa-whatsapp"></i>                
          <p>0810 347 2314</p>        
      </div>
      <div className="login-signup">
        <Button name="Login" linkto="/login" />
        <Button name="Sign up" linkto="/signup" />
      </div>
  </div>
    */
  <MyNavbar />
  )
}

export default Header;