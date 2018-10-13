import React from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import {connect} from 'react-redux'
import EventDetailedHeader from './eventDetailedHeader'
import EventDetailedInfo from './eventDetailedInfo'
import EventDetailedChat from './eventDetailedChat'
import EventDetailedSidebar  from './eventDetailedSidebar'
import { stat } from 'fs';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {}
   if(eventId && state.event.length > 0)
   {
     event = state.event.filter(event => event.id === eventId)[0]
   }

   return {
      event
   }

}

const EventDetailedPage = ({event}) => {
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

export default connect(mapStateToProps) (EventDetailedPage)
