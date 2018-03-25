import React, { Component } from 'react';
import Professional from './Professional.js'

export default class ProfessionalsList extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Professional />
					<Professional />
					<Professional />
					<Professional />
					<Professional />
					<Professional />
					<Professional />
					<Professional />
				</div> 
			</div>
		);
	}
}
