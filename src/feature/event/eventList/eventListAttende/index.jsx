import React, { Component } from 'react'

import {List , Image, ListIcon, ListItem} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

 class eventListAttende extends Component {
  render() {
      const {attendee} = this.props;
    return (
      <ListItem>
        {attendee && 
         <Image as={Link} to={`/profile/${attendee.id}`} size="mini" circular src={attendee.photoURL}/>
        }
     
       </ListItem>
    )
  }
}

export default eventListAttende