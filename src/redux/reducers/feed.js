import { SET_POSTS } from "../actionTypes"

const initialState = {
  allPosts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      const { allPosts } = action.payload
      return {
        ...state,
        allPosts
      }
    }
    default:
      return state
  }
}
