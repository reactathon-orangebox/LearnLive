import React, { Component } from 'react';
import Profile from './components/profile_page/profile.js';
import Navbar from './components/navbar/Navbar2.js'
import Hero from './components/home/Hero.js';
import SubjectsView from './components/subjects/SubjectsView.jsx';
import Navbar2 from './components/navbar/Navbar2.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'subjects',
      currentUser: 'larrychangg',
    }
    this.onTeacherClick = this.onTeacherClick.bind(this);
  }

  userLogin(user) {
    this.setState({ currentUser: user });
  }

  onTeacherClick(view) {
    this.setState({ currentView: view });
  }

  switchView() {
    var currentView = this.state.currentView;

    if(currentView === 'profile') {
      return <Profile user={this.state.currentUser} />
    } else if(currentView === 'home'){
      return <Hero /> 
    } else if ( currentView === 'subjects') {
      return <SubjectsView onTeacherClick={this.onTeacherClick}/>
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