import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import MyServices from './Components/MyServices';
import BaseContainer from './Components/BaseContainer';
import FeaturedPortfolio from './Components/FeaturedPortfolio';

export default function App() {
	return (
		<div className='App'>
			<NavBar />
			<Home />
			<About />
			<BaseContainer title={'Client Testimonial'} rest={<Testimonial />} />
			<BaseContainer title={'My Services'} rest={<MyServices />} />
			<BaseContainer title={'Featured Portfolio'} rest={<FeaturedPortfolio />} />
		</div>
	);
}
