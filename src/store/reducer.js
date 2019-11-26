import { combineReducers } from 'redux';
import { headerReducer } from '../containers/Header/store';
import { homeReducer } from '../containers/Home/store';
import { articleReducer } from '../containers/Article/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  article: articleReducer
});

export default reducer;