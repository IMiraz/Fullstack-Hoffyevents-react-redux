import {createReducer} from '../../../src/common/util/reducerUtil'

import {
    INCREMENT_COUNTER, 
    DECREMENT_COUNTER,
    COUNTER_ACTION_START,
    COUNTER_ACTION_FINISHED
} from '../../../src/feature/testArea/TestComponent/testActionFileds'
const initialState = {
     data:526,
     loading:false
}


export  const incrementCounter = (state, payload) =>
 {
    return {...state, data:state.data +1};
 }


 
export  const decrementCounter = (state, payload) =>
{
   return {...state, data:state.data -1};
}

export const counterActionStart = (state) => {
     return {...state, loading:false}
}

export const counterActionFinished =(state) => {
     return {...state, loading:false}
}



// const testReducer = (state = initialState, action) => {

//     switch(action.type) {
//         case INCREMENT_COUNTER:
//         return {...state, data:state.data +1};

//         case DECREMENT_COUNTER:{
//              return {...state, data:state.data -1}
//         }

//         default:
//         return state
        
//     }
// }

export default createReducer(initialState, {
    [INCREMENT_COUNTER]:incrementCounter,
    [DECREMENT_COUNTER]:decrementCounter,
    [COUNTER_ACTION_START]:counterActionStart,
    [COUNTER_ACTION_FINISHED]:counterActionFinished
})