import {
  SET_USER,
  SET_GROUPS,
  LOGOUT,
  SET_POSTS,
  SET_TRIED_LOGIN,
} from "./actionTypes"

export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
})

export const logout = () => ({
  type: LOGOUT,
  payload: {},
})

export const setGroups = (groups) => ({
  type: SET_GROUPS,
  payload: { groups },
})

export const setAllPosts = (allPosts = []) => ({
  type: SET_POSTS,
  payload: { allPosts },
})

export const setTriedLogin = (triedLogin) => ({
  type: SET_TRIED_LOGIN,
  payload: triedLogin,
})
