import React from 'react';
import '../styles/Index.css';
import {
  hairdresser, electricianwork, photography, mechanic, homedecor2, HireArtisan, HireCarousel,
  plumber, todo, schedule, getMatched, done, ImgCard, welder, eventplanner, GridOverlay
} from '../partials';


let currentTime = new Date();
let currentHour = currentTime.getHours();
const condition12 = currentHour < 12;
const condition16 = currentHour < 16;
const greet = ["Good Morning ,", "Good Afternoon ,", "Good Evening ,"];
const greetings = condition12 ? <h1><span className="greet">{greet[0]}</span> Get your task done by Professionals, <span className="make_red">Hire now</span> </h1> : condition16 ? <h1><span className="greet">{greet[1]}</span> Get your task done by Professionals, <span className="make_red">Hire now</span></h1> : <h1><span className="greet">{greet[2]}</span> Get your task done by Professionals, <span className="make_red">Hire now</span></h1>;


const Index = () => {

  return (
    <>
      <GridOverlay />
      <div className="index">
        <div className="greetuser">
          {greetings}
          <hr />
          <p> Inform us about that urgent task that you want done, and get connected in matter of minutes to professionals </p>
        </div>
        <div className="artisans">
          <ImgCard name="Plumber" linkartisan="/plumber" imgsrc={plumber} imgalt="Hire a Plumber" />
          <ImgCard name="Electrician" linkartisan="/electrician" imgsrc={electricianwork} imgalt="Hire an Electrician" />
          <ImgCard className="hairstylist" name="Hair Stylist" linkartisan="/fashion-designer" imgsrc={hairdresser} imgalt="Hire a hair stylist" />
          <ImgCard className="photographer" name="Photographer" linkartisan="/photographer" imgsrc={photography} imgalt="Hire a Photographer" />
          <ImgCard name="Welder" linkartisan="/welder" imgsrc={welder} imgalt="Hire a welder" />
          <ImgCard name="Mechanic" linkartisan="/mechanic" imgsrc={mechanic} imgalt="Hire a mechanic" />
          <ImgCard className="homedecor" name="Home Decor" linkartisan="/home-decor" imgsrc={homedecor2} imgalt="Hire a home decor" />
          <ImgCard className="eventplanner" name="Event Planner" linkartisan="/event-planner" imgsrc={eventplanner} imgalt="Hire an event planner" />
        </div>

        <div className="searchArtisans">
          <form className="form-wrap cf">
            <input type="text" placeholder="Still not found that artisan you are looking for? " required />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="showinMobile">
          <h3>How It Works</h3>
          {/**<HireCarousel */}
        </div>

        <div className="howGadWorks">
          <h3> How It Works </h3>
          <div className="describeTask">
            <img src={todo} alt="select a qualified artisan" />
            <h4>DESCRIBE THE TASK</h4>
            <p>There are varieties of home services just for you, choose a qalified Artisan.</p>
          </div>
          <div className="getMatched">
            <img src={getMatched} alt="get matched to a qualified artisan" />
            <h4>GET MATCHED IMMEDIATELY</h4>
            <p>Select from a list of fully vetted and certified Artisans required for your service of choice.</p>
          </div>
          <div className="makeSchedule">
            <img src={schedule} alt="make a schedule with a qualified artisan" />
            <h4>MAKE A SCHEDULE</h4>
            <p>Choose a day and time you’d like your preferred qualified Artisan to show up </p>
          </div>
          <div className="taskDone">
            <img src={done} alt="select a qualified artisan" />
            <h4>GET THE TASK DONE </h4>
            <p>Without further a do , your service agent arrives and gets the job done.  Payments are seamless.</p>
          </div>
        </div>
      </div>
      <HireArtisan />
    </>
  );
};

export default Index;