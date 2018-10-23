import React from 'react'
import {Grid, Segment, Image, Header} from 'semantic-ui-react'
const UserDetailedPhotos = ({photos}) => {
  return (
    <Grid.Column width={12}>
    <Segment attached>
        <Header icon='image' content='Photos'/>
         {photos && 
        <Image.Group size='small'>
         {photos && photos.map((photo, index )=> (
             <Image key={index} src={photo.url}/>
         ))}
        </Image.Group>
         }
    </Segment>
</Grid.Column>
    
  )
}

export default UserDetailedPhotos
