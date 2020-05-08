import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/Hirecarousel.css";
import { description, matched, makeschedule, taskdone } from '../partials';


class HireCarousel extends Component {
  render() {
    return (
      <Carousel axis="vertical" autoPlay infiniteLoop>
        <div>
          <img src={description} alt="carousel-a1-pro" />
        </div>
        <div>
          <img src={matched} alt="carousel-a1-pro" />
        </div>
        <div>
          <img src={makeschedule} alt="carousel-a1-pro" />
        </div>
        <div>
          <img src={taskdone} alt="carousel-a1-pro" />
        </div>
      </Carousel>
    );
  }
}

export default HireCarousel; 