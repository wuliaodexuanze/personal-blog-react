import * as actionTypes from './actionTypes';
import {
  get
} from '../../../utils/http';
import config from '../../../config';

const changeTags = (data) => ({
  type: actionTypes.GET_TAGS,
  tags: data
});
const changeContentList = (data) => ({
  type: actionTypes.GET_CONTENTLIST,
  content: data
});

export const getTags = () => {
  return async (dispatch) => {
    const detail = await get('/v1/tag');
    dispatch(changeTags(detail));
  }
}

export const getContentList = (id, {
  offset = 0,
  limit = config.limit
}) => {
  return async (dispatch) => {
    if (id) {
      const data = await get(`/v1/tag/${id}/blog`, {
        offset,
        limit
      });
      dispatch(changeContentList(data));
    }
  }
}