import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * 获取轮播图数据
 */
export const getBlogTopList = () => {
  return (dispatch) => {
    axios({
      url: 'http://easy-mock.whgjh.top/mock/5ddce4d037e4477266785f4e/example_copy/v1/blog/hot',
      method: 'get'
    }).then(res => {
      dispatch(changeTopList(res.data));
    });
  }
}

/**
 * 获取博客列表
 */
export const getBlogList = () => {
  return (dispatch) => {
    axios({
      url: '',
      method: 'get'
    }).then(res => {
      dispatch(changeBlogList(res.data));
    });
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
