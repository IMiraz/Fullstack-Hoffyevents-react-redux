import {combineReducers} from 'redux'
import testReducer  from '../testReducer'
import eventReducer from '../../../src/feature/event/eventReducer'


const rootReducer = combineReducers({
     test:testReducer,
     event:eventReducer
})

export default rootReducer