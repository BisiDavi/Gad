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
          linkroute="/plumber"
          gridimg={plumber}
          imgalt="hire a plumber"
          text1="Need a Professional Plumber"
        />
        <Grid
          linkroute="/welder"
          gridimg={welder}
          imgalt="hire a welder"
          text1="Need a Professional welder"
        />
        <Grid
          linkroute="/ac"
          gridimg={acrepair}
          imgalt="hire an ac expert"
          text1="Need a Professional AC Expert"
        />
        <Grid
          linkroute="/electrician"
          gridimg={electrician}
          imgalt="hire a electrician"
          text1="Need a Certified electrician"
        />
        <Grid
          linkroute="/mechanic"
          gridimg={mechanic}
          imgalt="hire a mechanic"
          text1="Need a Professional mechanic"
        />
        <Grid
          linkroute="/bricklayer"
          gridimg={bricklayer}
          imgalt="hire a bricklayer"
          text1="Need a Professional bricklayer"
        />
        <Grid
          linkroute="/painter"
          gridimg={painterhouse}
          imgalt="hire a house painter"
          text1="Need a Professional house painter"
        />
        <Grid
          linkroute="/home-decor"
          gridimg={homedecor}
          imgalt="hire a homedecor"
          text1="Need a Professional homedecor"
        />
        <Grid
          linkroute="/fashiondesigner"
          gridimg={fashiondesigner}
          imgalt="hire a fashiondesigner"
          text1="Need a Certified Fashion designer"
        />
        <Grid
          linkroute="/event-planner"
          gridimg={eventplanner}
          imgalt="hire a eventplanner"
          text1="Need a Professional Eventplanner"
        />
        <Grid
          linkroute="/canvas-painter"
          gridimg={painter}
          imgalt="hire a canvas painter"
          text1="Need a Professional Canvas Painter"
        />

        <Grid
          linkroute="/hair-stylist"
          gridimg={Salon}
          imgalt="make your hair"
          text1="Need a Professional Hair Stylist"
        />
        <Grid
          linkroute="/makeup"
          gridimg={makeup}
          imgalt="hire a makeup artist"
          text1="Need a Professional Makeup artist"
        />
        <Grid
          linkroute="/photographer"
          gridimg={camera}
          imgalt="hire a Photographer"
          text1="Need a Professional Photographer"
        />
      </ul>
    </div>
  );
}

export default ImageGrid;