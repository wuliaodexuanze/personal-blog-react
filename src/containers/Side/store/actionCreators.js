import * as actionTypes from './actionTypes';
import {get} from '../../../utils/http';


const changeData = (data) => ({
  type: actionTypes.GET_DATA,
  data
});

export const getData = () => {
  return async (dispatch) => {
    const data = await get('/v1/side');
    dispatch(changeData(data));
  }
}
