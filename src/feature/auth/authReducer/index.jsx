import {LOGIN_USER, LOGOUT_USER} from '../authActionsTypes'
import {createReducer} from '../../../common/util/reducerUtil'


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



export default createReducer(initalState, {
    [LOGIN_USER]:login,
})