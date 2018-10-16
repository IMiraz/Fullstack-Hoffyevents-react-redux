import React, { Component } from 'react'
import format from 'date-fns/format'
import { Segment, Item, Icon, List,Button, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import EventListAttende from '../eventListAttende/index'

 class EventListItem extends Component {
  render() {
       const {event, deleteEvent} = this.props
    return (
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                      <Item.Content>
                        <Item.Header as="a">{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <a>{event.hostedBy}</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {format(event.date, 'dddd Do MMMM')} at{''}{format(event.date, 'h:mm A')}|
                    <Icon name="marker" /> {event.venue}

                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                   {event.attendees &&  event.attendees.map(attendee => (
            <EventListAttende key={attendee.id} attendee={attendee}/>
                   ))}

                  </List>
                </Segment>
                <Segment clearing>
                <span>{event.description}</span>
                <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                  {/* <Button as="a" onClick={handlerEditEventOpen(event)} color="teal" floated="right" content="View" /> */}
                  <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>

    )
  }
}

export default EventListItem