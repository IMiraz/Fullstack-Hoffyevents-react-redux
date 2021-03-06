import React from 'react'
import {Grid, Segment, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SideBar=({isCurrentUser, profile, followUser, isFollowing}) => {
  return (
                  <Grid.Column width={4}>
                    <Segment>
                      {isCurrentUser && (
                        <Button as={Link} to="/settings" color='teal' fluid basic content='Edit Profile'/>
                       )} 
                       {!isCurrentUser && !isFollowing && (
                 <Button onClick={() => followUser(profile)} color='teal' fluid basic content='Follow User'/>

                       )
                        

                       }

                        {!isCurrentUser && isFollowing && (
                 <Button color='teal' fluid basic content='Unfollow'/>
                       )
                        

                       }
                        
                      
                    </Segment>
                </Grid.Column>
  )
}

export default SideBar
