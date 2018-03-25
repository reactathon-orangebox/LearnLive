import React from 'react';
import axios from 'axios';
import User from './user.js';
import Uploads from './uploads.js';
import Live from './live.js';
import LearnMore from './learnMore.js'
import $ from 'jquery';
import { Segment, Divider } from 'semantic-ui-react';
import Livestream from '../livestream/livestream';


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			teacher: 'Derrick Zhang',
			user: this.props.user,
			userToken: 'empty',
			followers: 546,
			following: 12,
			uploads: ['kuSZEZ0fCY0', 'Ho9em79_0qg', 'GLy2rYHwUqY', 'oBu-pQG6sTY', 'RaPp5jr--xo'],
			followButton: false,
			enrollButton: false
		}
	}

	followClick() {
		if (this.state.followButton === false) {
			$(".button").css("background-color", "orange");
			$(".button").text('Followed')
			this.setState({
				followButton: true,
				followers: this.state.followers + 1
			})
		} else {
			$(".button").css("background-color", "lightgrey");
			$(".button").text('Follow')
			this.setState({
				followButton: false,
				followers: this.state.followers - 1
			})
		}
	}

	enrollClick() {
		if (this.state.followButton === false) {
			$(".enroll").css("background-color", "orange");
			$(".enroll").text('Enrolled')
			this.setState({
				enrollButton: true,
			})
		} else {
			$(".enroll").css("background-color", "lightgrey");
			$(".enroll").text('Enroll')
			this.setState({
				enrollButton: false,
			})
		}
	}

	
	render() {
		return (
			<div className='pad'>
				<div className="user">
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
					<User loggedInUser={this.state.teacher} 
								followers={this.state.followers}
								following={this.state.following}
								followClick={this.followClick.bind(this)}
								enrollClick={this.enrollClick.bind(this)}
					/>
				</div>
				<div className='live'>
					<Live />
					<div className='livestream'>
						<Livestream
							user={this.state.user}
						/>
					</div>
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