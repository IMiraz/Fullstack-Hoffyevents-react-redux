import {combineReducers} from 'redux'
import testReducer  from '../testReducer'
import {reducer as reduxForm} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import eventReducer from '../../../src/feature/event/eventReducer'
import ModalReducer from '../../../src/feature/Modal/modalReducer'
import AuthReducer  from '../../../src/feature/auth/authReducer'
import AsyncReducer from '../../../src/feature/Async/AsyncReducer'

 
const rootReducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
     test:testReducer,
     event:eventReducer,
     form:reduxForm,
     modals:ModalReducer,
     auth:AuthReducer,
     async:AsyncReducer,
     toastr:toastrReducer
})

export default rootReducer