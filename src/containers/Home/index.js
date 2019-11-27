import { connect } from 'react-redux';
import { actionCreators } from './store';
import Home from '../../components/Home';

const mapStateToProps = (state) => {
  return {
    topList: state.home.topList,
    blogList: state.home.blogList
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBlogTopList() {
    dispatch(actionCreators.getBlogTopList());
  },
  getBlogList() {
    dispatch(actionCreators.getBlogList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);