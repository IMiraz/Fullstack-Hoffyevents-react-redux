import React from 'react'

import {Segment, List, Label, Item} from 'semantic-ui-react'

const eventDetailedSidebar = ({attendees}) => {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
       {attendees && attendees.length} {attendees && attendees.length ==1? 'person':'people'}
     
      </Segment>
      <Segment attached>
        <List relaxed divided>

        {attendees && attendees.map(attened => (
 <Item key={attened.id} style={{ position: 'relative' }}>
 <Label
   style={{ position: 'absolute' }}
   color="orange"
   ribbon="right"
 >
   Host
 </Label>
 <Item.Image size="tiny" src="/assets/user.png" />
 <Item.Content verticalAlign="middle">
   <Item.Header as="h3">
     <a>{attened.name}</a>
   </Item.Header>
 </Item.Content>
</Item>
        ))}
         
        </List>
      </Segment>
    </div>
  )
}
export default eventDetailedSidebar