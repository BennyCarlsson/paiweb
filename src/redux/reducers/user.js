import { SET_USER, LOGOUT } from "../actionTypes"

const initialState = {
  authenticated: false,
  data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { user } = action.payload
      return {
        ...state,
        authenticated: !!user,
        data: user
      }
    }
    case LOGOUT: {
      return {
        ...state,
        authenticated: false,
        data: {}
      }
    }
    default:
      return state
  }
}
