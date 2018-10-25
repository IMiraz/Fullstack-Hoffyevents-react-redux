import React, { Component } from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import {withFirestore} from 'react-redux-firebase'
import {toastr} from 'react-redux-toastr'
import {connect} from 'react-redux'
import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'
import {objectToArray} from '../../../common/util/helpers'


const mapStateToProps = (state) => {
 
  let event = {}
   if(state.firestore.ordered.events && state.firestore.ordered.events[0])
   {
     event = state.firestore.ordered.events[0]
   }

   return {
      event,
      auth:state.firebase.auth
      
   }

}


class EventDetailedPage extends Component {

 async componentDidMount() {
   const {firestore , match, history} = this.props;
   let event = await firestore.get(`events/${match.params.id}`);
   if(!event.exists) {
     history.push('/events');
     toastr.error('error', 'No event found')
     
   }
  
 }



  render() {
     const {event, auth} = this.props
     const attendees =  event &&  event.attendees && objectToArray(event.attendees);
     const isHost = event.hostUid === auth.uid;
     const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    return (
      <div>
        <Grid>
      <GridColumn width={10}>
      <EventDetailedHeader event={event} isHost ={isHost} isGoing={isGoing}/>
      <EventDetailedInfo event={event}/>
      <EventDetailedChat event={event}/>
      </GridColumn>
      <GridColumn width={6}>
       <EventDetailedSidebar attendees={attendees}/>
     </GridColumn>

    </Grid>
      </div>
    )
  }
}

export default withFirestore(connect(mapStateToProps) (EventDetailedPage))
