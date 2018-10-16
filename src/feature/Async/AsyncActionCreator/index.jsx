import {ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERORR} from '../AsyncActionFields'

export const AsyncActionStart = () => {
    return {
        type:ASYNC_ACTION_START
    }
}

export const AsyncActionFinished = () => {
    return {
        type:ASYNC_ACTION_FINISH
    }
}

export const AsyncActionError = () => {
    return {
        type:ASYNC_ACTION_ERORR
    }
}
