import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../eventList'
import EventForm from '../eventForm'
import {connect}  from 'react-redux'
import cuid from 'cuid'
import { deleteEvent} from '../../event/eventActions/actionsCreator'

const mapState = state => ({
  events: state.event,
  loading: state.async.loading
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
    console.log(this.props.events)
 
    if(this.props.loading) return <p>Loading....</p>
  
    return (
        <Grid>
           <GridColumn width={10}> 
           <EventList
           events={this.props.events}
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

export default connect(mapState, actions)(EventDashboard);
