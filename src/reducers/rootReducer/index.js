import {combineReducers} from 'redux'
import testReducer  from '../testReducer'


const rooReducer = combineReducers({
     test:testReducer
})

export default rooReducer