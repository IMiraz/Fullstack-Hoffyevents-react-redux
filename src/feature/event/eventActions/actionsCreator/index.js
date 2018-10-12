import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT} from '../actionsCreator'


export const CreateEvent = (event) => {
     return {
         type:CREATE_EVENT,
         payload:{
             event
         }
     }
}

export const UpdateEvent = (event) => {
     return {
          type:UPDATE_EVENT,
          payload:{
              event
          }
     }
}

export const DeleteEvent = (eventId) => {
    return {
        type:DELETE_EVENT,
        payload:{
            eventId
        }
    }
}