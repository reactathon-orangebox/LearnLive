import React, { Component } from 'react';
import StreamWindow from './streamwindow';

import sampleUsers from '../../sampleData/users';

class Livestream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streaming: false,
      connected: false
    }
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }


  startClass() {
    this.setState({ streaming: true });
  }

  endClass() {
    this.setState({ streaming: false });
  }

  joinClass() {
    return <StreamWindow
                user={ this.props.user }
                userRole={ this.props.role }
                endClass={ this.endClass.bind(this) }
              />
  }

  viewerSwitch() {
    if (this.state.streaming === false) {
      if (this.props.role === 'publisher') {
        return <button onClick={this.startClass.bind(this)}>Start Class</button>
    //   } else {
    //     return <div>Sorry, class is currently not in session!</div>
    //   }
      }
    // } else if (this.state.streaming === true && this.props.role === 'subscriber') {
    //     return <button onClick={this.joinClass.bind(this)}>Join Class</button>
    } else {
      return <StreamWindow
                user={ this.props.user }
                userRole={ this.props.role }
                endClass={ this.endClass.bind(this) }
              />
    }
  }

  render() {
    return (
      <div>
        <StreamWindow
          user={ this.props.user }
          userRole={ this.props.role }
          endClass={ this.endClass.bind(this) }
        />
      </div>
    )
  }
}

export default Livestream;