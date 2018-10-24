
import {toastr} from 'react-redux-toastr'
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from '../actionsType'
import  {AsyncActionStart, AsyncActionFinished, AsyncActionError} from '../../../Async/AsyncActionCreator'
import {fetchSampleData} from '../../../Data/MockApi'
import {createNewEvent} from '../../../../common/util/helpers'
import { getFirebase } from 'react-redux-firebase';
import moment from 'moment'



export const fetchEvents = (events) => {
    return {
         type:FETCH_EVENT,
         payload:events
    }

}

export const loadEvents = () => {

    return async dispatch => {
   try {
        dispatch(AsyncActionStart())
        let events = await fetchSampleData();
        dispatch(fetchEvents(events))
        dispatch(AsyncActionFinished())
   }
   catch (error) {
       console.log(error);
       dispatch(AsyncActionError())

   }


    }

}


export const createEvent = (event) => {
     return async (dispatch, getState, {getFirestore}) => {

  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  const photoURL=getState().firebase.profile.photoURL;
  let newEvent= createNewEvent(user, photoURL, event);


         try {
             let createdEvent = await firestore.add(`events`, newEvent)
             await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
                  eventId:createdEvent.id,
                  userUid:user.uid,
                  eventDate: event.date,
                  host:true
             })

             toastr.success('Success!', 'Event has been created')
            
         }
         catch(error) {
             toastr.error('Error !', 'Something Went Wrong ')
         }
     }
}


export const updateEvent = (event) => {
    return async  (dispatch, getState, {getFirestore}) => {

        const firestore = getFirestore();
        if(event.date !== getState().firestore.ordered.events[0].date)
        {
            event.date = moment(event.date).toDate();

        }

        try {
           await firestore.update(`events/${event.id}`,event);
        toastr.success('success','event has been updated')
           
        }
        catch(error) {
            toastr.error('Error !', 'Something Went Wrong ')
        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type:DELETE_EVENT,
        payload:{
            eventId
        }
    }
}