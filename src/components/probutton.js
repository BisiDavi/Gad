import React from "react";
import { Link } from 'react-router-dom';
import '../styles/probutton.css';

const Probutton = () => {
  return (
    <div className="probutton">
      <Link to="/gadpro">
        <button>Become a Gad Pro</button>
      </Link>
    </div>
  )
}

export default Probutton;