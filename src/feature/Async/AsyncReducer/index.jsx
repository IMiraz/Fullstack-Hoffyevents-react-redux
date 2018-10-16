import {createReducer}   from '../../../common/util/reducerUtil.js'
import {ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERORR} from '../AsyncActionFields'


const initialState = {
    loading: false
  }
  
  export const asyncActionStarted = (state, payload) => {
    return {...state, loading: true}
  }
  
  export const asyncActionFinished = (state) => {
    return {...state, loading: false}
  }
  
  export const asyncActionError = (state) => {
    return {...state, loading: false}
  }
  
  export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinished,
    [ASYNC_ACTION_ERORR]: asyncActionError
  })

