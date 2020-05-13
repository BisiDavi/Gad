import React from 'react';
import { aboutus } from '../partials';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1> About us</h1>        
      </div>
      <div className="about">
        <div className="text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex numquam quaerat omnis amet placeat culpa voluptas aspernatur minus qui? Vero laborum illo placeat quaerat ab, dolorem mollitia nihil natus, esse rem perferendis iste voluptate distinctio ex libero. Dolores in nesciunt neque recusandae mollitia blanditiis hic vero, officia, est voluptatem sequi officiis deserunt possimus laborum, voluptate ducimus culpa voluptatum quam at doloremque similique aut rem! Provident cumque eligendi accusantium itaque quam beatae? Illum voluptates ea repudiandae aliquam deleniti asperiores accusantium veniam quae qui ducimus fugit inventore, non necessitatibus officia voluptas vitae nobis id? Nam soluta, doloribus dicta sit laborum animi iste.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutus} alt="about us" />
        </div>
      </div>
    </div>
  )
};


export default About;