import { SET_USER } from "../actionTypes"

const initialState = {
  groups: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { user } = action.payload
      return {
        ...state,
        user: user
      }
    }
    default:
      return state
  }
}
