import React from 'react';
import axios from 'axios';
import User from './user.js';
import Uploads from './uploads.js';
import Live from './live.js';
import Navbar from '../navbar/Navbar.js'
import Livestream from '../livestream/livestream';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			teacher: 'larrychangg',
			user: this.props.user,
			userToken: 'empty',
			followers: 546,
			following: 12,
			uploads: []
		}
	}


	render() {
		return (
			<div>
			<Navbar />
				<div className="user">
					<User loggedInUser={this.state.teacher} 
								followers={this.state.followers}
								following={this.state.following}
					/>
				</div>
				<div className='live'>
					<Live />
					<Livestream
						user={this.state.user}
					/>
				</div>
				<div className='uploads'>
					<Uploads />
				</div>
			</div>
		)
	}
}

export default Profile;