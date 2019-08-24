import { SET_USER, SET_GROUPS } from "./actionTypes"

export const setUser = user => ({
  type: SET_USER,
  payload: {
    user
  }
})

export const setGroups = groups => ({
  type: SET_GROUPS,
  payload: { groups }
})
