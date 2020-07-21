import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
