import * as actionTypes from './actionTypes';
import {
  get
} from '../../../utils/http';


const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data
})

export const getList = (path, query = {}) => {
  const {
    offset = 0,
    limit = 10,
    q = ''
  } = query;
  return async (dispatch) => {
    const data = await get(`/v1/blog${path}`, {offset, limit, q});
    dispatch(changeList(data));
  }
}

