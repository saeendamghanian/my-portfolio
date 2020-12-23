import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Testimonial from './Components/Testimonial';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
			<About />
			<Testimonial />
		</div>
	);
}

export default App;
