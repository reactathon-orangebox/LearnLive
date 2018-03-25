import React from 'react';
import axios from 'axios';
import User from './user.js';
import Uploads from './uploads.js';
import Live from './live.js';
import Navbar from '../navbar/Navbar.js'
<<<<<<< HEAD
import LearnMore from './learnMore.js'
import { Segment, Divider } from 'semantic-ui-react';


=======
>>>>>>> 6d4ca275503a7d72476a48e5a41d2a38dac2f3eb
import Livestream from '../livestream/livestream';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
<<<<<<< HEAD
			teacher: 'Derrick Zhang',
=======
			teacher: 'larrychangg',
>>>>>>> 6d4ca275503a7d72476a48e5a41d2a38dac2f3eb
			user: this.props.user,
			userToken: 'empty',
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