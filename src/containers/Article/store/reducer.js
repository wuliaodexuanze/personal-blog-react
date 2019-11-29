import * as actionTypes from './actionTypes';

const defaultState = {
  detail: {}
}

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL:
      return {
        ...state,
        detail: action.detail
      }
    default:
      return state;
  }
}

export default articleReducer;