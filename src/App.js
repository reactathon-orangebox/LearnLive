import React, { Component } from 'react';
import Profile from './components/profile_page/profile.js';
import Hero from './components/home/Hero.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profile',
      currentUser: 'larrychangg',
      currentView: 'home'
    }
  }

  userLogin(user) {
    this.setState({ currentUser: user });
  }

  switchView() {
    var currentView = this.state.currentView;

    if(currentView === 'profile') {
      return <Profile user={this.state.currentUser} />
    } else if(currentView === 'home'){
      return <Hero />
    } else if(currentView === 'profile'){
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