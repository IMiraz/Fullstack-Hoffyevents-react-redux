import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../eventList'
import EventForm from '../eventForm'
import {connect}  from 'react-redux'
import cuid from 'cuid'
import {createEvent, deleteEvent, updateEvent} from '../../event/eventActions/actionsCreator'

const maspState = (state) => 
({
  eventDatas:state.event
})


const actions ={
  createEvent,
  deleteEvent,
  updateEvent
  
}



class EventDashboard extends Component {

  
  state = {
    isFormOpen:false,
    selectEvent:null
  }

handlerFormOpen = () => {
  this.setState({
     selectEvent:null,
     isFormOpen:true
  })
}

  handlerFormCancle = () => {
    this.setState({
       isFormOpen:false
    })
}

handlerCreateNewEvent = (newEvent) => {

  newEvent.id=cuid(),
  newEvent.hostPhotoURL='/assets/user.png';
  this.props.createEvent(newEvent);
  // const updateEvents = [...this.state.events, newEvent]
  // this.setState({
  //   events:updateEvents,
  //   isFormOpen:false
  // })

  this.setState({
     isFormOpen:false
  })

}

handlerEditEventOpen= (eventToOpen) =>() => {
  this.setState({
     selectEvent:eventToOpen,
     isFormOpen:true
  })

}
handleUpdateEvent = (updatedEvent) => {

  this.props.updateEvent(updatedEvent);
  // this.setState({
  //   events:this.state.events.map(event => {
  //      if(event.id === updatedEvent.id) {
  //        return Object.assign({}, updatedEvent);
  //      }
  //      else {
  //        return event
  //      }
  //   }),
  //   isFormOpen:false,
  //   selectEvent:null

  // })

}



handleDeleteEvent = (eventId) => () => {

  this.props.deleteEvent(eventId);
  // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
  // this.setState({
  //   events: updatedEvents
  // })
}

  render()
  {
   // console.log(this.props.createEvent);
    //const  {eventDatas} = this.props

    return (
        <Grid>
           <GridColumn width={10}>
           <EventList
           events={this.props.eventDatas}
           handlerEditEventOpen={this.handlerEditEventOpen}
deleteEvent={this.handleDeleteEvent}


            />
           </GridColumn>
           <GridColumn width={6}>
           <Button positive  onClick={this.handlerFormOpen} content='Create Event'/>
          {this.state.isFormOpen &&
            <EventForm
            handleUpdateEvent={this.handleUpdateEvent}
            selectEvent={this.state.selectEvent}
            handlerFormCancle={this.handlerFormCancle}
            handlerCreateNewEvent={this.handlerCreateNewEvent}
            />
          }
           </GridColumn>
        </Grid>
    )
  }
}

export default connect(maspState, actions) (EventDashboard)
