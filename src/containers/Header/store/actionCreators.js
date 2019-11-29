import * as actionTypes from './actionTypes';
import { get } from '../../../plugins/http';


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

/**
 * 获取导航
 */
export const getNavs = () => {
  return async (dispatch) => {
    const navs = await get('/v1/nav');
    dispatch(changeNav(navs));
  }
}