import React, { Component } from 'react';
import Classroom from './components/classroom/Classroom';
import Profile from './components/profile_page/profile';
import SubjectsView from './components/subjects/SubjectsView';

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
    let { currentView } = this.state;

    if (currentView === 'room') {
      return <Classroom />;
    } else if (currentView === 'profile') {
      return <Profile />;
    } else if (currentView === 'subjects') {
      return <SubjectsView />;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.switchView() }
      </div>
    );
  }
}

export default App;