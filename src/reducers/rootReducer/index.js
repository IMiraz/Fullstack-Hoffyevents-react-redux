import {combineReducers} from 'redux'
import testReducer  from '../testReducer'
import {reducer as reduxForm} from 'redux-form'
import eventReducer from '../../../src/feature/event/eventReducer'
import ModalReducer from '../../../src/feature/Modal/modalReducer'


const rootReducer = combineReducers({
     test:testReducer,
     event:eventReducer,
     form:reduxForm,
     modals:ModalReducer
})

export default rootReducer