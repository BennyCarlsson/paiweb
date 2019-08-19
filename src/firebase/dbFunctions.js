import firebase, { db } from "./firebase"
import { postValidTimeMilliSeconds } from "../settingsConfig"
import { changeImageName } from "../utils"

export const uploadImage = (file, user, callBack) => {
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
      saveImageRef(imagePath, user, callBack)
    }
  )
}

const saveImageRef = (ref, user, callBack) => {
  db.collection("posts")
    .add({
      uid: user.uid,
      userPhotoURL: user.photoURL,
      imgRef: ref,
      text: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
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

export const getAllPosts = () => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(Date.now() - postValidTimeMilliSeconds))
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
