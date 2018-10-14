import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {incrementCounter, decrementCounter} from '../TestComponent/testactionCreattors'

const mapState = (state) => ({
     data: state.test.data
})

const actions = {
 incrementCounter,
 decrementCounter
}


 class TestComponent extends Component {

    state= {
         address:'',
         scriptload:false

    }

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

         const {incrementCounter, decrementCounter, data} = this.props;
        return (
            <div>
                <Script
                url='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdsPTTDBATnXCOL1v63H-MYISatOSz4ys&libraries=places'
                onLoad={this.handleLoadScript}
                />
            <h1>Test Component </h1>  
            <h2>The answer is :{this.props.data}</h2> 
            <Button onClick={incrementCounter} content='Increment' color='green' ></Button>  
            <Button onClick={decrementCounter} content='Decrement' color='red' ></Button> 
            <br/><br/>
            <form onSubmit={this.handleFormSubmit}>
            {this.state.scriptload && 
        <PlacesAutocomplete inputProps={inputProps} />}
        <button type="submit">Submit</button>
      </form>
            </div>
        )
    }
}

export default connect(mapState, actions) (TestComponent)