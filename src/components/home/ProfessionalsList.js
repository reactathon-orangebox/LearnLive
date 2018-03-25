import React, { Component } from 'react';
import Professional from './Professional.js'

export default class ProfessionalsList extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Professional profile={this.props.profile} />
				
				</div> 
			</div>
		);
	}
}
