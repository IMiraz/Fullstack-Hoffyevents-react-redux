import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../eventList'
import EventForm from '../eventForm'

class EventDashboard extends Component {
  render() {
    return (
        <Grid>
           <GridColumn width={10}>
           <EventList/>

           </GridColumn>
           <GridColumn width={6}>
           <Button positive content='Create Event'/>
<EventForm/>
           </GridColumn>


        </Grid>
    )
  }
}

export default EventDashboard
