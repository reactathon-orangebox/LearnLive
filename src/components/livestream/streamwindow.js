import React, { Component } from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber, preloadScript } from 'opentok-react';

import sampleUsers from '../../sampleData/users';

class StreamWindow extends Component {
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
      <div>
        <OTSession
        apiKey={ process.env.REACT_APP_OT_API_KEY }
        sessionId={ process.env.REACT_APP_SESSION_ID }
        token={ this.state.userToken }
        eventHandlers={ this.sessionEvents }
        onError={ this.onError }
      >
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTStreams>
          <OTSubscriber className='them'
            properties={{ width: 600, height: 400 }} 
          />
        </OTStreams>
        <OTPublisher 
          properties={{ float: 'right', width: 200, height: 100}}
        />
      </OTSession>
        {/* <button onClick={this.props.endClass.bind(null)} >End Class</button> */}
      </div>
    )
  }
}

export default preloadScript(StreamWindow);

{/* <OTPublisher 
properties={{ width: 600, height: 400 }}
/>
<OTStreams>
<OTSubscriber className='them'
  properties={{ float: 'right', width: 200, height: 100}} 
/>
</OTStreams> */}