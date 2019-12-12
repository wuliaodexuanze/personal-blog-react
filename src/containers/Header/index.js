import { connect } from 'react-redux';
import {
  trim,
  split
} from 'lodash';
import { actionCreators } from './store';
import { actionCreators as homeActionCreators } from '../Home/store';
import { actionCreators as contentListActionCreators } from '../ContentList/store';
import Header from '../../common/Header';

const mapStateToProps = (state) => {
  return {
    showSearch: state.header.showSearch,
    showCollapseNav: state.header.showCollapseNav,
    navs: state.header.navs,
    hashurl: state.header.hashurl,
    hasSearch: state.header.hasSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchBtnClick() {
      dispatch(actionCreators.searchToggle());
    },
    handleCollapseNavClick() {
      dispatch(actionCreators.collapseToggle());
    },
    changeHashUrl(url) {
      dispatch(actionCreators.changeHashUrl(url));
    },
    getNavs() {
      dispatch(actionCreators.getNavs());
    },
    search(val, url) {
      const newVal = trim(val);
      const path = split(url, '#')[1];
      if (path === '/') {
        dispatch(homeActionCreators.getBlogList({
          q: newVal
        }));
      } else if ((path === '/web') || (path === '/server')) {
        dispatch(contentListActionCreators.getList(path, {
          q: newVal
        }));
      }
    },
    /**
     * 隐藏输入框
     */
    showSearchInpt() {
      dispatch(actionCreators.showSearch(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);