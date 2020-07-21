import { SET_TRIED_LOGIN } from "../actionTypes"

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIED_LOGIN: {
      return action.payload
    }
    default:
      return state
  }
}
