import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HireArtisan.css';
import { artisanGrid } from '../partials';

const HireArtisan = () => {
  return (
    <div className="hirenow">
      <img src={artisanGrid} alt="hire an artisan" />
      <div className="available-artisans">
        <h1>Hire A Certified Artisan today</h1>
        <Link to="">
          <p>AC Instation</p>
        </Link>
        <Link to="">
          <p>Aluminium Work</p>
        </Link>
        <Link to="">
          <p>AC Repairs</p>
        </Link>
        <Link to="">
          <p>Bathroom Fittings</p>
        </Link>
        <Link to="">
          <p>Blinds Installations</p>
        </Link>
        <Link to="">
          <p>BrickLayer</p>
        </Link>
        <Link to="">
          <p>Carpentary</p>
        </Link>
        <Link to="">
          <p>Computer Repairs</p>
        </Link>
        <Link to="">
          <p>Cooking & Baking</p>
        </Link>
        <Link to="">
          <p>Drivers</p>
        </Link>
        <Link to="">
          <p>Decoration</p>
        </Link>
        <Link to="">
          <p>Electricals</p>
        </Link>
        <Link to="">
          <p>Fumigation</p>
        </Link>
        <Link to="">
          <p>Generator Repairs</p>
        </Link>
        <Link to="">
          <p>Gas Cooker</p>
        </Link>
        <Link to="">
          <p>Gardening</p>
        </Link>
        <Link to="">
          <p>Home Cleaning</p>
        </Link>
        <Link to="">
          <p>Home Moving</p>
        </Link>
        <Link to="">
          <p>Installations</p>
        </Link>
        <Link to="">
          <p>Interior</p>
        </Link>
        <Link to="">
          <p>Inverter</p>
        </Link>
        <Link to="">
          <p>Metal Fabrication</p>
        </Link>
        <Link to="">
          <p>Make-up Artist</p>
        </Link>
        <Link to="">
          <p>Office Cleaning</p>
        </Link>
        <Link to="">
          <p>POP</p>
        </Link>
        <Link to="">
          <p>Professional Cook</p>
        </Link>
        <Link to="">
          <p>Phone Engineer</p>
        </Link>
        <Link to="">
          <p>Site Cleaning</p>
        </Link>
        <Link to="">
          <p>Servicing</p>
        </Link>
        <Link to="">
          <p>Signage</p>
        </Link>
        <Link to="">
          <p>Tilling</p>
        </Link>
        <Link to="">
          <p>Washing Machine </p>
        </Link>
        <Link to="">
          <p>Wall Painting</p>
        </Link>
      </div>
    </div>
  )
}

export default HireArtisan;
