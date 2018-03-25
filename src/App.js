import React, { Component } from 'react';
import Classroom from './components/classroom/Classroom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'room'
    }
  }

  switchView() {
    var currentView = this.state.currentView;

    if (currentView === 'room') {
      return <Classroom />
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