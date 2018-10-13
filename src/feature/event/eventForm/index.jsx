import React, { Component } from 'react'
import { Segment, Form, Button, Grid,Header } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {composeValidators,combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import {reduxForm, Field} from 'redux-form'
import moment from 'moment'
import {createEvent, updateEvent} from '../eventActions/actionsCreator'
import cuid from 'cuid'
import TextInput from '../../../common/reduxForm/textInput'
import TextArea from '../../../common/reduxForm/textArea'
import SelectInput from '../../../common/reduxForm/SelectInput';
import DateInput from '../../../common/reduxForm/DateInput'



const actions = {
   createEvent,
   updateEvent
}




const mapStateToProps = (state, ownProps) => {
const eventId= ownProps.match.params.id;

  let event = {};
  if(eventId && state.event.length>0)
  {
   event = state.event.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues:event
  }
}


const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];


const validate = combineValidators({
    title:isRequired({message:'The event title is required'}),
    category:isRequired({message:'Please Provide a category'}),
    description:composeValidators(
      isRequired({message:'Please Enter a description'}),
      hasLengthGreaterThan(4)({message:'Description needs to be at least 5 characters'}),
    )(),
    city:isRequired('city'),
    venue:isRequired('venue')





})

class EventForm extends Component {

    state = {
        event: Object.assign({}, this.props.event)
    }


    onFormSubmit =values =>
    {
      // console.log(values)
    values.date= moment(values.date).format();   

            if(this.props.initialValues.id)
            {
               this.props.updateEvent(values)
               this.props.history.goBack();
            }
            else {
              const newEvent = {
                ...values,
                id:cuid(),
                hostPhotoURL:'/assets/user.png',
                hostedBy:'Miraz'
              }
              this.props.createEvent(newEvent);
              this.props.history.push('/events')

            }

    }

  render() {

    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
      <Grid.Column width={10}>
       <Segment>
       <Header sub color="teal" content="Event Detailes"/>
              <Form onSubmit={ this.props.handleSubmit(this.onFormSubmit)}>
              
              <Field
               name="title" 
               placeholder="Give your event name"
                component={TextInput}
                type="text"/>
                <Field
               name="category" 
               placeholder="Give your event category name"
                component={SelectInput}
                options={category}
                // multiple={true}
                type="text"/>
                <Field
               name="description" 
               rows={3}
               placeholder="Tell us about your event descriptions"
                component={TextArea}
                type="text"/>
                 <Header sub color="teal" content="Event Location Details"/>
                <Field
               name="city" 
               placeholder="Event city"
                component={TextInput}
                type="text"/>
                <Field
               name="venue" 
               placeholder="Event Venue"
                component={TextInput}
                type="text"/>
                <Field
               name="date" 
               placeholder="Event Date"
                component={DateInput}
                dateFormat="DD/MM/YYYY h:mm"
                timeFormat ="h:mm"
                showTimeSelect

                type="text"/>
                <Button disabled={invalid || submitting || pristine} positive type="submit">
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

export default connect(mapStateToProps, actions) (reduxForm({form:'eventForm', enableReinitialize:true, validate})(EventForm))
