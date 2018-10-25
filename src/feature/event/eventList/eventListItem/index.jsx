import React, { Component } from 'react'
import format from 'date-fns/format'
import { Segment, Item, Icon, List,Button, Image, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EventListAttende from '../eventListAttende/index'
import {objectToArray} from '../../../../common/util/helpers'

 class EventListItem extends Component {
  render() {
       const {event} = this.props
    return (
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                      <Item.Content>
                        <Item.Header as={Link} to={`event/${event.id}`}>{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <Link to={`profile/${event.hostUid}`}>{event.hostedBy}</Link>
                        </Item.Description>
                        {event.cancelled && 
                        <Label style={{top:'-50px'}} ribbon='right' color="red" content="this event has been canceled "/> }
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {format(event.date.toDate(), 'dddd Do MMMM')} at{format(event.date.toDate(), 'h:mm A')}|
                    <Icon name="marker" /> {event.venue}

                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                   {event.attendees &&  
                   objectToArray(event.attendees).map((attendee) => (
            <EventListAttende key={attendee.id} attendee={attendee}/>
                   ))}

                  </List>
                </Segment>
                <Segment clearing>
                <span>{event.description}</span>
               
                  {/* <Button as="a" onClick={handlerEditEventOpen(event)} color="teal" floated="right" content="View" /> */}
                  <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>

    )
  }
}

export default EventListItem