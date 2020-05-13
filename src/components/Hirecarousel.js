import React, { Component } from 'react';
import Slider from "react-slick";
import "../styles/Hirecarousel.css";
import { description, matched, makeschedule, taskdone } from '../partials';


class HireCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      vertical: true,
      autoplay: true,
    };
    return (
      <div className="carousel-slider">
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}

export default HireCarousel; 