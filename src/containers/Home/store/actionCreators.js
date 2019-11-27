import * as actionTypes from './actionTypes';
import { get } from '../../../plugins/http';

/**
 * 获取轮播图数据
 */
export const getBlogTopList = () => {
  return async (dispatch) => {
    const data = await get('/v1/blog/hot');
    dispatch(changeTopList(data))
  }
}

/**
 * 获取博客列表
 */
export const getBlogList = () => {
  return async (dispatch) => {
    const data = await get('/v1/blog');
    dispatch(changeBlogList(data))
  }
};

const changeBlogList = (list) => ({
  type: actionTypes.GET_BLOG_LIST,
  list
});

const changeTopList = (list) => ({
  type: actionTypes.GET_BLOG_TOP_LIST,
  list
});
