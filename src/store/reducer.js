import { combineReducers } from 'redux';
import { navReducer } from '../containers/Nav/store';
import { carouselReducer } from '../containers/Carousel/store'

const reducer = combineReducers({
  nav: navReducer,
  carousel: carouselReducer
});

export default reducer;