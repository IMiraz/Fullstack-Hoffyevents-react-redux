import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapState = (state) => ({
     data: state.test.data
})


 class TestComponent extends Component {


    render() {
        console.log(this.props.data)
        return (
            <div>
            <h1>Test Component </h1>  
            <h2>The answer is :{this.props.data}</h2>   
            </div>
        )
    }
}

export default connect(mapState) (TestComponent)