/*global google*/
import React, { Component } from 'react'
import { Segment, Form, Button, Grid,Header } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form'
import moment from 'moment'
import Script from 'react-load-script'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {composeValidators,combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import {createEvent, updateEvent} from '../eventActions/actionsCreator'
import cuid from 'cuid'
import TextInput from '../../../common/reduxForm/textInput'
import TextArea from '../../../common/reduxForm/textArea'
import SelectInput from '../../../common/reduxForm/SelectInput';
import DateInput from '../../../common/reduxForm/DateInput'
import GooglePlaceInput from '../../../common/reduxForm/googlePlaceInput'





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

    // state = {
    //     event: Object.assign({}, this.props.event)
    // }

    state = {
       cityLatLng:{},
       venueLatLng:{},
       scriptLoaded: false

    }

    handleScriptLoaded = () => this.setState({ scriptLoaded: true });

   
  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  };


    onFormSubmit =values =>
    {
      // console.log(values)
    values.date= moment(values.date).format();  
    values.venueLatLng = this.state.venueLatLng; 

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
         <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdsPTTDBATnXCOL1v63H-MYISatOSz4ys&libraries=places'
          onLoad={this.handleScriptLoaded}
         />
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
                component={GooglePlaceInput}
                options={{type:['(cities)']}}
                onSelect={this.handleCitySelect}
                type="text"/>
                {this.state.scriptLoaded &&
              <Field
                name="venue"
                type="text"
                component={GooglePlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ['establishment']
                }}
                placeholder="Event venue"
                onSelect={this.handleVenueSelect}
              />}
               
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
