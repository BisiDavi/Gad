import React from "react";
import { Link } from 'react-router-dom';
import { BlinkText } from '../partials';
import '../styles/probutton.css';

const Probutton = () => {
  return (
    <Link className="togadpro" to="/gadpro">
      <div className="probutton">
        <BlinkText content="Become a Gad Pro" />
      </div>
    </Link>
  )
}

export default Probutton;