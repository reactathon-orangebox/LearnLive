import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile_page/profile';
import SubjectsView from './components/subjects/SubjectsView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'subjects',
      currentUser: 'stphnchoe'
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
    let { currentView } = this.state;

    if (currentView === 'profile') {
      return <Profile />;
    } else if (currentView === 'subjects') {
      return <SubjectsView onTeacherClick={this.onTeacherClick}/>;
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
