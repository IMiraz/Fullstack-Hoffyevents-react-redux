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
    onFormSubmit = () =>
    {
this.props.handlerCreateNewEvent(this.state)
    }
    componentWillMount() {
        console.log(this.props.selectEvent)
          if(this.props.selectEvent !== null)
          {
              this.setState({
                  event:this.props.selectEvent
              })

          }
    }

handerInputOnChange = (event) =>
{
    this.setState({
        [event.target.name]:event.target.value
        })
}


  render() {
       const{handlerFormCancle} = this.props;
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input
                  name="title"
                  value={this.state.event.title}
                onChange={this.handerInputOnChange} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input
                  type="date"
                  name="date"
                  value={this.state.event.date}
                  onChange={this.handerInputOnChange}  placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input
                  city="city"
                  value={this.state.event.city}
                  onChange={this.handerInputOnChange}
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input
                   name="venue"
                   value={this.state.event.venue}
                  onChange={this.handerInputOnChange}
                placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input
                   name="hostedBy"
                   value={this.state.event.hostedBy}
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
