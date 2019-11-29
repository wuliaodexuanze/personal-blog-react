import { connect } from 'react-redux';
import { actionCreators } from './store';
import ContentList from '../../common/ContentList';

const mapStateToProps = (state) => {
  return {
    navs: state.header.navs,
    list: state.contentList.list
  }
}

const mapDispatchToProps = (dispatch) => ({
  getList(path, query={}) {
    dispatch(actionCreators.getList(path, query));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);