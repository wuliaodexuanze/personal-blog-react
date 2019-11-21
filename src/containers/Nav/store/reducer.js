import * as actionTypes from './actionTypes';

const defaultState = {
  showSearch: false,
  showCollapseNav: false
};

const navReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TOGGLE:
      return {
        showSearch: !state.showSearch,
        showCollapseNav: state.showCollapseNav
      };
    case actionTypes.COLLAPSE_TOGGLE:
      return {
        showCollapseNav: !state.showCollapseNav,
        showSearch: state.showSearch
      }
    default:
      return state;
  }
}

export default navReducer;