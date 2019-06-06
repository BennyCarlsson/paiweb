import firebase, { db } from "./firebase.js"
import { changeImageName } from "../utils"

export const uploadImage = (file, uid) => {
  const imagePath = "images/" + uid + "/" + changeImageName(file)
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
      saveImageRef(imagePath, uid)
    }
  )
}

const saveImageRef = (ref, uid) => {
  db.collection("posts")
    .add({
      uid: uid,
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
    .orderBy("timestamp", "desc")
    .limit(3)
    .get()
    .then(querySnapshot => {
      let posts = []
      querySnapshot.forEach(doc => {
        posts.push(doc.data())
      })
      return posts
    })
}

export const getImageUrlOnRef = path => {
  if (!path) return
  var storageRef = firebase.storage().ref(path)
  return storageRef.getDownloadURL().then(url => url)
}
