import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import { config } from "./superSecretConfigFile"

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseUrl,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.mesagingSenderId,
  appId: config.appId
}

firebase.initializeApp(firebaseConfig)

firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

export default firebase
export const db = firebase.firestore()
