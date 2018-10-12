import React from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'

import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'

const event=
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
  }



const EventDetailedPage = () => {
  return (
    <div>
    <Grid>
      <GridColumn width={10}>
      <EventDetailedHeader event={event}/>
      <EventDetailedInfo event={event}/>
      <EventDetailedChat event={event}/>
    
      </GridColumn>
      <GridColumn width={6}>
       <EventDetailedSidebar attendees={event.attendees}/>
 </GridColumn>

    </Grid>

    </div>
  )
}

export default EventDetailedPage
