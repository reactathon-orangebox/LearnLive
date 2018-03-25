import React from 'react';
import axios from 'axios';
import User from './user.js';
import Uploads from './uploads.js';
import Live from './live.js';
import Navbar from '../navbar/Navbar.js'
import LearnMore from './learnMore.js'
import { Segment, Divider } from 'semantic-ui-react';




class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			loggedInUser: 'Derrick Zhang',
			followers: 546,
			following: 12,
			uploads: ['kuSZEZ0fCY0', 'Ho9em79_0qg', 'GLy2rYHwUqY', 'oBu-pQG6sTY', 'RaPp5jr--xo']
		}
	}



	render() {
		return (
			<div>
			<Navbar />
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
					<Uploads uploads={this.state.uploads} />
				</div>
				<div>
					<LearnMore />
				</div>
			</div>
		)
	}
}

export default Profile;