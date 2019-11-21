import * as actionTypes from './actionTypes';

const defaultState = {
  focused: false
}

const carouselReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SLIDE_FOCUS:
      return {
        focused: true
      };
    case actionTypes.SLIDE_BLUR:
      return {
        focused: false
      };
    default:
      return state;
  }
}

export default carouselReducer;