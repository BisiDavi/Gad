import React from 'react';
import { Link } from 'react-router-dom';
import { zip } from 'lodash';
import '../../styles/MovingNav.css';


const artisans = ["Ac Repair", "Brick layer", "Bathroom Fitting", "Blinds Installation",
  "Chef", "Computer Repair", "Electrician", "Event planner", "Generator Repair", "Home Decor",
  "Hair Stylist", "Home Cleaning", "Make-up Artist", "Mechanic", "Office Cleaning", "Plumber",
  "Photographer", "POP", "Site Cleaning", "Signage", "Tilling","Others"];

const artisanlink = ["/ac", "/bricklayer", "/bathroom-fitting", "/blind-fitting", "/cook-bake",
  "/computer-repair", "/electrician", "/eventplanner", "/generator-repair", "/homedecor",
  "/hairstylist", "/home-cleaning", "/makeup", "/Mechanic", "/office-cleaning", "/plumber",
  "/photographer", "/pop", "/site-cleaning", "/signage", "/tilling","/others"];

const MovingNav = () => {
  const showArtisans = zip(artisans, artisanlink).map((value) =>     
    <li>
      <Link to={value[1]}>{value[0]}</Link>
    </li>      
  )
  return (    
    <div className="MovingNav">
      <ul>
        {showArtisans}    
      </ul>
    </div>
  )
}

export default MovingNav;