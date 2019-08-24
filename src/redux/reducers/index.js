import { combineReducers } from "redux"
import groups from "./groups"
import user from "./user"

export default combineReducers({ user: user, groups: groups })
