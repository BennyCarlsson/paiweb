import {
  SET_USER,
  SET_GROUPS,
  LOGOUT,
  CHANGE_GROUP,
  SET_POSTS
} from "./actionTypes"

export const setUser = user => ({
  type: SET_USER,
  payload: {
    user
  }
})

export const logout = () => ({
  type: LOGOUT,
  payload: {}
})

export const setGroups = groups => ({
  type: SET_GROUPS,
  payload: { groups }
})

export const changeGroup = currentGroup => ({
  type: CHANGE_GROUP,
  payload: { currentGroup }
})

export const setAllPosts = (allPosts = []) => ({
  type: SET_POSTS,
  payload: { allPosts }
})
