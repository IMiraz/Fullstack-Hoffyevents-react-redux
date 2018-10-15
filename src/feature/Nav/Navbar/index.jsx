import React, { Component } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SignedInMenu from '../signenInMenu'
import SignOutMenu from '../SignOutMenu'
import {openModal}  from '../../Modal/modalActCreator/index'
import {logout} from '../../auth/authActionsCreator'

const  actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth:state.auth
})

 class Navbar extends Component {
   

   handleSignout = () => {
     this.props.logout()
    
     this.props.history.push('/')

   }

   handleSigin = () => {
    this.props.openModal('LoginModal')


   }

   handlerRegister = () => {
       this.props.openModal('RegisterModal')
   }

  render() { 
     const {auth} = this.props;
     const authenticated=auth.authenticated
    return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header as={Link} to="/">
                    <img src="/assets/logo.png" alt="logo" />
                    Hoffyevents
                  </Menu.Item>
                  <Menu.Item name="Events" as={NavLink} to="/events" />
                  <Menu.Item name="Test" as={NavLink} to="/test" />
                  {authenticated &&
                  <Menu.Item name="People" as={NavLink} to="/people" />
                  }
                  {authenticated &&
                  <Menu.Item>
                    <Button
                    floated="right"
                     as={Link}
                     to="/createEvent"
                    positive inverted content="Create Event" />
                  </Menu.Item>
                }
                  {authenticated ?<SignedInMenu currentUser={auth.currentUser} handleSignout={this.handleSignout} /> : <SignOutMenu handleSigin={this.handleSigin}  handlerRegister={this. handlerRegister}/> }




                </Container>
              </Menu>
    )
  }

}

export default withRouter(connect(mapState, actions)(Navbar))