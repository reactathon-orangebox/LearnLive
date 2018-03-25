import React from 'react';
import axios from 'axios';
import User from './user.jsx';
import Uploads from './uploads.jsx';
import Live from './live.jsx';


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