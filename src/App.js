import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  About, Services, Contact, Index, Bricklayer, Electrician, Mechanic, Login, Makeup, Welder, Acrepair, Artisanpro,
  Fashiondesigner, Painter, Plumber, Homedecor, Photographer, Eventplanner, Header, Footer, Stylist, Signup, Probutton,
  Task, Profile, Location, Confirm
} from './partials';
import { Ripple } from 'react-preloaders';
import './App.css';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API    
  };

  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />
          <Probutton />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/plumber" component={Plumber} />
            <Route path="/electrician" component={Electrician} />
            <Route path="/fashion-designer" component={Fashiondesigner} />
            <Route path="/mechanic" component={Mechanic} />
            <Route path="/canvas-painter" component={Painter} />
            <Route path="/bricklayer" component={Bricklayer} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/makeup" component={Makeup} />
            <Route path="/plumber" component={Plumber} />
            <Route path="/photographer" component={Photographer} />
            <Route path="/ac" component={Acrepair} />
            <Route path="/electrician" component={Electrician} />
            <Route path="/fashiondesigner" component={Fashiondesigner} />
            <Route path="/event-planner" component={Eventplanner} />
            <Route path="/painter" component={Painter} />
            <Route path="/mechanic" component={Mechanic} />
            <Route path="/hair-stylist" component={Stylist} />
            <Route path="/bricklayer" component={Bricklayer} />
            <Route path="/welder" component={Welder} />
            <Route path="/home-decor" component={Homedecor} />
            <Route path="/painter" component={Painter} />
            <Route path="/gadpro" component={Artisanpro} />
            <Route path="/task" component={Task} />
            <Route path="/modal-profile" component={Profile} />
            <Route path="/modal-location" component={Location} />
            <Route path="/modal-confirm" component={Confirm} />
            <Index />
          </Switch>
          <Widget handleNewUserMessage={handleNewUserMessage} />
          <Footer />
          {    /**<BottomNav />*/}
        </div>
      </Router>
      <Ripple background="blur" color="blue" />
    </React.Fragment>
  );
}

export default App;
