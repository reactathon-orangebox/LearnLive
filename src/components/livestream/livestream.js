import React, { Component } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber, preloadScript } from 'opentok-react';

import config from '../../config';
import sampleUsers from '../../sampleData/users';

class Livestream extends Component {
  constructor(props) {
		super(props);
		this.state ={
			user: this.props.user,
			userToken: 'empty',
			error: null,
			connected: false
		};

		this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
	}

	componentWillMount() {
		this.generateUserToken(this.state.user);
	}

	onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

	generateUserToken(user) {
		this.setState({ userToken: sampleUsers[user] })
  }
  
  render() {
    return(
      <OTSession
        apiKey={ config.API_KEY }
        sessionId={ config.SESSION_ID }
        token={ this.state.userToken }
        eventHandlers={ this.sessionEvents }
        onError={ this.onError }
      >
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    )
  }
}

export default preloadScript(Livestream);