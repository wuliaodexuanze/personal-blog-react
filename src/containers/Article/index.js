import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  trim,
  cloneDeep,
  isEmpty
} from 'lodash';
import Message from 'antd/es/message';
import { actionCreators } from './store';
import { actionCreators as articleCreators } from '../Header/store';
import Article from '../../common/Article';
import 'antd/es/message/style/index.css';

const mapStateToProps = (state) => {
  return {
    detail: state.article.detail,
    OrsoArticle: state.article.articles,
    commentsData: state.article.comments,
    likeData: state.article.like
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
  changeHashUrl(hashurl) {
    dispatch(articleCreators.changeHashUrl(hashurl))
  },
  getOrsoArticle(id) {
    dispatch(actionCreators.getOrsoArticle(id));
  },
  getComments(id, query = {}) {
    dispatch(actionCreators.getComments(id, query));
  },
  async like(id) {
    const data = await dispatch(actionCreators.like(id));
    await dispatch(actionCreators.getFavorCount(id));
    if (data && (data.error_code === 0)) {
      Message.success(data.msg);
    }
  },
  async dislike(id) {
    const data = await dispatch(actionCreators.dislike(id));
    await dispatch(actionCreators.getFavorCount(id));
    if (data && (data.error_code === 0)) {
      Message.success(data.msg);
    }
  },
  async addComment(id, content) {
    if (id && trim(content)) {
      const comment = await dispatch(actionCreators.addComment(id, content));
      if (comment && (comment.error_code === 0)) {
        return comment;
      }
    }
  },
  async support(blogId, data = {}, index) {
    if (isEmpty(data)) {
      return false;
    }
    const newData = cloneDeep(data);
    const comment = newData.rows && newData.rows[index];
    if (comment) {
      const ret = await dispatch(actionCreators.support(blogId, comment.id));
      if (ret && ret.error_code === 0) {
        Message.success(ret.msg);
        comment.comment_state = 1;
        comment.like_nums += 1;
        dispatch(actionCreators.changeComments(newData));
      }
    }
  },
  async oppose(blogId, data, index) {
    if (isEmpty(data)) {
      return false;
    }
    const newData = cloneDeep(data);
    const comment = newData.rows && newData.rows[index];
    if (comment) {
      const ret = await dispatch(actionCreators.oppose(blogId, comment.id));
      if (ret && ret.error_code === 0) {
        Message.success(ret.msg);
        comment.comment_state = -1;
        comment.dislike_nums += 1;
        if (comment.like_nums > 0) {
          comment.like_nums -= 1;
        }
        dispatch(actionCreators.changeComments(newData));
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Article));