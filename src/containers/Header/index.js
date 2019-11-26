import { connect } from 'react-redux';
import { actionCreators } from './store';
import Header from '../../common/Header';

const mapStateToProps = (state) => {
  return {
    showSearch: state.header.showSearch,
    showCollapseNav: state.header.showCollapseNav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchBtnClick() {
      dispatch(actionCreators.searchToggle());
    },
    handleCollapseNavClick() {
      dispatch(actionCreators.collapseToggle());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);