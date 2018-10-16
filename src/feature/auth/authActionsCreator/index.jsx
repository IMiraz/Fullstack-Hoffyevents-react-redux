import {LOGIN_USER, LOGOUT_USER} from '../authActionsTypes'
import {closeModal} from '../../Modal/modalActCreator'



export const  login = (credentials) => {
     return dispatch => {
       dispatch({type:LOGIN_USER, payload:{
          credentials
       }})

       dispatch(closeModal())
     }
     }


export const logout = () => {
     return {
          type:LOGOUT_USER
     }
}