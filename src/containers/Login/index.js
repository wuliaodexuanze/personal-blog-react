import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  trim,
  hasIn
} from 'lodash';
import Message from 'antd/es/message';
import { saveTokens } from '../../utils/token';
import { actionCreators } from './store';
import Login from '../../components/Login';
import 'antd/es/message/style/index.css';

const mapDispatchToProps = (dispatch) => ({
  async login(username, password) {
    if (trim(username) && trim(password)) {
      const tokens = await dispatch(actionCreators.login(username, password));
      if (tokens && hasIn(tokens, 'access_token')) {
        saveTokens(tokens.access_token, tokens.refresh_token);
        const user = await dispatch(actionCreators.getUser());
        if (user && user.id) {
          Message.success('登录成功');
          return true;
        }
        Message.error(user.msg);
      }
    } else {
      Message.error('用户名和密码不能为空');
    }

    return false;
  }
});

export default connect(null, mapDispatchToProps)(withRouter(Login));