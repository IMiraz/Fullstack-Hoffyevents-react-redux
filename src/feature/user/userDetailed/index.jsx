import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'

import {firestoreConnect, isEmpty} from 'react-redux-firebase'
import {compose} from 'redux'
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'
import UserDetailedSideBar from './userdetailedSidebar'
import UserDetailedPhotos from './userDetailedPhotos'
import UserDetailedEvent from './userDetailedEvent'
import {UserDetailedQuery} from '../userQuery'
import LoadingComponent from '../../Loader'
import {getUserEvents, followUser} from '../userActionCreator/index'




const  mapState =(state, ownProps)=> {
    let userUid = null;
    let profile= {};

            if(ownProps.match.params.id === state.auth.uid)
            {
            profile = state.firebase.profile 
            }
            else {
                profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0]
                userUid = ownProps.match.params.id;
            }

     return {
        events:state.event,
        eventLoading:state.async.loading,
        profile,
        userUid, 
        auth:state.firebase.auth,
        photos:state.firestore.ordered.photos,
        requesting:state.firestore.status.requesting,
        following:state.firestore.ordered.following
     }
   
}

const actions = {
    getUserEvents,
    followUser
}



class UserDetailedPage extends Component {

    async componentDidMount() {
        let events = await this.props.getUserEvents(this.props.userUid);

    }


    changeTab = (e, data) => {
        this.props.getUserEvents(this.props.userUid, data.activeIndex)
       }

    render() {

       const  {profile, auth, photos, match, requesting, events, eventLoading, followUser, following } = this.props;
          console.log('following data', following);
       const isCurrentUser = auth.uid === match.params.id;
       const isFollowing=!isEmpty(following)
       console.log('isFollowing',isFollowing)
 const loading=Object.values(requesting).some(a => a === true);

  if(loading) return <LoadingComponent inverted={true}/>
        return (
            <Grid>
              <UserdetailedHeader profile={profile}/>
              <UserDetailedDescription profile={profile}/>
              <UserDetailedSideBar profile={profile} isFollowing={isFollowing} followUser={followUser} isCurrentUser={isCurrentUser}/>
              <UserDetailedPhotos photos={photos}/>
              <UserDetailedEvent events={events} eventLoading={eventLoading} changeTab={this.changeTab}/>
              
            </Grid>

        );
    }
}

export default compose(
    connect(mapState, actions),
  firestoreConnect((auth, userUid, match )=> UserDetailedQuery(auth, userUid, match))
)  (UserDetailedPage);