import {combineReducers} from 'redux'
import testReducer  from '../testReducer'
import {reducer as reduxForm} from 'redux-form'
import eventReducer from '../../../src/feature/event/eventReducer'


const rootReducer = combineReducers({
     test:testReducer,
     event:eventReducer,
     form:reduxForm
})

export default rootReducer