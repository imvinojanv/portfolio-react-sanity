import React from 'react';

import './App.css';
import './App.scss'

import { About, Footer, Header, Skills, Testimonial, Work, Education } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
