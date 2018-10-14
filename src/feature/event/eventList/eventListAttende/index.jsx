import React, { Component } from 'react'

import {List , Image, ListIcon, ListItem} from 'semantic-ui-react'

 class eventListAttende extends Component {
  render() {
      const {attendee} = this.props;
    return (
      <ListItem>
        {attendee && 
         <Image as="a" size="mini" circular src={attendee.photoURL}/>
        }
     
       </ListItem>
    )
  }
}

export default eventListAttende