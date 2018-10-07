import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../eventList'
import EventForm from '../eventForm'
import cuid from 'cuid'

const eventsData = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },

  {
    id: '2',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },

  {
    id: '09',
    title: 'Trip to Tower of London',
    date: '2016-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '4',
    title: 'Trip to Punch and Judy Pub',
    date: '2015-03-27',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {

  state = {
    events:eventsData,
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
  const updateEvents = [...this.state.events, newEvent]
  this.setState({
    events:updateEvents,
    isFormOpen:false
  })

}
handlerEditEventOpen= (eventToOpen) =>() => {
  this.setState({
     selectEvent:eventToOpen,
     isFormOpen:true
  })



}

  render()
  {

    return (
        <Grid>
           <GridColumn width={10}>
           <EventList
           events={this.state.events}
           handlerEditEventOpen={this.handlerEditEventOpen}
            />
           </GridColumn>
           <GridColumn width={6}>
           <Button positive  onClick={this.handlerFormOpen} content='Create Event'/>
          {this.state.isFormOpen &&
            <EventForm
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

export default EventDashboard
