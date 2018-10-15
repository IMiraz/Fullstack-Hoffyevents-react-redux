import {LOGIN_USER, LOGOUT_USER} from '../authActionsTypes'
import {createReducer} from '../../../common/util/reducerUtil'
import { logout } from '../authActionsCreator';

const initalState = {
    currentUser:{}
}

export const  login = (state, payload) => {
    return {
        ...state,
        authenticated:true,
        currentUser:payload.credentials.email
    }
}

export const logOut = (state, payload) => {
     return {
         ...state,
         authenticated:false,
         currentUser:{}
     }
}


export default createReducer(initalState, {
    [LOGIN_USER]:login,
    [LOGOUT_USER]:logout
})