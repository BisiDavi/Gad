import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import GridOverlay from './partials/GridOverlay';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Barber from './artisans/Barber';
import Plumber from './artisans/Plumbers';
import carpenter from './artisans/carpenter';
import Cobbler from './artisans/Cobbler';
import Electrician from './artisans/Electrician';
import FashionDesigner from './artisans/FashionDesigner';
import Mechanic from './artisans/Mechanic';
import Painter from './artisans/Painter';
import BrickLayer from './artisans/Bricklayer';
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
            <Route path="/barber" component={Barber} />
            <Route path="/plumber" component={Plumber} />
            <Route path="/carpenter" component={carpenter} />
            <Route path="/cobbler" component={Cobbler} />
            <Route path="/electrician" component={Electrician} />
            <Route path="/fashion-designer" component={FashionDesigner} />
            <Route path="/mechanic" component={Mechanic} />
            <Route path="/painter" component={Painter} />
            <Route path="/bricklayer" component={BrickLayer} />
          </Switch>
          <Footer />
        </div>
      </Router>
      <Ripple background="blur" time={200} color="blue" />
    </React.Fragment>
  );
}

export default App;
