import React, { Component } from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import {withFirestore} from 'react-redux-firebase'
import {connect} from 'react-redux'
import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'


const mapStateToProps = (state) => {
 
  let event = {}
   if(state.firestore.ordered.events && state.firestore.ordered.events[0])
   {
     event = state.firestore.ordered.events[0]
   }

   return {
      event
   }

}


class EventDetailedPage extends Component {

 async componentDidMount() {
   const {firestore , match, history} = this.props;
   let event = await firestore.get(`events/${match.params.id}`);
  
 }



  render() {
     const {event} = this.props
    return (
      <div>
        <Grid>
      <GridColumn width={10}>
      <EventDetailedHeader event={event}/>
      <EventDetailedInfo event={event}/>
      <EventDetailedChat event={event}/>
      </GridColumn>
      <GridColumn width={6}>
       {/* <EventDetailedSidebar attendees={event.attendees}/> */}
     </GridColumn>

    </Grid>
      </div>
    )
  }
}

export default withFirestore(connect(mapStateToProps) (EventDetailedPage))
