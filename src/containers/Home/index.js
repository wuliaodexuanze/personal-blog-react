import { connect } from 'react-redux';
import { actionCreators } from './store';
import Home from '../../components/Home';

const mapStateToProps = (state) => {
  return {
    topList: state.home.topList,
    blogsData: state.home.blogsData
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBlogTopList() {
    dispatch(actionCreators.getBlogTopList());
  },
  getBlogList(query={}) {
    dispatch(actionCreators.getBlogList(query));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);