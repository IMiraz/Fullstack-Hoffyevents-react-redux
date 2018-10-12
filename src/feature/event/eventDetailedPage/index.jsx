import React from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'

import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfos from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'


const EventDetailedPage = () => {
  return (
    <div>
    <Grid>
      <GridColumn width={10}>
      <EventDetailedHeader/>
      <EventDetailedInfos/>
      <EventDetailedChat/>
    
      </GridColumn>
      <GridColumn width={6}>
       <EventDetailedSidebar/>
 </GridColumn>

    </Grid>

    </div>
  )
}

export default EventDetailedPage
