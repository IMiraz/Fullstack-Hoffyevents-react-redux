import React, { Component } from 'react'
import EventListItem  from './eventListItem/'

 class EventList extends Component {
  render() {

     const {events, handlerEditEvent} = this.props;
    return (
      <div>
      <h1>Event List</h1>
       {events.reverse().map(event => (
        <EventListItem key={event.id} event={event} handlerEditEvent={handlerEditEvent} />
       ))}

      </div>
    )
  }
}
export default EventList
