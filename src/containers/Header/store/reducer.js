import * as actionTypes from './actionTypes';

const defaultState = {
  showSearch: false,
  showCollapseNav: false,
  navs: [],
  hashurl: '/',
  hasSearch: false
};

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TOGGLE:
      return {
        ...state,
        showSearch: !state.showSearch
      };
    case actionTypes.COLLAPSE_TOGGLE:
      return {
        ...state,
        showCollapseNav: !state.showCollapseNav
      }
    case actionTypes.GET_NAV:
      return {
        ...state,
        navs: action.list
      }
    case actionTypes.HASH_URL:
      return {
        ...state,
        hashurl: action.hashurl
      }
    case actionTypes.HAS_SEARCH:
      return {
        ...state,
        hasSearch: action.hasSearch
      }
    default:
      return state;
  }
}

export default headerReducer;