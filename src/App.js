/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Element name="home">
          <Home />
        </Element>
      </main>
    </>
  );
}

export default App;
