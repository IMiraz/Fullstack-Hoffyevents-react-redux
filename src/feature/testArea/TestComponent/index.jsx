import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import Script from 'react-load-script'
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {incrementCounter, decrementCounter} from '../TestComponent/testactionCreattors'
import {openModal} from '../../Modal/modalActCreator'

const mapState = (state) => ({
     data: state.test.data
})



const Marker = () => <Icon name="marker" size="big" color="red"/>

const actions = {
 incrementCounter,
 decrementCounter,
 openModal
}


 class TestComponent extends Component {

    state= {
         address:'',
         scriptload:false

    }

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };


    handleLoadScript = () => {
        this.setState({ 
         scriptload:true
         })
    }




      handleFormSubmit = (event) => {
        event.preventDefault()
    
        geocodeByAddress(this.state.address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error))
      }
    
      onChange = (address) => this.setState({ address })


    render() {

        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
          }

         const {incrementCounter, decrementCounter, data , openModal} = this.props;
        return (
            <div>
                {/* <Script
                url='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdsPTTDBATnXCOL1v63H-MYISatOSz4ys&libraries=places'
                onLoad={this.handleLoadScript}
                /> */}
            <h1>Test Component </h1>  
            <h2>The answer is :{this.props.data}</h2> 
            <Button onClick={incrementCounter} content='Increment' color='green' ></Button>  
            <Button onClick={decrementCounter} content='Decrement' color='red' ></Button>
            <Button onClick ={() => openModal('TestModal', {data:43})}content="show Modal" color='teal' ></Button> 
            <br/><br/>
            <form onSubmit={this.handleFormSubmit}>
            {this.state.scriptload && 
        <PlacesAutocomplete inputProps={inputProps} />}
        <button type="submit">Submit</button>
      </form>

       <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCdsPTTDBATnXCOL1v63H-MYISatOSz4ys'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
            </div>
        )
    }
}

export default connect(mapState, actions) (TestComponent)