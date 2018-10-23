import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'
import UserDetailedSideBar from './userdetailedSidebar'
import UserDetailedPhotos from './userDetailedPhotos'
import UserDetailedEvent from './userDetailedEvent'


const query=({auth}) => {
    return [
          {
              collection:'users',
              doc:auth.uid,
              subcollections:[{collection:'photos'}],
              storeAs:'photos'
          }
    ]
}


const  mapState = state => ({
    profile:state.firebase.profile,
    auth:state.firebase.auth,
    photos:state.firestore.ordered.photos
})

class UserDetailedPage extends Component {

    render() {
       const  {profile, auth, photos} = this.props;
        return (
            <Grid>
              <UserdetailedHeader profile={profile}/>
              <UserDetailedDescription profile={profile}/>
              <UserDetailedSideBar/>
              <UserDetailedPhotos photos={photos}/>
              <UserDetailedEvent/>
              
            </Grid>

        );
    }
}

export default compose(
    connect(mapState),
  firestoreConnect(auth =>query(auth))
)  (UserDetailedPage);