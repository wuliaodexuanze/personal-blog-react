import * as actionTypes from './actionTypes';
import { get } from '../../../plugins/http';

/**
 * 获取轮播图数据
 */
export const getBlogTopList = () => {
  return async (dispatch) => {
    const data = await get('/v1/blog/hot');
    dispatch(changeTopList(data));
  }
}

/**
 * 获取博客列表
 */
export const getBlogList = ({ offset=0, limit=10 }) => {
  return async (dispatch) => {
    const data = await get('/v1/blog', {offset, limit});
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
