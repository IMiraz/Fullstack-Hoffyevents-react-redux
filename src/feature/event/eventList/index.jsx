import React, { Component } from 'react'
import EventListItem  from './eventListItem/'

 class EventList extends Component {
  render() {

     const {events, deleteEvent } = this.props;
     console.log(events)
    return (
      <div>
       {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}

      </div>
    )
  }
}
export default EventList
