
import {
    INCREMENT_COUNTER,
     DECREMENT_COUNTER,
     COUNTER_ACTION_START,
     COUNTER_ACTION_FINISHED
    } from '../testActionFileds'
import { resolve } from 'dns';


export const incrementCounter = () => {
    return {
         type:INCREMENT_COUNTER
    }
     
}

export const decrementCounter = () => {
     return {
          type:DECREMENT_COUNTER
     }
}

export const counterActionStart = () => {
     return {
         type:COUNTER_ACTION_START
     }
}

export const counterActionFinished = () => {
     return {
         type:COUNTER_ACTION_FINISHED
     }
}

const delay = (ms) => {
     return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = () => {
     return async dispatch => {
         dispatch(counterActionStart())
         await delay(1000);
         dispatch({type:INCREMENT_COUNTER})
         dispatch(counterActionFinished())
     }
}


export const decrementAsync = () => {
    return async dispatch => {
        dispatch(counterActionStart())
        await delay(1000);
        dispatch({type:DECREMENT_COUNTER})
        dispatch(counterActionFinished())
    }
}