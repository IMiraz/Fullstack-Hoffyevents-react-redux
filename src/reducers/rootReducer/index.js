import {combineReducers} from 'redux'
import testReducer  from '../testReducer'
import {reducer as reduxForm} from 'redux-form'
import eventReducer from '../../../src/feature/event/eventReducer'
import ModalReducer from '../../../src/feature/Modal/modalReducer'
import AuthReducer  from '../../../src/feature/auth/authReducer'
import AsyncReducer from '../../../src/feature/Async/AsyncReducer'


const rootReducer = combineReducers({
     test:testReducer,
     event:eventReducer,
     form:reduxForm,
     modals:ModalReducer,
     auth:AuthReducer,
     async:AsyncReducer
})

export default rootReducer