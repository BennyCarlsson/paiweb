import { CHANGE_GROUP, SET_POSTS } from "../actionTypes"

const initialState = {
  currentGroup: "",
  allPosts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GROUP: {
      const { currentGroup } = action.payload
      return {
        ...state,
        currentGroup
      }
    }
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
