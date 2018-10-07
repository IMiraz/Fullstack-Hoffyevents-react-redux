import React, { Component } from 'react'
import { Segment, Form, Button  } from 'semantic-ui-react'

class EventForm extends Component {

    state = {
        title:'',
        date:'',
        city:'',
        venue:'',
        hosted:''
    }
    onFormSubmit = (event) =>
    {


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
                onChange={this.handerInputOnChange} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input
                  type="date"
                  name="date"
                  onChange={this.handerInputOnChange}  placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input
                  city="city"
                  onChange={this.handerInputOnChange}
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input
                   name="venu"
                  onChange={this.handerInputOnChange}
                placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input
                   name="hosted"
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
