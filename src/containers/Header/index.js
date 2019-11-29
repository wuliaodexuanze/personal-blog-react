import { connect } from 'react-redux';
import { actionCreators } from './store';
import Header from '../../common/Header';

const mapStateToProps = (state) => {
  return {
    showSearch: state.header.showSearch,
    showCollapseNav: state.header.showCollapseNav,
    navs: state.header.navs,
    hashurl: state.header.hashurl
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);