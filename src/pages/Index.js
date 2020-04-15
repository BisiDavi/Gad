import React from 'react';
import Card from '../components/Card';
import '../styles/Index.css';
import {
  hairdresser, electricianwork, carpentercutting, barberlogo,
  mechanic, cobbler, bricklayer, plumber, todo, schedule, getMatched, done
} from '../partials';
export { default as About } from './About';
export { default as Services } from './Services';
export { default as Contact } from './Contact';
export { default as index } from './index';

const Index = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  const condition12 = currentHour < 12;
  const condition16 = currentHour < 16;
  const greetings = condition12 ? <h1>Good Morning, What Task Do You Want Done ? </h1> : condition16 ? <h1>Good Afternoon, What Task Do You Want Done</h1> : <h1>Good Evening, What Task Do You Want Done ? </h1>;
  return (
    <div className="index">
      {greetings}
      <hr />
      <p> Inform us about that urgent task that you want done, and get connected in matter of minutes to professionals </p>

      <div className="artisans">
        <Card title="Plumbers" alt="Hire a Plumber" imgName={plumber} />
        <Card title="Electricians" alt="Hire an electrician" imgName={electricianwork} />
        <Card title="Hair Stylist" alt="Hire a hair stylist" imgName={hairdresser} />
        <Card title="Carpenter" alt="Hire an carpenter" imgName={carpentercutting} />
        <Card title="Barber" alt="Hire an barber" imgName={barberlogo} />
        <Card title="Mechanic" alt="Hire an mechanic" imgName={mechanic} />
        <Card title="Cobbler" alt="Hire an cobbler" imgName={cobbler} />
        <Card title="Bricklayer" alt="Hire an bricklayer" imgName={bricklayer} />
      </div>

      <div className="searchArtisans">
        <form>
          <input name="search" placeholder="Still not found that artisan you are looking for? " />
          <input type="submit" name="submit" />
        </form>
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
  );
};

export default Index;