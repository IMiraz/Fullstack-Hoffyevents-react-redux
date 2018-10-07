import React, { Component } from 'react'
import EventListItem  from './eventListItem/'

 class EventList extends Component {
  render() {

     const {events, handlerEditEventOpen} = this.props;
    return (
      <div>
      <h1>Event List</h1>
       {events.reverse().map(event => (
        <EventListItem key={event.id} event={event} handlerEditEventOpen={handlerEditEventOpen} />
       ))}

      </div>
    )
  }
}
export default EventList
