import React, { Component } from 'react'
import { Segment, Item, Icon, List,Button, Image } from 'semantic-ui-react'
import EventListAttende from '../eventListAttende/index'

 class EventListItem extends Component {
  render() {
    return (
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular src="https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725565_vVl8Hc6kIRQsgquqdQYrz7fWFrfQAGCw.jpg" />
                      <Item.Content>
                        <Item.Header as="a">Event Title</Item.Header>
                        <Item.Description>
                          Hosted by <a>hosted by</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> date |
                    <Icon name="marker" /> time
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                  <EventListAttende/>
                  <EventListAttende/>
                  <EventListAttende/>
                  <EventListAttende/>
                  </List>
                </Segment>
                <Segment clearing>
                <span>Description Will go here</span>
                  <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>

    )
  }
}

export default EventListItem