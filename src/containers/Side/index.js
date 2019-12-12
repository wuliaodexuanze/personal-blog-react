import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as userActionCreators } from '../User/store';
import Side from '../../common/Side';
import { removeToken, getToken } from '../../utils/token';

const mapStateToProps = (state) => {
  return {
    sideData: state.side.data,
    userInfo: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(actionCreators.getData());
  },
  getUser() {
    const token = getToken('access_token');
    if (token) {
      dispatch(userActionCreators.getUser());
    }
  },
  logout() {
    removeToken();
    dispatch(userActionCreators.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);