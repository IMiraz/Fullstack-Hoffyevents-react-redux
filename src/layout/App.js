import React, { Component } from 'react';
import { Button, Container  } from 'semantic-ui-react';
import EeventDashboard from '../feature/event/eventDashboard';
import NavBar from '../feature/Nav/Navbar/'

class App extends Component {
  render() {

    return (
      <div>
      <NavBar/>

      <Container className="main">
      <EeventDashboard/>

      </Container>
      </div>
    );
  }
}

export default App;
