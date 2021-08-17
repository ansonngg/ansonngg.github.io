import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      lorem ipsum
    </>
  );
}

export default App;
