import React, { Component } from 'react'

import {List , Image, ListIcon, ListItem} from 'semantic-ui-react'

 class eventListAttende extends Component {
  render() {
    return (
      <ListItem>
      <Image as="a" size="mini" circular src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYERCqZ1DunHMgZ1S4ict2pPvSh5BfmBY9yjbeRZTal28yr2WPmg"/>
       </ListItem>
    )
  }
}

export default eventListAttende