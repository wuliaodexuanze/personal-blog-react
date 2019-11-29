import * as actionTypes from './actionTypes';
import {
  get
} from '../../../plugins/http';


const changeList = (list) => ({
  type: actionTypes.GET_LIST,
  list
})

export const getList = (path, {offset=0, limit=10}) => {
  return async (dispatch) => {
    const data = await get(`/v1/blog${path}`, {offset, limit});
    dispatch(changeList(data));
  }
}

