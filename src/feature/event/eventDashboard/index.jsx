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

   state = {
    moreEvesnt:false
   }

  async componentDidMount() {
   let next = await this.props.getEventsForDashboard()
   console.log('next',next)

   if(next && next.docs && next.docs.length > 1) {
     this.setState({
       moreEvesnt:true
     })
   }

  }

  getNextEvents = async () => {
    const {events}= this.props;
    let lastEvent = events && events[events.length -1];
    console.log(lastEvent);
    let next = await this.props.getEventsForDashboard(lastEvent);
    console.log(next);
    if(next && next.docs.length <= 1) {
      this.setState({
        moreEvesnt:false
      })
    }


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

            <Button 
            onClick={this.getNextEvents} 
            disabled={!this.state.moreEvesnt}
            content="More"
            color="green"
            floated="right"
            />
          
           </GridColumn>
           <GridColumn width={6}>
    
           </GridColumn>
        </Grid>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection:'events'}])(EventDashboard));
