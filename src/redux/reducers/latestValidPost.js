import {
  SET_lATEST_VALID_POST,
  SET_GOT_LATEST_VALID_POST,
} from "../actionTypes"

const initialState = {
  latestValidPost: null,
  gotLatestPost: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_lATEST_VALID_POST: {
      return {
        ...state,
        latestValidPost: action.payload,
      }
    }
    case SET_GOT_LATEST_VALID_POST: {
      return {
        ...state,
        gotLatestPost: action.payload,
      }
    }
    default:
      return state
  }
}
