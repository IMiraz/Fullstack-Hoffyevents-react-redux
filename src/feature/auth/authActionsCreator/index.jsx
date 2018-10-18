
import {SubmissionError} from 'redux-form'
import {LOGOUT_USER} from '../authActionsTypes'
import {closeModal} from '../../Modal/modalActCreator'



export const  login = (credentials) => {
     return async (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      try {
        await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)

        dispatch(closeModal())
      }  
      catch(error) {
        console.log(error)
        throw new SubmissionError({
          _error:error.message
        })

      }
     }
     }


export const logout = () => {
     return {
          type:LOGOUT_USER
     }
}