import { SET_POSTS, SET_LOADING } from "../actionTypes"

const initialState = {
  allPosts: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      const { allPosts } = action.payload
      return {
        ...state,
        allPosts,
      }
    }
    case SET_LOADING: {
      const { loading } = action.payload
      return {
        ...state,
        loading,
      }
    }
    default:
      return state
  }
}
