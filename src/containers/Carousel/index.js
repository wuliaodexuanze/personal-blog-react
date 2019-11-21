import { connect } from 'react-redux';
import { actionCreators } from './store';
import Carousel from '../../components/Carousel';

const mapStateToProps = (state) => {
  return {
    focused: state.carousel.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSlideFocus() {
      dispatch(actionCreators.slideFocus());
    },
    handleSlideBlur() {
      dispatch(actionCreators.slideBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);