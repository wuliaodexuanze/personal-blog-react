import { connect } from 'react-redux';
import { actionCreators } from './store';
import Nav from '../../components/Nav';

const mapStateToProps = (state) => {
  return {
    showSearch: state.nav.showSearch,
    showCollapseNav: state.nav.showCollapseNav
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);