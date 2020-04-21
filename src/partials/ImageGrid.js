import React from 'react';
import '../styles/imagegrid.css';
import {
  bricklayer, homedecor, camera, electrician, fashiondesigner, Grid, makeup,
  eventplanner, mechanic, painterhouse, painter, plumber, Salon, welder, acrepair
} from '.'


let ImageGrid = () => {
  return (
    <div className="grid">
      <ul id="hexGrid">
        <Grid
          linkroute="/ac"
          gridimg={makeup}
          imgalt="hire a makeup artist"
          text1="Need a Professional Makeup artist"
        />
        <Grid   
          linkroute="/aluminium-repair"
          gridimg={plumber}
          imgalt="hire a plumber"
          text1="Need a Professional Plumber"
        />
        <Grid
          linkroute="/bathroom-fitting"
          gridimg={camera}
          imgalt="hire a Photographer"
          text1="Need a Professional Photographer"
        />
        <Grid
          linkroute="/ac"
          gridimg={acrepair}
          imgalt="hire an ac expert"
          text1="Need a Professional AC Expert"
        />
        <Grid
          linkroute="/ac"
          gridimg={electrician}
          imgalt="hire a electrician"
          text1="Need a Certified electrician"
        />
        <Grid
          linkroute="/ac"
          gridimg={fashiondesigner}
          imgalt="hire a fashiondesigner"
          text1="Need a Certified Fashion designer"
        />
        <Grid
          linkroute="/ac"
          gridimg={eventplanner}
          imgalt="hire a eventplanner"
          text1="Need a Professional Eventplanner"
        />
        <Grid
          linkroute="/ac"
          gridimg={painter}
          imgalt="hire a painter"
          text1="Need a Professional Painter"
        />
        <Grid
          linkroute="/ac"
          gridimg={mechanic}
          imgalt="hire a mechanic"
          text1="Need a Professional mechanic"
        />
        <Grid
          linkroute="/ac"
          gridimg={Salon}
          imgalt="make your hair"
          text1="Need a Professional Hair Stylist"
        />
        <Grid
          linkroute="/ac"
          gridimg={bricklayer}
          imgalt="hire a bricklayer"
          text1="Need a Professional bricklayer"
        />
        <Grid
          linkroute="/ac"
          gridimg={painterhouse}
          imgalt="hire a house painter"
          text1="Need a Professional house painter"
        />
        <Grid
          linkroute="/ac"
          gridimg={homedecor}
          imgalt="hire a homedecor"
          text1="Need a Professional homedecor"
        />
        <Grid
          linkroute="/ac"
          gridimg={welder}
          imgalt="hire a welder"
          text1="Need a Professional welder"
        />


      </ul>
    </div>
  );
}

export default ImageGrid;