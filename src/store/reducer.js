import { combineReducers } from 'redux';
import { navReducer } from '../containers/Nav/store';
import { carouselReducer } from '../containers/Carousel/store';
import { loginReducer } from '../containers/Login/store';
import { registerReducer } from '../containers/Register/store';

const reducer = combineReducers({
  nav: navReducer,
  carousel: carouselReducer,
  login: loginReducer,
  register: registerReducer
});

export default reducer;