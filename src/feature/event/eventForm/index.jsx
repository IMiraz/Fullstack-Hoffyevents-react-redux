import React, { Component } from 'react'
import { Segment, Form, Button, Grid,Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {createEvent, updateEvent} from '../eventActions/actionsCreator'
import cuid from 'cuid'
import TextInput from '../../../common/reduxForm/textInput'
import TextArea from '../../../common/reduxForm/textArea'


const actions = {
   createEvent,
   updateEvent
}


const mapStateToProps = (state, ownProps) => {
const eventId= ownProps.match.params.id;

  let event = {
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }
  if(eventId && state.event.length>0)
  {
   event = state.event.filter(event => event.id === eventId)[0];
  }
  return {
    event
  }
}

class EventForm extends Component {

    state = {
        event: Object.assign({}, this.props.event)
    }


    onFormSubmit = (evt) =>
    {
        evt.preventDefault();

            if(this.state.event.id)
            {
               this.props.updateEvent(this.state.event)
               this.props.history.goBack();
            }
            else {
              const newEvent = {
                ...this.state.event,
                id:cuid(),
                hostPhotoURL:'/assets/user.png'

              }
              
              this.props.createEvent(newEvent);
              this.props.history.push('/events')

            }

    }
  

  render() {
    return (
      <Grid>
      <Grid.Column width={10}>
       <Segment>
       <Header sub color="teal" content="Event Detailes"/>
              <Form onSubmit={this.onFormSubmit}>
              
              <Field
               name="title" 
               placeholder="Give your event name"
                component={TextInput}
                type="text"/>
                <Field
               name="category" 
               placeholder="Give your event category name"
                component={TextInput}
                type="text"/>
                <Field
               name="description" 
               rows={3}
               placeholder="Tell us about your event descriptions"
                component={TextArea}
                type="text"/>
                 <Header sub color="teal" content="Event Location Details"/>
                <Field
               name="'city" 
               placeholder="Event city"
                component={TextInput}
                type="text"/>
                <Field
               name="'venue" 
               placeholder="Event Venue"
                component={TextInput}
                type="text"/>
                <Field
               name="'date" 
               placeholder="Date"
                component={TextInput}
                type="text"/>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
              </Form>
            </Segment>

      </Grid.Column>
      </Grid>  
    )
  }
}

export default connect(mapStateToProps, actions) (reduxForm({form:'eventForm'})(EventForm))
