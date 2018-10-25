import React from 'react'
import {Grid, Segment, Image, Header} from 'semantic-ui-react'
import Lazyload from 'react-lazyload'
const UserDetailedPhotos = ({photos}) => {
  return (
    <Grid.Column width={12}>
    <Segment attached>
        <Header icon='image' content='Photos'/>
         {photos && 
        <Image.Group size='small'>
         {photos && 
         photos.map((photo, index )=> (
           <Lazyload key={photo.id} height={150}offset={-150} placeholder={<Image src='/assets/user.png'/>}>
              <Image src={photo.url}/>
           </Lazyload>
            
         ))}
        </Image.Group>
         }
    </Segment>
</Grid.Column>
    
  )
}

export default UserDetailedPhotos
