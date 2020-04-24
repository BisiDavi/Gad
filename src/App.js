import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  About, Services, Contact, Index, Bricklayer, Electrician, Mechanic, Login, Makeup, Welder, Acrepair,
  Fashiondesigner, Painter, Plumber, Homedecor, Photographer, Eventplanner, Header, Footer, Stylist, Signup
} from './partials';
import { Ripple } from 'react-preloaders';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />          
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
            <Index />
          </Switch>
          <Footer />
          {    /**<BottomNav />*/}
        </div>
      </Router>
      <Ripple background="blur" time={200} color="blue" />
    </React.Fragment>
  );
}

export default App;
