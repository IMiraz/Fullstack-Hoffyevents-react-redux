import moment from 'moment';
import {toastr} from 'react-redux-toastr';
import cuid from 'cuid'
import {AsyncActionStart, AsyncActionFinished, AsyncActionError} from '../../Async/AsyncActionCreator'


export const updateProfile = (user) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} =user;

        if(updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
             updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
        }

        try {
             await firebase.updateProfile(updatedUser);
             toastr.success('success', 'Profile updated')
        } catch(error) {
             console.log(error)
        }

    }
}

export const uploadProfileImage=(file, fileName) => 
async(dispatch, getState, {getFirebase, getFirestore}) => {
     
    const ImageName = cuid()
     const firebase= getFirebase();
     const firestore= getFirestore();
     const user = firebase.auth().currentUser;
     const path= `${user.uid}/user_images`;
     const options = {
         name:ImageName
     };
     try {
         dispatch(AsyncActionStart())
         //update the file to firebase storage
      let uploadedFile = await firebase.uploadFile(path, file, null, options);
      //get url of image
      let downloadURL= await uploadedFile.uploadTaskSnapshot.downloadURL;
       //get  userdoc
      let userDoc= await firestore.get(`users/${user.uid}`);
      //check if user his photo, if not update profile with new image
      if(!userDoc.data().photoURL){
          await firebase.updateProfile({
              photoURL:downloadURL
          });
          await user.updateProfile({
              photoURL:downloadURL
          })  
      }
 
         //add the new photo to photos collection
          await  firestore.add({
             collection:'users',
             doc:user.uid,
             subcollections:[{collection:'photos'}]
         }, {
             name:ImageName,
             url:downloadURL

         })

         dispatch(AsyncActionFinished())
     }
      catch(error) {
          dispatch(AsyncActionError())
          console.log(error)
          throw new Error('problem uploading photo');
      }
}

export const setMainPhoto = photo => 
async(dispatch, getState, {getFirebase}) => {
    const firebase= getFirebase();
    try {
        return await firebase.updateProfile({
            photoURL:photo.url
             
        })



    } catch(error) {
        console.log(error);
        throw new Error('Problem setting main photo')

    }

}


export const deletePhoto =(photo)=> 
async(dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase= getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    try {
         await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
         await firestore.delete({
             collection:'users',
             doc:user.uid,
             subcollections:[{collection:'photos', doc:photo.id}]
         })
 
    } catch(error) {
        console.log(error);
        throw new Error('Problem setting main photo')

    }

}



export const goingEvent =(event) => {
  return  async (dispatch, getState,{getFirestore}) => {
        const firestore = getFirestore();
        const user = firestore.auth().currentUser;
        const photoURL=getState().firebase.profile.photoURL;
        const attendee = {
             going:true,
             joinDate:Date.now(),
             photoURL:photoURL|| '/assets/user.png',
             displayName:user.displayName,
             host:false    
        }
         try {
             await firestore.update(`events/${event.id}`, {
                 [`attendees.${user.uid}`]:attendee
             })

             await firestore.set(`event_attendee/${event.id}_${user.uid}`,{
                 eventId:event.id,
                 userUid:user.uid,
                 eventDate:event.date,
                 host:false
             })
             toastr.success('success', 'you have signed up to the event');

         } catch(error) {
             console.log(error)
             toastr.error('Oops', 'problem signup up to event')
         }
    }
}


export const CancelGoingToEvent =(event) => {
     return async(dispatch, getState,{getFirestore}) => {
         const firestore = getFirestore();
         const user=firestore.auth().currentUser;

         try {
             await firestore.update(`events/${event.id}`,{
              [`attendees.${user.uid}`]:firestore.FieldValue.delete()   
             })
             await firestore.delete(`event_attendee/${event.id}_${user.uid}`);
             toastr.success('Success', 'You have removeed yourself from the event');

         } catch(error) {
          console.log(error)
          toastr.error('Success', 'Something went wrong');
         }

     }

}