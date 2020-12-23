import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import MyServices from './Components/MyServices';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
			<About />
			<Testimonial />
			<MyServices />
		</div>
	);
}

export default App;
