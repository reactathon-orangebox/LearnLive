import React, { Component } from 'react';
import Classroom from './components/classroom/Classroom';
import Profile from './components/profile_page/profile.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profile'
    }
  }

  switchView() {
    var currentView = this.state.currentView;

    if (currentView === 'room') {
      return <Classroom />
    } else if (currentView === 'profile') {
      return <Profile />
    }
  }

  render() {
    return (
      <div>
        { this.switchView() }
      </div>
    )
  }
}

export default App;