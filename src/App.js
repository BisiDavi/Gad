import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import GridOverlay from './partials/GridOverlay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GridOverlay />
      <Footer />
    </div>
  );
}

export default App;
