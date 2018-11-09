const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.userfollowing = functions.firestore
.document('users/{followerUid}/following/{followingUid}')
.onCreate((event, contex) => {
    console.log('v1');
    const followerUid= contex.params.followerUid;
    const followingUid = contex.params.followingUid;
    const followerDoc = admin
    .firestore()
    .collection('users')
    .doc(followerUid)
    console.log(followerDoc);

    return followerDoc.get().then(doc => {
        let userData = doc.data();
        console.log({ userData});

        let follower = {
            displayName: userData.displayName,
            photoURL: userData.photoURL || '/assets/user.png',
            city: userData.city || 'Unknown City'
        };
        return admin.firestore()
        .collection('users')
        .doc(followingUid)
        .collection('followers')
        .doc(followerUid)
        .set(follower);

    });
});