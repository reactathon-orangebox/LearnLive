import React, { Component } from 'react';
import axios from 'axios';
import Profile from './components/profile_page/profile.js';
import Navbar from './components/navbar/Navbar2.js'
import Hero from './components/home/Hero.js';
import SubjectsView from './components/subjects/SubjectsView.jsx';
import Navbar2 from './components/navbar/Navbar2.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profile',
      currentUser: 'dangitskang',
      currentRole: 'publisher'
    }
    this.onTeacherClick = this.onTeacherClick.bind(this);
  }

  userLogin(user) {
    axios.get(`/.netlify/functions/userRoles?user=${user}`)
      .then(response => {
        this.setState({currentRole: response.data.role})
      });
  }

  changeView(view) {
    this.setState({currentView: view})
  }

  onTeacherClick(view) {
    this.setState({ currentView: view });
  }

  switchView() {
    var currentView = this.state.currentView;

    if(currentView === 'profile') {
      return <Profile user={this.state.currentUser} role={this.state.currentRole} />
    } else if(currentView === 'home'){
      return <Hero /> 
    } else if ( currentView === 'subjects') {
      return <SubjectsView onTeacherClick={this.onTeacherClick}/>
    }
  }

  render() {

    return (
      <div>
        <Navbar2 
          switch={this.changeView.bind(this)}
          login={this.userLogin.bind(this)}
        />
        <div>
          { this.switchView() }
        </div>
      </div>
    )
  }
}

export default App;