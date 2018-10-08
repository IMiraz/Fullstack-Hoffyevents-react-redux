import React, { Component } from 'react'
import { Segment, Form, Button  } from 'semantic-ui-react'

const emptyEvents = {
       title:'',
        date:'',
        city:'',
        venue:'',
        hostedBy:''
}

class EventForm extends Component {

    state = {
        event:emptyEvents
    }
    onFormSubmit = (evt) =>
    {
        evt.preventDefault();

  if(this.state.event.id)
  {
     return this.props.handleUpdateEvent(this.state.event)
  }
  this.props.handlerCreateNewEvent(this.state.event)

    }
    componentDidMount() {
        console.log(this.props.selectEvent)
          if(this.props.selectEvent !== null)
          {
              this.setState({
                  event:this.props.selectEvent
              })

          }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('current:', this.props.selectEvent)
        // console.log('next:', nextProps.selectEvent)

        if(nextProps.selectEvent !== this.props.selectEvent) {
            this.setState({
                event:nextProps.selectEvent|| emptyEvents

            })
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

export default EventForm
