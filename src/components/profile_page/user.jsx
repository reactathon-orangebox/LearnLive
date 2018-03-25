import React from 'react';
import { Image, List, Modal } from 'semantic-ui-react';

const User = (props) => (
	<div>
		<div className='profileHeader'>
			<List selection verticalAlign='middle'>
		    <List.Item>
		      <Image avatar src='https://www.yogajournal.com/.image/t_share/MTQ2MjA3NTgyMzI2MTA1MTA1/yjlive-bow-pose.jpg' />
		      <List.Content>
		        <List.Header>{props.loggedInUser}</List.Header>
		        <p className='followers'>Followers: {props.followers} &nbsp; Following: {props.following}</p>
		      </List.Content>
		    </List.Item>
		   </List>
		</div>
	</div>
);

export default User;