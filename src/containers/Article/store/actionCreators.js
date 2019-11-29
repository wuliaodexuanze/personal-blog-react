import * as actionTypes from './actionTypes';
import { get } from '../../../plugins/http';


const changeData = (detail) => ({
  type: actionTypes.GET_DETAIL,
  detail
});

export const getDetail = (id) => {
  return async (dispatch) => {
    const detail = await get(`/v1/article/${id}`);
    dispatch(changeData(detail));
  }
};
