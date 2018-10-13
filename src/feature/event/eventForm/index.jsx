import React, { Component } from 'react'
import { Segment, Form, Button  } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createEvent, updateEvent} from '../eventActions/actionsCreator'
import cuid from 'cuid'


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
   

handerInputOnChange = (event) =>
{
const newEvent = this.state.event;
        newEvent[event.target.name]=event.target.value
        this.setState({
      event:newEvent
        })

}


  render() {
       const{handlerFormCancle} = this.props;
const {event} = this.state
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input
                  name="title"
                  value={event.title}
                onChange={this.handerInputOnChange} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input
                  type="date"
                  name="date"
                  value={event.date}
                  onChange={this.handerInputOnChange}  placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input
                  name="city"
                  value={event.city}
                  onChange={this.handerInputOnChange}
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input
                   name="venue"
                   value={event.venue}
                  onChange={this.handerInputOnChange}
                placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input
                   name="hostedBy"
                   value={event.hostedBy}
                  onChange={this.handerInputOnChange}
                  placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={handlerFormCancle}>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default connect(mapStateToProps, actions)(EventForm)
