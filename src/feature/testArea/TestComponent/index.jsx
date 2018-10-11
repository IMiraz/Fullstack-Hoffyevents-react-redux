import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementCounter, decrementCounter} from '../TestComponent/testactionCreattors'

const mapState = (state) => ({
     data: state.test.data
})

const actions = {
 incrementCounter,
 decrementCounter
}


 class TestComponent extends Component {


    render() {
         const {incrementCounter, decrementCounter, data} = this.props;
        return (
            <div>
            <h1>Test Component </h1>  
            <h2>The answer is :{this.props.data}</h2> 
            <Button onClick={incrementCounter} content='Increment' color='green' ></Button>  
            <Button onClick={decrementCounter} content='Decrement' color='red' ></Button>  
            </div>
        )
    }
}

export default connect(mapState, actions) (TestComponent)