import React from "react";
import {useState} from 'react';
import { Light } from './Light.jsx'

const Home = () => {

	const [activeLight, setActiveLight] = useState(false);

	return (
		<div className="traffic-light">
			<div className="pole"></div>
			<div className="light-box">
				<Light
					color='red'
					isActive= {activeLight === 'red'} 
					onClick= {() => setActiveLight('red')}
				/>

				<Light 
					color='yellow'
					isActive= {activeLight === 'yellow'}
					onClick= {() => setActiveLight('yellow')}

				/>
				<Light 
					color='green'
					isActive= {activeLight === 'green'}
					onClick= {() => setActiveLight('green')}
				 />
			</div>
		</div>
	);
};

export default Home;