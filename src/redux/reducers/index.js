import { combineReducers } from "redux"
import groups from "./groups"
import user from "./user"
import feed from "./feed"
import triedLogin from "./triedLogin"

export default combineReducers({ user, groups, feed, triedLogin })
