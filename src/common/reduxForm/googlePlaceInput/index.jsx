import React, { Component } from 'react'
import {Form, Label} from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


const styles = {
    autocompleteContainer:{
      zIndex:1000
    }
  }

 class PlaceInput extends Component {

    state = {
        scriptLoad:false 
    }

    handleScriptLoad = () => {
        this.setState({ 
         scriptLoad:true
         })
    }



    render() {
        const {input, width, onSelect, options, placeholder, meta: {touched, error}}=this.props;
        return (
            <Form.Field error={touched && !!error} width={width}>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyCdsPTTDBATnXCOL1v63H-MYISatOSz4ys&libraries=places'
          onLoad={this.handleScriptLoad}
        
         /> 
         {this.state.scriptLoad && 
         <PlacesAutocomplete
         inputProps={{...input, placeholder}}
         options={options}
         onSelect={onSelect}
         styles={styles}
         />
 }
   {touched &&
    error &&
     <Label basic color='red'>{error}</Label>}
        </Form.Field>
        )
    }
}

export default PlaceInput