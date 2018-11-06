import React from 'react'
import{Card, Menu, Segment, Grid, Image,Header} from 'semantic-ui-react'
import format from 'date-fns/format'

const  UserDetailedEvent = () => {
    console.log('eventsdatafromevent', events)
  return (
    <Grid.Column width={12}>
    <Segment attached loading={eventsLoading}>
        <Header icon='calendar' content='Events'/>
        <Menu secondary pointing>
            <Menu.Item name='All Events' active/>
            <Menu.Item name='Past Events'/>
            <Menu.Item name='Future Events'/>
            <Menu.Item name='Events Hosted'/>
        </Menu>

        <Card.Group itemsPerRow={5}>
        
  
      
            <Card key={event.id}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`}/>
                <Card.Content>
                    <Card.Header textAlign='center'>
                        {event.title}
                    </Card.Header>
                    <Card.Meta textAlign='center'>
                       <div>{format(event.date && event.date.toDate(), 'DD MM YYYY')}</div>
                       <div>{format(event.date && event.date.toDate(), 'h:mm A')}</div>
                    </Card.Meta>
                </Card.Content>
            </Card>
 
            


        </Card.Group>
    </Segment>
</Grid.Column>
    
  )
}

export default  UserDetailedEvent