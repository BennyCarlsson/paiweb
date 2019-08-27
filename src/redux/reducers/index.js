import { combineReducers } from "redux"
import groups from "./groups"
import user from "./user"
import feed from "./feed"

export default combineReducers({ user, groups, feed })
