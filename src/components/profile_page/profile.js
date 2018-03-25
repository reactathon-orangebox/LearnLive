import React from 'react';
import axios from 'axios';
import User from './user.js';
import Uploads from './uploads.js';
import Live from './live.js';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			loggedInUser: 'larrychangg',
			followers: 546,
			following: 12,
			uploads: []
		}
	}



	render() {
		return (
			<div>
				<div className="user">
					<User loggedInUser={this.state.loggedInUser} 
								followers={this.state.followers}
								following={this.state.following}
					/>
				</div>
				<div className='live'>
					<Live />
				</div>
				<div className='uploads'>
					<Uploads />
				</div>
			</div>
		)
	}
}

export default Profile;