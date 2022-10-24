import React from 'react';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
      <div className='Container'>
        <div className='Container2'>
          <Info />
          <About />
          <Footer />
        </div>
      </div>
  );
}

export default App;
