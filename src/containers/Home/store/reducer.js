import * as actionTypes from './actionTypes';

const defaultState = {
  topList: [],
  blogList: []
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOG_LIST:
      return {
        blogList: action.list
      }
    case actionTypes.GET_BLOG_TOP_LIST:
      return {
        topList: action.list
      }
    default:
      return state;
  }
}

export default homeReducer;