import { connect } from 'react-redux';
import { actionCreators } from './store';
import Side from '../../common/Side';

const mapStateToProps = (state) => {
  return {
    data: state.side.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(actionCreators.getData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Side);