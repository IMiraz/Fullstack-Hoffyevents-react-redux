
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH5jrcNv5vqYqtuZYOfn-nKheszkT7okE",
    authDomain: "event-2e38c.firebaseapp.com",
    databaseURL: "https://event-2e38c.firebaseio.com",
    projectId: "event-2e38c",
    storageBucket: "",
    messagingSenderId: "600241041962"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)

export default firebase;

