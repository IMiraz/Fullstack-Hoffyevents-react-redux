import React, { Component } from 'react';
import { Button  } from 'semantic-ui-react';
import EeventDashboard from '../feature/event/eventDashboard'
import EventDashboard from '../feature/event/eventDashboard';

class App extends Component {
  render() {
    return (
      <div>
      <EventDashboard/>
      </div>
    );
  }
}

export default App;
