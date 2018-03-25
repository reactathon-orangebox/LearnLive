import React from 'react';
import { Image, List } from 'semantic-ui-react';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<div className='profileHeader'>
					<List selection verticalAlign='middle'>
				    <List.Item>
				      <Image avatar src='https://www.yogajournal.com/.image/t_share/MTQ2MjA3NTgyMzI2MTA1MTA1/yjlive-bow-pose.jpg' />
				      <List.Content>
				        <List.Header>{this.props.loggedInUser}</List.Header>
				        <p className='followers'>Followers: {this.props.followers} &nbsp; Following: {this.props.following}</p>
				        <span>
				        	<button className="button" onClick={this.props.followClick}>Follow</button>
				        	<button className="enroll" onClick={this.props.enrollClick}>Enroll</button>
				        </span>
				      </List.Content>
				    </List.Item>
				   </List>
				</div>
			</div>
		)
	}
};

export default User;