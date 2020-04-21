import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  About, Services, Contact, Index, Bricklayer, Electrician, Mechanic, HireArtisan,
  Fashiondesigner, Painter, Plumber, homedecor, camera, eventplanner, Header, Footer, GridOverlay
} from './partials';
import { Ripple } from 'react-preloaders';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />
          <GridOverlay />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/homedecor" component={homedecor} />
            <Route path="/plumber" component={Plumber} />
            <Route path="/photographer" component={camera} />
            <Route path="/eventplanner" component={eventplanner} />
            <Route path="/electrician" component={Electrician} />
            <Route path="/fashion-designer" component={Fashiondesigner} />
            <Route path="/mechanic" component={Mechanic} />
            <Route path="/painter" component={Painter} />
            <Route path="/bricklayer" component={Bricklayer} />
          </Switch>
          <HireArtisan />
          <Footer />
        </div>
      </Router>
      <Ripple background="blur" time={200} color="blue" />
    </React.Fragment>
  );
}

export default App;
