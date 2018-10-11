import {INCREMENT_COUNTER, DECREMENT_COUNTERs, DECREMENT_COUNTER} from '../../../src/feature/testArea/TestComponent/testActionFileds'
const initialState = {
     data:526
}

const testReducer = (state = initialState, action) => {

    switch(action.type) {
        case INCREMENT_COUNTER:
        return {...state, data:state.data +1};

        case DECREMENT_COUNTER:{
             return {...state, data:state.data -1}
        }

        default:
        return state
        
    }
}

export default testReducer