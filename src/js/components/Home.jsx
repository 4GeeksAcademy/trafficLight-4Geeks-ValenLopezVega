import React from "react";
import {Light} from './Light.jsx'

//create your first component
const Home = () => {
	return (
        <div className="traffic-light">
			<div className="pole"></div>
			<div className="light-box">
				<Light color= 'red'/>
				<Light color= 'yellow'/>
				<Light color= 'green'/>
			</div>
		</div>
	);
};

export default Home;