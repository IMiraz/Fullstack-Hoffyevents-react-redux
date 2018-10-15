import {LOGIN_USER, LOGOUT_USER} from '../authActionsTypes'


export const  login = (credentials) => {
     return {
          type:LOGIN_USER,
          payload:{
            credentials
          }
     }
}

export const logout = () => {
     return {
          type:LOGOUT_USER
     }
}