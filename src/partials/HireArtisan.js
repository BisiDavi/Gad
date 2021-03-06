import React from 'react'
import '../styles/HireArtisan.css';
import { artisanGrid, Artisanlink, payment } from '.';

const HireArtisan = () => {
  return (
    <div className="hirenow">
      <div className="gad-payment">
        <img src={payment} alt="seamless payment" />
      </div>
      <div className="available-artisans">
        <h1>Hire A Certified Artisan today</h1>
        <Artisanlink linkaddress="/ac" linkName="AC Installation" />
        <Artisanlink linkaddress="/bricklayer" linkName="Bricklayer" />
        <Artisanlink linkName="Bathroom Fitting" linkaddress="/bathroom-fitting" />
        <Artisanlink linkName="Blinds Installation" linkaddress="/blind-fitting" />
        <Artisanlink linkName="Computer Repair" linkaddress="/computer-repair" />
        <Artisanlink linkaddress="/cook-bake" linkName="Cooking & Baking" />
        <Artisanlink linkaddress="/electrician" linkName="Electrician" />
        <Artisanlink linkaddress="/eventplanner" linkName="Event Planner" />
        <Artisanlink linkaddress="/generator-repair" linkName="Generator Repairs" />
        <Artisanlink linkaddress="/home-cleaning" linkName="Home Cleaning" />
        <Artisanlink linkaddress="/homedecor" linkName="Home Decor" />
        <Artisanlink linkaddress="/hairstylist" linkName="Hair Stylist" />
        <Artisanlink linkaddress="/makeup" linkName="Make-up Artist" />
        <Artisanlink linkaddress="/Mechanic" linkName="Mechanic" />
        <Artisanlink linkaddress="/office-cleaning" linkName="Office Cleaning" />
        <Artisanlink linkaddress="/plumber" linkName="Plumber" />
        <Artisanlink linkaddress="/photographer" linkName="Photographer" />
        <Artisanlink linkaddress="/pop" linkName="POP" />
        <Artisanlink linkaddress="/phoneEngineer" linkName="Phone Engineer" />
        <Artisanlink linkaddress="/site-cleaning" linkName="Site Cleaning" />
        <Artisanlink linkaddress="/signage" linkName="Signage" />
        <Artisanlink linkaddress="/tilling" linkName="Tilling" />
        <Artisanlink linkaddress="/painter" linkName="Wall Painting" />
        <Artisanlink linkaddress="/welder" linkName="Welder" />

      </div>
      <div className="artisangrid">
        <img src={artisanGrid} alt="hire an artisan" />
      </div>
    </div>
  )
}

export default HireArtisan;
