import React, { Component } from 'react'
import { Grid, GridColumn, Loader } from 'semantic-ui-react';
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
    moreEvents:false,
    initalLoding:true,
    loadedEvents:[]
   }

  async componentDidMount() {
   let next = await this.props.getEventsForDashboard()
   console.log('next',next)

   if(next && next.docs && next.docs.length > 1) {
     this.setState({
       moreEvents:true,
       initalLoding:false
     })
   }

  }

  componentWillReceiveProps(nextProps){
    if(this.props.events !== nextProps.events)
    {
       this.setState({
         loadedEvents:[...this.state.loadedEvents, ...nextProps.events]
       })
    }

  }

  getNextEvents = async () => {
    const {events}= this.props;
    let lastEvent = events && events[events.length -1];
    console.log(lastEvent);
    let next = await this.props.getEventsForDashboard(lastEvent);
    console.log(next);
    if(next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreEvents:false
      })
    }


  }

  render()
  {
    console.log(this.state.loadedEvents)
    const {events, loading} = this.props;
    const {moreEvents, loadedEvents}= this.state;
 
    if(this.state.initalLoding) return <LoaderComponent inverted={true}/>
  
    return (
        <Grid>
           <GridColumn width={10}> 
           <EventList
           events={loadedEvents}
           loading={loading}
           moreEvents={moreEvents}
           getNextEvents={this.getNextEvents}
    
            />
 {/* this is more events button  paging:P */}
            {/* <Button 
            onClick={this.getNextEvents} 
            disabled={!this.state.moreEvesnt}
             content="More"
            color="green"
            floated="right"
            loading={loading}
            /> */}
          
           </GridColumn>
           <GridColumn width={6}>
           </GridColumn>
           <GridColumn width={10}>
          <Loader active={loading}/>
           </GridColumn>
        </Grid>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection:'events'}])(EventDashboard));
