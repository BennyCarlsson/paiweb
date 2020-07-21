import {
  SET_USER,
  SET_GROUPS,
  LOGOUT,
  SET_POSTS,
  SET_TRIED_LOGIN,
  SET_lATEST_VALID_POST,
  SET_GOT_LATEST_VALID_POST,
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
export const setLatestValidPost = (latestValidPost) => ({
  type: SET_lATEST_VALID_POST,
  payload: latestValidPost,
})
export const setGotLatestPost = (gotLatestValidPost) => ({
  type: SET_GOT_LATEST_VALID_POST,
  payload: gotLatestValidPost,
})
