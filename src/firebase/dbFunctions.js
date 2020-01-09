import firebase, { db } from "./firebase"
import { postValidTimeMilliSeconds } from "../settingsConfig"
import { changeImageName } from "../utils"

export const uploadImage = (file, user, groupIds, callBack) => {
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
      console.log("ERROR!", err)
    },
    function complete() {
      saveImageRef(imagePath, user, groupIds, callBack)
    }
  )
}

const saveImageRef = (ref, user, groupIds, callBack) => {
  var batch = db.batch()

  groupIds.forEach(groupId => {
    var postRef = db.collection("posts").doc()
    batch.set(postRef, {
      uid: user.uid,
      userPhotoURL: user.photoURL,
      imgRef: ref,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      groupId
    })
  })
  batch
    .commit()
    .then(function(docRef) {
      updateLastUserPost(user.uid).then(() => {
        callBack()
      })
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}
export const saveCanvasData = (canvasData, postId, uid) => {
  db.collection("posts")
    .doc(postId)
    .update({
      [`canvasDrawings.${uid}`]: canvasData
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

export const getAllPosts = groupIds => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(Date.now() - postValidTimeMilliSeconds))
    .where("groupId", "in", groupIds)
    .orderBy("timestamp", "desc")
    .limit(15)
    .get()
    .then(querySnapshot => {
      let posts = []
      querySnapshot.forEach(doc => {
        posts.push({ ...doc.data(), postId: doc.id })
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

export const sendPushNotification = toUid => {
  const sendPushNotification = firebase
    .functions()
    .httpsCallable("sendPushNotificationTest")

  return sendPushNotification({
    toUid
  })
}

export const createNewGroup = user => {
  db.collection("groups").add({
    uidList: [user.uid],
    members: [
      { uid: user.uid, photoURL: user.photoURL, displayName: user.displayName }
    ]
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
        photoURL: user.photoURL,
        displayName: user.displayName
      })
    })
}
