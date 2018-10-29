import React from 'react'

import {Segment, List, Label, Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const eventDetailedSidebar = ({attendees,isHost}) => {
  console.log(isHost)
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
 
 {/* <Label
//    style={{ position: 'absolute' }}
//    color="orange"
//    ribbon="right"
//  >
 
 </Label> */}

 <Item.Image size="tiny" as={Link} to={`/profile/${attendees.id}`} src={attened.photoURL} />
 <Item.Content verticalAlign="middle">
   <Item.Header as="h3">
     <Link to={`/profile/${attendees.id}`}>{attened.displayName}</Link>
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