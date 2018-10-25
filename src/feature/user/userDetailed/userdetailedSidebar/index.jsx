import React from 'react'
import {Grid, Segment, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SideBar=({isCurrentUser}) => {
  return (
                  <Grid.Column width={4}>
                    <Segment>
                      {isCurrentUser? 
                        <Button as={Link} to="/settings" color='teal' fluid basic content='Edit Profile'/>:
                        <Button as={Link} to="" color='teal' fluid basic content='Follow User'/>
                      }
                    </Segment>
                </Grid.Column>
  )
}

export default SideBar
