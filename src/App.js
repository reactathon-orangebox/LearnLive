import React, { Component } from 'react';
import Classroom from './components/classroom/Classroom';
import Profile from './components/profile_page/profile.js';
import Hero from './components/home/Hero.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'home'
    }
  }

  switchView() {
    var currentView = this.state.currentView;

    if(currentView === 'home'){
      return <Hero />
    } else if (currentView === 'room') {
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