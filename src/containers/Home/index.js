import { connect } from 'react-redux';
import { actionCreators } from './store';
import Home from '../../components/Home';

const mapStateToProps = (state) => {
  return {
    topList: state.home.topList
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBlogTopList() {
    dispatch(actionCreators.getBlogTopList());
  },
  getBlogBlist(dispatch) {
    dispatch(actionCreators.getBlogBlist());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);