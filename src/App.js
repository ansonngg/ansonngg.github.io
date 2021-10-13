/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Particles from 'particlesjs';
import Navbar from './components/Navbar';
import Home from './components/Home';

window.onload = () => {
  Particles.init({
    selector: '.home-background',
    color: '#CCCCCC',
    connectParticles: true,
  });
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Element name="home">
          <Home />
        </Element>
      </main>
      <canvas className="home-background" />
    </>
  );
}

export default App;
