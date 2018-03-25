import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'; 

export default class Professional extends Component {
	render() {
		return (
				<div className= "thumbnail col-md-3 col-sm-6 col-xs-12">
					
						<img src="https://images.pexels.com/photos/378148/pexels-photo-378148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

						<div className="btn-group btn-group-justified">
							<a href="#" className="btn btn-warning btn-lg btn-block">Larry Chang</a>
							<a href="#" className="btn btn-default btn-lg btn-block">Soccer &nbsp;&nbsp;<Icon name='soccer'/></a>
						</div>
					
				</div>
		);
	}
}
