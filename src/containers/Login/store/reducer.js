import * as actionTypes from './actionTypes';

const defaultState = {
  hasShow: false
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        focused: true
      };
    default:
      return state;
  }
}

export default loginReducer;