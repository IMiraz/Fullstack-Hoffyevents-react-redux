import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import EventList from '../eventList'
import EventForm from '../eventForm'
import {connect}  from 'react-redux'
import cuid from 'cuid'
import {getEventsForDashboard} from '../../event/eventActions/actionsCreator'
import LoaderComponent from '../../Loader'

const mapState = state => ({
  events:state.event,
  loading:state.async.loading
});


const actions ={
 getEventsForDashboard
}



class EventDashboard extends Component {

  componentDidMount() {
    this.props.getEventsForDashboard()
  }




  render()
  {
    const {events, loading} = this.props
 
    if(loading) return <LoaderComponent inverted={true}/>
  
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
