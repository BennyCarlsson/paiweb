import { setUser, setTriedLogin } from "./redux/actions"
import firebase from "firebase/app"
import store from "./redux/store"
import {
  getAllPosts,
  latestTimeValidPost,
  getUserGroups,
} from "./firebase/dbFunctions"
import {
  setGroups,
  setLatestValidPost,
  setGotLatestPost,
  setAllPosts,
} from "./redux/actions"
export const startup = () => {
  login()
}

const login = () => {
  firebase.auth().onAuthStateChanged((user) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    store.dispatch(setUser(user))
    getGroups(user)
    getLatestValidPost(user)
    if (!user) {
      store.dispatch(setTriedLogin(true))
    }
  })
}

let _groups = null
const getGroups = (user) => {
  if (user) {
    getUserGroups(user.uid).then((groups) => {
      store.dispatch(setGroups(groups))
      _groups = groups
      getFeed()
    })
  }
}

let latestValidPost = null
const getLatestValidPost = (user) => {
  latestTimeValidPost(user.uid).then((post) => {
    store.dispatch(setLatestValidPost(post))
    latestValidPost = post
    store.dispatch(setGotLatestPost(true))
    getFeed()
  })
}

const getFeed = () => {
  if (_groups && latestValidPost) {
    const groupIds = _groups.map((group) => group.id)
    getAllPosts(groupIds).then((posts) => {
      store.dispatch(setAllPosts(posts))
    })
  }
}
