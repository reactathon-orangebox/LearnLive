import React, { Component } from 'react';
import Classroom from './components/classroom/Classroom';
import Profile from './components/profile_page/profile.js';
import Navbar from './components/navbar/Navbar';

import users from './sampleData/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profile',
      currentUser: 'larrychangg'
    }
  }

  userLogin(user) {
    this.setState({ currentUser: user });
  }

  switchView() {
    var currentView = this.state.currentView;

    if (currentView === 'room') {
      return <Classroom />
    } else if (currentView === 'profile') {
      return <Profile user={this.state.currentUser} />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.switchView() }
      </div>
    )
  }
}

export default App;