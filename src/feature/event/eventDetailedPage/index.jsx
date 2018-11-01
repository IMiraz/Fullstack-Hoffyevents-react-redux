import React, { Component } from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import {withFirestore, firebaseConnect,isEmpty} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'
import {objectToArray, createDataTree} from '../../../common/util/helpers'
import {goingEvent,CancelGoingToEvent} from '../../user/userActionCreator'
import {addEventComment} from '../eventActions/actionsCreator'


const mapStateToProps = (state, ownProps) => {
 
  let event = {}
   if(state.firestore.ordered.events && state.firestore.ordered.events[0])
   {
     event = state.firestore.ordered.events[0]
   }

   return {
      event,
      auth:state.firebase.auth,
      eventChat: !isEmpty(state.firebase.data.event_chat) &&
      objectToArray(state.firebase.data.event_chat[ownProps.match.params.id]) 
   }

}

const actions = {
  goingEvent,
  CancelGoingToEvent,
  addEventComment
  
} 


class EventDetailedPage extends Component {

 async componentDidMount() {
   const {firestore , match, history, event_chat} = this.props;
   await firestore.setListener(`events/${match.params.id}`);
  }

  async componentWillUnmount(){
    const {firestore , match, history} = this.props;
   await firestore.unsetListener(`events/${match.params.id}`);
  }



  render() {
     const {event, auth, goingEvent, CancelGoingToEvent, addEventComment, eventChat} = this.props
     const attendees =  event &&  event.attendees && objectToArray(event.attendees);
     const isHost = event.hostUid === auth.uid;
     const isGoing = attendees && attendees.some(a => a.id === auth.uid);
     const chatTree = !isEmpty(eventChat) && createDataTree(eventChat) 
    return (
      <div>
        <Grid>
      <GridColumn width={10}>
      <EventDetailedHeader 
      event={event} 
      isHost ={isHost}
      isGoing={isGoing}
      goingEvent={goingEvent}
      CancelGoingToEvent={CancelGoingToEvent}
      />
      <EventDetailedInfo event={event}/>
      <EventDetailedChat
       addEventComment={addEventComment}
       eventId={event.id}
       eventChat={chatTree}
       />
      </GridColumn>
      <GridColumn width={6}>
       <EventDetailedSidebar
        attendees={attendees}
        isHost={isHost}
        />
     </GridColumn>

    </Grid>
      </div>
    )
  }
}

export default compose(
  withFirestore,
  connect(mapStateToProps, actions),
  firebaseConnect((props) => ([`event_chat/${props.match.params.id}`]))
)   (EventDetailedPage)
