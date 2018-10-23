import React from 'react'
import {Grid, Header, Item, Segment, List, Icon} from 'semantic-ui-react'
import { format } from 'date-fns/format';
const userDetailedDescription = ({profile}) => {
     let createdAT;
     if(profile.createdAT){
         createdAT = format(profile.createdAT.toDate(),'D MMM YYYY');
     }

     console.log(createdAT)
  return (
    <Grid.Column width={12}>
                    <Segment>
                        <Grid columns={2}>
                            <Grid.Column width={10}>
                                <Header icon='smile' content={`About  ${profile.displayName}`}/>
                                <p>I am a: <strong>{profile.occupation || 'N/A'}</strong></p>
                                <p>Originally from <strong>{profile.origin || 'N/A'}</strong></p>
                                <p>Member Since: <strong>{createdAT}</strong></p>
                                <p>{profile.about}</p>

                            </Grid.Column>
                            <Grid.Column width={6}>

                                <Header icon='heart outline' content='Interests'/>
                                {profile.interests ?
                                <List>
                                {profile.interests && 
                                      profile.interests.map(interest => (
                                      <Item key={interest}>
                                        <Icon name='heart'/>
                                        <Item.Content>{interest}</Item.Content>
                                    </Item>
                                     ))
                                    }
                                    
                                </List>: <p>No Interests</p>
                                }
                                 
                            </Grid.Column>
                        </Grid>

                    </Segment>
                </Grid.Column>
  )
}

export default userDetailedDescription
