import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
