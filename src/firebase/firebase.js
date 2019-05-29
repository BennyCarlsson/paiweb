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

export default firebase
export const db = firebase.firestore()
