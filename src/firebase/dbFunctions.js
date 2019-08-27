import firebase, { db } from "./firebase"
import { postValidTimeMilliSeconds } from "../settingsConfig"
import { changeImageName } from "../utils"

export const uploadImage = (file, user, groupIds, groupUserIds, callBack) => {
  const imagePath = "images/" + user.uid + "/" + changeImageName(file)
  var storageRef = firebase.storage().ref(imagePath)
  var task = storageRef.put(file, {
    cacheControl: "max-age=432001",
    contentType: file.type
  })
  task.on(
    "state_changed",
    function progress(snapshot) {
      // var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      // console.log("percentage", percentage)
    },
    function error(err) {
      "ERROR!"
    },
    function complete() {
      saveImageRef(imagePath, user, groupIds, groupUserIds, callBack)
    }
  )
}

const saveImageRef = (ref, user, groupIds, groupUserIds, callBack) => {
  db.collection("posts")
    .add({
      uid: user.uid,
      userPhotoURL: user.photoURL,
      imgRef: ref,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      groupIds,
      groupUserIds
    })
    .then(function(docRef) {
      updateLastUserPost(user.uid).then(() => {
        callBack()
      })
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}

const updateLastUserPost = userId => {
  return db
    .collection("users")
    .doc(userId)
    .update({ lastUpdate: firebase.firestore.FieldValue.serverTimestamp() })
}

export const getAllUsers = async () => {
  return db
    .collection("users")
    .get()
    .then(querySnapshot => {
      let users = []
      querySnapshot.forEach(doc => {
        users.push(doc.data())
      })
      return users
    })
}

export const getAllPosts = uid => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(Date.now() - postValidTimeMilliSeconds))
    .where("groupUserIds", "array-contains", uid)
    .orderBy("timestamp", "desc")
    .limit(15)
    .get()
    .then(querySnapshot => {
      let posts = []
      querySnapshot.forEach(doc => {
        posts.push(doc.data())
      })
      return posts
    })
}

export const latestTimeValidPost = userId => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(new Date() - postValidTimeMilliSeconds))
    .where("uid", "==", userId)
    .orderBy("timestamp", "desc")
    .limit(1)
    .get()
    .then(querySnapshot => {
      let latestPost
      querySnapshot.forEach(doc => {
        latestPost = doc.data()
      })
      return latestPost
    })
}

export const getImageUrlOnRef = path => {
  if (!path) return
  var storageRef = firebase.storage().ref(path)
  return storageRef.getDownloadURL().then(url => url)
}

export const saveFCMToken = (token, userId) => {
  return db
    .collection("users")
    .doc(userId)
    .update({ FCMToken: token })
}

export const sendPushNotification = FCMToken => {
  const sendPushNotificationTest = firebase
    .functions()
    .httpsCallable("sendPushNotificationTest")
  sendPushNotificationTest({
    FCMToken: FCMToken
  })
}

export const createNewGroup = user => {
  db.collection("groups").add({
    uidList: [user.uid],
    members: [{ uid: user.uid, photoURL: user.photoURL }]
  })
}

export const getUserGroups = uid => {
  return db
    .collection("groups")
    .where("uidList", "array-contains", uid)
    .get()
    .then(querySnapshot => {
      let groups = []
      querySnapshot.forEach(doc => {
        const group = doc.data()
        group.id = doc.id
        groups.push(group)
      })
      return groups
    })
}

export const joinGroup = (groupId, user) => {
  db.collection("groups")
    .doc(groupId)
    .update({
      uidList: firebase.firestore.FieldValue.arrayUnion(user.uid),
      members: firebase.firestore.FieldValue.arrayUnion({
        uid: user.uid,
        photoURL: user.photoURL
      })
    })
}

// const add = () => {
//   const groupId = "CDOIrF5OQvtZn7Rzpb0U"
//   db.collection("groups")
//     .doc(groupId)
//     .update({
//       uidList: firebase.firestore.FieldValue.arrayUnion(
//         "cR6Eh2RP0FgSuFwOBel9F4OPEuq1"
//       ),
//       members: firebase.firestore.FieldValue.arrayUnion({
//         uid: "cR6Eh2RP0FgSuFwOBel9F4OPEuq1",
//         photoURL: "https://graph.facebook.com/10205753119545045/picture"
//       })
//     })
//   add2(groupId)
// }
// const add2 = groupId => {
//   db.collection("groups")
//     .doc(groupId)
//     .update({
//       uidList: firebase.firestore.FieldValue.arrayUnion(
//         "22XINNhuU7eJT2AylF6zsD3Ytmj1"
//       ),
//       members: firebase.firestore.FieldValue.arrayUnion({
//         uid: "22XINNhuU7eJT2AylF6zsD3Ytmj1",
//         photoURL: "https://graph.facebook.com/10215215601204013/picture"
//       })
//     })
// }
