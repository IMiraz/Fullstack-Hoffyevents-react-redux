import {createReducer}   from '../../../common/util/reducerUtil.js'
import {ASYNC_ACTION_START, ASYNC_ACTION_FINISHED, ASYNC_ACTION_ERORR} from '../AsyncActionFields'

const initialState = {
     loading:false
}

export const AsyncActionStart = (state) => {
     return {
          ...state, loading:true
     }
}

export const AsyncActionFinished = (state) => {
    return {
         ...state, loading:false
    }
}

export const AsyncActionError = (state) => {
    return {
         ...state, loading:false
    }

}

export default (initialState, {
     [ASYNC_ACTION_START]:AsyncActionStart,
     [ASYNC_ACTION_FINISHED]:AsyncActionFinished,
     [ASYNC_ACTION_ERORR]:AsyncActionError
})

