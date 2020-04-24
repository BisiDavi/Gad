import React from 'react'
import '../styles/HireArtisan.css';
import { artisanGrid, Artisanlink } from '.';

const HireArtisan = () => {
  return (
    <div className="hirenow">
      <div className="gad-payment">

      </div>
      <div className="available-artisans">
        <h1>Hire A Certified Artisan today</h1>
        <Artisanlink linkaddress="/ac" linkName="AC Installation" />
        <Artisanlink linkaddress="/carpenter" linkName="Carpenter" />
        <Artisanlink linkaddress="/bricklayer" linkName="Bricklayer" />
        <Artisanlink linkaddress="/electrician" linkName="Electrician" />
        <Artisanlink linkaddress="/eventplanner" linkName="Event Planner" />
        <Artisanlink linkaddress="/hairstylist" linkName="Hair Stylist" />
        <Artisanlink linkaddress="/homedecor" linkName="Home Decor" />
        <Artisanlink linkaddress="/makeup" linkName="Make-up Artist" />
        <Artisanlink linkaddress="/Mechanic" linkName="Mechanic" />
        <Artisanlink linkaddress="/plumber" linkName="Plumber" />
        <Artisanlink linkaddress="/photographer" linkName="Photographer" />
        <Artisanlink linkaddress="/painter" linkName="Wall Painting" />
        <Artisanlink linkaddress="/welder" linkName="Welder" />
        <Artisanlink linkName="Bathroom Fitting" linkaddress="/bathroom-fitting" />
        <Artisanlink linkName="Blinds Installation" linkaddress="/blind-fitting" />
        <Artisanlink linkName="Computer Repair" linkaddress="/computer-repair" />
        <Artisanlink linkaddress="/cook-bake" linkName="Cooking & Baking" />
        <Artisanlink linkaddress="/generator-repair" linkName="Generator Repairs" />
        <Artisanlink linkaddress="/home-cleaning" linkName="Home Cleaning" />
        <Artisanlink linkaddress="/office-cleaning" linkName="Office Cleaning" />
        <Artisanlink linkaddress="/pop" linkName="POP" />
        <Artisanlink linkaddress="/phoneEngineer" linkName="Phone Engineer" />
        <Artisanlink linkaddress="/site-cleaning" linkName="Site Cleaning" />
        <Artisanlink linkaddress="/signage" linkName="Signage" />
        <Artisanlink linkaddress="/tilling" linkName="Tilling" />

      </div>
      <div className="artisangrid">
        <img src={artisanGrid} alt="hire an artisan" />
      </div>
    </div>
  )
}

export default HireArtisan;
