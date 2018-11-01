import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import distanceInWords from 'date-fns/distance_in_words'
import {Segment, Comment, Header} from 'semantic-ui-react'
import EventDetailedChatForm from './eventDetailedeChatForm'




class EventDetailedChat extends Component {

   state = {
     replyFormShow:false,
     selectedCommoentId:null

   }

   handleOpenReplyForm = (id) => () => {
     this.setState ( {
        replyFormShow:true,
        selectedCommoentId:id
     })

   }

   handleCloseReplyForm =() => {
    this.setState ( {
       replyFormShow:false,
       selectedCommoentId:null
    })

  }


  render() {

    const {addEventComment, eventId,  eventChat} = this.props;
    const {replyFormShow, selectedCommoentId} = this.state;
    return (
      <div>
         <Segment
            textAlign="center"
            attached="top"
            inverted
            color="teal"
            style={{ border: 'none' }}
          >
            <Header>Chat about this event</Header>
          </Segment>
    
          <Segment attached>
            <Comment.Group>
              {eventChat && eventChat.map(comment =>(
                <Comment key={comment.id}>
                <Comment.Avatar src={comment.photoURL || "/assets/user.png"} />
                <Comment.Content>
                  <Comment.Author as={Link} to={`/profile/${comment.uid}`}>{comment.displayName}</Comment.Author>
                  <Comment.Metadata>
                    <div>{distanceInWords(comment.date, Date.now())} ago</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                   <Comment.Actions>
                    <Comment.Action onClick={this.handleOpenReplyForm(comment.id)}>Reply</Comment.Action>
                     {replyFormShow && selectedCommoentId === comment.id && (
                       <EventDetailedChatForm
                       addEventComment={addEventComment}
                       eventId={eventId}
                       form={`reply_${comment.id}`}
                       closeForm={this.handleCloseReplyForm}
                       parentId={comment.id}
                        />

                     )
                     
                    }
                  </Comment.Actions>
                </Comment.Content>
                {comment.childNodes && comment.childNodes.map(child => (
                   <Comment.Group>
                   <Comment key={child.id}>
                   <Comment.Avatar src={child.photoURL || "/assets/user.png"} />
                   <Comment.Content>
                     <Comment.Author as={Link} to={`/profile/${child.uid}`}>{child.displayName}</Comment.Author>
                     <Comment.Metadata>
                       <div>{distanceInWords(child.date, Date.now())} ago</div>
                     </Comment.Metadata>
                     <Comment.Text>{child.text}</Comment.Text>
                      <Comment.Actions>
                       <Comment.Action onClick={this.handleOpenReplyForm(child.id)}>Reply</Comment.Action>
                        {replyFormShow && selectedCommoentId === child.id && (
                          <EventDetailedChatForm
                          addEventComment={addEventComment}
                          eventId={eventId}
                          form={`reply_${child.id}`}
                          closeForm={this.handleCloseReplyForm}
                          parentId={child.parentId}
                           />
   
                        )
                        
                       }
                     </Comment.Actions>
                   </Comment.Content>
                 </Comment>
                   </Comment.Group>

                ))}
               
              </Comment>
              ))}
              
            </Comment.Group>
             <EventDetailedChatForm
             addEventComment={addEventComment}
             eventId={eventId}
             form={'newComment'}
             parentId={0}
              />
          </Segment>
      
        
      </div>
    )
  }
}

export default EventDetailedChat
