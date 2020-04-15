import React from 'react';
import { Header, Footer, GridOverlay } from './partials';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Services, Contact, index } from './pages/index';
import {
  Barber, BrickLayer, carpenter, Cobbler, Electrician, Mechanic,
  FashionDesigner, Painter, Plumber
} from './artisans/index';
import { Ripple } from 'react-preloaders';
import './App.css';
import HireArtisan from './components/HireArtisan';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />
          <GridOverlay />
          <Switch>
            <Route path="/" exact component={index} />
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
          <HireArtisan />
          <Footer />
        </div>
      </Router>
      <Ripple background="blur" time={200} color="blue" />
    </React.Fragment>
  );
}

export default App;
