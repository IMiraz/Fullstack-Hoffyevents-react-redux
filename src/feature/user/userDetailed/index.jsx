import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'
import UserDetailedSideBar from './userdetailedSidebar'
import UserDetailedPhotos from './userDetailedPhotos'
import UserDetailedEvent from './userDetailedEvent'
import {connect} from 'react-redux'

const  mapState = state => ({
    profile:state.firebase.profile
})

class UserDetailedPage extends Component {

    render() {
       const  {profile} = this.props;
        return (
            <Grid>
              <UserdetailedHeader profile={profile}/>
              <UserDetailedDescription/>
              <UserDetailedSideBar/>
              <UserDetailedPhotos/>
              <UserDetailedEvent/>
              
            </Grid>

        );
    }
}

export default connect(mapState) (UserDetailedPage);