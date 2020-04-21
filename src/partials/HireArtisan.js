import React from 'react'
import '../styles/HireArtisan.css';
import { artisanGrid, Artisanlink } from '.';

const HireArtisan = () => {
  return (
    <div className="hirenow">
      <img src={artisanGrid} alt="hire an artisan" />

      <div className="available-artisans">

        <h1>Hire A Certified Artisan today</h1>

        <Artisanlink linkaddress="/artisans/ac" linkName="AC Installation" />
        <Artisanlink linkaddress="/artisans/bricklayer" linkName="BrickLayer" />
        <Artisanlink linkaddress="/artisans/electrician" linkName="Electrician" />
        <Artisanlink linkaddress="/artisans/eventplanner" linkName="Event Planner" />
        <Artisanlink linkaddress="/artisans/hairstylist" linkName="Hair Stylist" />
        <Artisanlink linkaddress="/artisans/homedecor" linkName="Home Decor" />
        <Artisanlink linkaddress="/artisans/makeup" linkName="Make-up Artist" />
        <Artisanlink linkaddress="/artisans/plumber" linkName="Plumber" />
        <Artisanlink linkaddress="/artisans/photographer" linkName="Photographer" />
        <Artisanlink linkaddress="/artisans/painter" linkName="Wall Painting" />
        <Artisanlink linkaddress="/artisans/welder" linkName="Welder" />
        <Artisanlink linkName="Aluminium Repair" linkaddress="/artisans/aluminium-repair" />
        <Artisanlink linkName="Bathroom Fitting" linkaddress="/artisans/bathroom-fitting" />
        <Artisanlink linkName="Blinds Installation" linkaddress="/artisans/blind-fitting" />
        <Artisanlink linkName="Computer Repair" linkaddress="/artisans/computer-repair" />
        <Artisanlink linkaddress="/artisans/cook-bake" linkName="Cooking & Baking" />
        <Artisanlink linkaddress="/artisans/generator-repair" linkName="Generator Repairs" />
        <Artisanlink linkaddress="/artisans/home-cleaning" linkName="Home Cleaning" />
        <Artisanlink linkaddress="/artisans/office-cleaning" linkName="Office Cleaning" />
        <Artisanlink linkaddress="/artisans/pop" linkName="POP" />
        <Artisanlink linkaddress="/artisans/phoneEngineer" linkName="Phone Engineer" />
        <Artisanlink linkaddress="/artisans/site-cleaning" linkName="Site Cleaning" />
        <Artisanlink linkaddress="/artisans/signage" linkName="Signage" />
        <Artisanlink linkaddress="/artisans/tilling" linkName="Tilling" />

      </div>
    </div>
  )
}

export default HireArtisan;
