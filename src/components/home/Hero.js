import React, { Component } from 'react';
import Navbar2 from '../navbar/Navbar2.js'
import ProfessionalsList from './ProfessionalsList.js';
import SubjectsList from './SubjectsList.js';

export default class Hero extends Component {

	render() {
		return (
			<div>
				<div id="home">
						<h1 class="title">Learn Live</h1>
				</div>
				<h1 className="page-header"> Professionals </h1> 

				<ProfessionalsList profile={this.props.profile} />

				<h1 className="page-header"> Design </h1> 

				<SubjectsList />

			</div>
		);
	}
}

