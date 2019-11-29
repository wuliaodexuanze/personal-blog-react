import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as articleCreators } from '../Header/store';
import Article from '../../common/Article';

const mapStateToProps = (state) => {
  return {
    detail: state.article.detail.detail
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
  changeHashUrl(hashurl) {
    dispatch(articleCreators.changeHashUrl(hashurl))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);