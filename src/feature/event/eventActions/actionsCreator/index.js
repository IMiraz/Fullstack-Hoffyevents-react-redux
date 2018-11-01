
import {toastr} from 'react-redux-toastr'
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from '../actionsType'
import  {AsyncActionStart, AsyncActionFinished, AsyncActionError} from '../../../Async/AsyncActionCreator'
import {fetchSampleData} from '../../../Data/MockApi'
import {createNewEvent} from '../../../../common/util/helpers'
import { getFirebase } from 'react-redux-firebase';
import moment from 'moment'
import firebase from '../../../../config/index'
import { __await, __values } from 'tslib';



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
export const CancelToggle = (cancelled, eventId) => {
    return async (dispatch, getState, {getFirestore}) => {
         const firestore=getFirestore();
         const message = cancelled ? 'Are you sure want to cancel the event ?' 
         :'This will reactive the event - are you sure?';
     try {
         toastr.confirm(message, {
             onOk:() =>
             firestore.update(`events/${eventId}`, {
                cancelled:cancelled
             
         })
          
          })
     }
            catch(error) {
                    toastr.error('Error !', 'Something Went Wrong ')
                   
            }
    }
}

export const getEventsForDashboard = (lastEvent) => {
    return async (dispatch, getState) => {
       let today = new Date(Date.now());
       const firestore = firebase.firestore();
       const eventsRef = firestore.collection('events')
   // console.log(eventsQuery);
   try{
       dispatch(AsyncActionStart())

    let startAfter= lastEvent && await firestore.collection('events').doc(lastEvent.id).get();
    let query;
    
    lastEvent ? query= eventsRef
        .where('date', '>=', today)
        .orderBy('date')
        .startAfter(startAfter)
    .limit(2)

        :query = eventsRef
        .where('date', '>=', today)
        .orderBy('date')
        .limit(2) 
       let querySnap = await query.get()

       if(querySnap.docs.length === 0){
           dispatch(AsyncActionFinished())
           return querySnap;
       }

       let events =[];

       for(let i=0; i<querySnap.docs.length; i++) {
           let evt = {...querySnap.docs[i].data(), id:querySnap.docs[i].id};
           events.push(evt)
       }
       dispatch({type:FETCH_EVENT, payload:{events}})
       dispatch(AsyncActionFinished())
       return querySnap;

   } catch(error) {
       dispatch(AsyncActionError())
        console.log(error)
   }

     }
   
   }; 

   export const addEventComment = (eventId, values, parentId) => {

   return async(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();
        const profile = getState().firebase.profile;
        const user = firebase.auth().currentUser;
        
        let newComment = {
            parentId:parentId,
            displayName:profile.displayName,
            photoURL:profile.photoURL || '/assets/user.png',
            uid:user.uid,
            text:values.comment,
            date:Date.now()

        }

         try {
             await firebase.push(`event_chat/${eventId}`, newComment)

         }
         catch(error) {
             console.log(error)
             toastr.error('Oops', 'Problem adding comment')
         }
    }
    
   }







