import React, { Component } from 'react';
import Navbar2 from '../navbar/Navbar2.js'
import Professional from './Professional.js';
import ProfessionalsList from './ProfessionalsList.js';

export default class Hero extends Component {

	render() {
		return (
			<div>
				<Navbar2 />

				<div id="home">
						<h1 class="title">Learn Live</h1>
				</div>
				<h1 className="page-header"> Professionals </h1> 

				<ProfessionalsList />

			</div>
		);
	}
}

