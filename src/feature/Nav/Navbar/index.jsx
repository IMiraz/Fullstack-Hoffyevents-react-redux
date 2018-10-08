import React, { Component } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link} from 'react-router-dom'
import SignedInMenu from '../signenInMenu'
import SignOutMenu from '../SignOutMenu'

 class Navbar extends Component {
  render() {
    return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header as={Link} to="/">
                    <img src="assets/logo.png" alt="logo" />
                    Hoffyevents
                  </Menu.Item>
                  <Menu.Item name="Events" as={NavLink} to="/events" />
                  <Menu.Item name="People" as={NavLink} to="/people" />
                  <Menu.Item>
                    <Button floated="right" positive inverted content="Create Event" />
                  </Menu.Item>
                  <SignedInMenu/>
                  <SignOutMenu/>


                </Container>
              </Menu>
    )
  }

}

export default Navbar