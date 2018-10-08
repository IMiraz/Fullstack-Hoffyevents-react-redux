import React, { Component } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom'
import SignedInMenu from '../signenInMenu'
import SignOutMenu from '../SignOutMenu'

 class Navbar extends Component {
   state = {
     isAuthenticated:false

   }

   handleSignout = () => {
     this.setState({
        isAuthenticated:false
     })

     this.props.history.push('/')

   }

   handleSigin = () => {
     this.setState({
         isAuthenticated:true
     })

   }
  render() {
     const {isAuthenticated} = this.state;
    return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header as={Link} to="/">
                    <img src="assets/logo.png" alt="logo" />
                    Hoffyevents
                  </Menu.Item>
                  <Menu.Item name="Events" as={NavLink} to="/events" />
                  {isAuthenticated &&
                  <Menu.Item name="People" as={NavLink} to="/people" />
                  }
                  {isAuthenticated &&
                  <Menu.Item>
                    <Button
                    floated="right"
                    positive inverted content="Create Event" />
                  </Menu.Item>
                }
                  {isAuthenticated ?<SignedInMenu handleSignout={this.handleSignout} /> : <SignOutMenu handleSigin={this.handleSigin}/> }




                </Container>
              </Menu>
    )
  }

}

export default withRouter(Navbar)