import React, { Component } from 'react';
import Profile from './components/profile_page/profile.js';
import Hero from './components/home/Hero.js';
import Navbar2 from './components/navbar/Navbar2.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profile',
      currentUser: 'larrychangg',

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
    }
  }

  render() {

    return (
      <div>
        <Navbar2 />
        <div>
          { this.switchView() }
        </div>
      </div>
    )
  }
}

export default App;