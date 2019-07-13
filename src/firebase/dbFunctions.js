import firebase, { db } from "./firebase"
import { postValidTime } from "../settingsConfig"
import { changeImageName } from "../utils"

export const uploadImage = (file, user) => {
  const imagePath = "images/" + user.uid + "/" + changeImageName(file)
  var storageRef = firebase.storage().ref(imagePath)
  var task = storageRef.put(file)
  task.on(
    "state_changed",
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log("percentage", percentage)
    },
    function error(err) {
      "ERROR!"
    },
    function complete() {
      console.log("DONE!")
      saveImageRef(imagePath, user)
    }
  )
}

const saveImageRef = (ref, user) => {
  db.collection("posts")
    .add({
      uid: user.uid,
      userPhotoURL: user.photoURL,
      imgRef: ref,
      text: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Document written with docRef: ", docRef)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}

export const getAllPosts = () => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(postValidTime))
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

export const havePosted = userId => {
  return db
    .collection("posts")
    .where("timestamp", ">", new Date(postValidTime))
    .where("uid", "==", userId)
    .limit(1)
    .get()
    .then(querySnapshot => {
      let posted
      querySnapshot.forEach(doc => {
        posted = doc.exists
      })
      return !!posted
    })
}

export const getImageUrlOnRef = path => {
  if (!path) return
  var storageRef = firebase.storage().ref(path)
  return storageRef.getDownloadURL().then(url => url)
}
