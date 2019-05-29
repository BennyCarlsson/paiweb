import firebase, { db } from "./firebase.js"
import { changeImageName } from "../utils"

export const uploadImage = file => {
  const imagePath = "images/" + changeImageName(file)
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
      saveImageRef(imagePath)
    }
  )
}

const saveImageRef = path => {
  db.collection("images")
    .add({
      path: path
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}

export const getImagesRef = () => {
  return db
    .collection("images")
    .get()
    .then(querySnapshot => {
      let images = []
      querySnapshot.forEach(doc => {
        images.push(doc.data())
      })
      return images
    })
}

export const getImageUrlOnRef = path => {
  if (!path) return
  var storageRef = firebase.storage().ref(path)
  return storageRef.getDownloadURL().then(url => url)
}
