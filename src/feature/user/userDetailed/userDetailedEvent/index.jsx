import React from 'react'
import{Card, Menu, Segment, Grid, Image,Header, Tab} from 'semantic-ui-react'
import format from 'date-fns/format'

const panes = [
    {menuItem:'All Events', panes:{key:'allEvents'}},
    {menuItem:'Past Events', panes:{key:'pastEvents'}},
    {menuItem:'Fututer Events', panes:{key:'futureEvents'}},
    {menuItem:'Hosting', panes:{key:'hosted'}},
]


const  UserDetailedEvent = ({events, eventLoading, changeTab}) => {
  return (
    <Grid.Column width={12}>
    <Segment attached loading={eventLoading}>
        <Header icon='calendar' content='Events'/>
       <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary:true, pointing:true}}/>
 <br/>
        <Card.Group itemsPerRow={5}>
  
      {events && events.map(event => (
          <Card key={event.id}>
          <Image src={`/assets/categoryImages/${event.category}.jpg`}/>
          <Card.Content>
              <Card.Header textAlign='center'>
                  {event.title}
              </Card.Header>
              <Card.Meta textAlign='center'>
              <div>{format(event.date && event.date.toDate(), 'DD MMM YYYY')}</div>
              <div>{format(event.date && event.date.toDate(), 'h:mm A')}</div>
              </Card.Meta>
          </Card.Content>
      </Card>

      ))}
            
 
            


        </Card.Group>
    </Segment>
</Grid.Column>
    
  )
}

export default  UserDetailedEvent