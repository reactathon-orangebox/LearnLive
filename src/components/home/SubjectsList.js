import React, { Component } from 'react';
import Designs from './Design.js'

export default class SubjectsList extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Designs />
				</div> 
			</div>
		);
	}
}
