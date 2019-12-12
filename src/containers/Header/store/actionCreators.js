import * as actionTypes from './actionTypes';
import { get } from '../../../utils/http';


const changeNav = (list) => ({
  type: actionTypes.GET_NAV,
  list
});

export const searchToggle = () => ({
  type: actionTypes.SEARCH_TOGGLE
});

export const collapseToggle = () => ({
  type: actionTypes.COLLAPSE_TOGGLE
});

export const changeHashUrl = (hashurl) => ({
  type: actionTypes.HASH_URL,
  hashurl
});

export const showSearch = (state) => ({
  type: actionTypes.HAS_SEARCH,
  hasSearch: state
});

/**
 * 获取导航
 */
export const getNavs = () => {
  return async (dispatch) => {
    const navs = await get('/v1/classify');
    dispatch(changeNav(navs));
  }
}