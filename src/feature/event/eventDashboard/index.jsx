import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import EventList from '../eventList'
import EventForm from '../eventForm'
import {connect}  from 'react-redux'
import cuid from 'cuid'
import { deleteEvent} from '../../event/eventActions/actionsCreator'
import LoaderComponent from '../../Loader'

const mapState = state => ({
  events: state.firestore.ordered.events,

});


const actions ={
  deleteEvent
}



class EventDashboard extends Component {



handleDeleteEvent = (eventId) => () => {

  this.props.deleteEvent(eventId);
  // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
  // this.setState({
  //   events: updatedEvents
  // })
}

  render()
  {
    const {events} = this.props
 
    if(!isLoaded(events)|| isEmpty(events)) return <LoaderComponent inverted={true}/>
  
    return (
        <Grid>
           <GridColumn width={10}> 
           <EventList
           events={events}
           handlerEditEventOpen={this.handlerEditEventOpen}
          deleteEvent={this.handleDeleteEvent}
            />
          
           </GridColumn>
           <GridColumn width={6}>
          
           </GridColumn>
        </Grid>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection:'events'}])(EventDashboard));
