import { SET_GROUPS } from "../actionTypes"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS: {
      const { groups } = action.payload
      return {
        groups,
        ...state
      }
    }
    default:
      return state
  }
}
