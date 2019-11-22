import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
// import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Fragment>
      <GlobalStyle />
      <Provider store={ store }>
      <App />
      </Provider>
    </Fragment>,
  document.getElementById('root'));
// serviceWorker.unregister();