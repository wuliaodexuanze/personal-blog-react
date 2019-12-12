import * as actionTypes from './actionTypes';
import { get } from '../../../utils/http';

/**
 * 获取轮播图数据
 */
export const getBlogTopList = () => {
  return async (dispatch) => {
    const data = await get('/v1/blog/tops');
    dispatch(changeTopList(data));
  }
}

/**
 * 获取博客列表
 */
export const getBlogList = (query = {}) => {
  const {
    offset = 0,
    limit = 10,
    q = ''
  } = query;
  return async (dispatch) => {
    const data = await get('/v1/blog', {offset, limit, q});
    dispatch(changeBlogList(data));
  }
};

const changeBlogList = (data) => ({
  type: actionTypes.GET_BLOG_LIST,
  data
});

const changeTopList = (list) => ({
  type: actionTypes.GET_BLOG_TOP_LIST,
  list
});
