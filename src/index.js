import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import Header from './containers/Header';
import Footer from './common/Footer';
import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User';
import App from './App';
import About from './views/about';
import store from './store'
import BackTop from 'antd/es/back-top';
import 'antd/es/back-top/style/index.css';
// import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'default-passive-events';

ReactDOM.render(
    <Fragment>
      <GlobalStyle />
      <Provider store={ store }>
        <Header />
        <HashRouter>
          <Switch>
            <Route exact path="/about" component={ About } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/user" component={ User } />
            <Route path="/" component={ App }/>
          </Switch>
        </HashRouter>
        <Footer />
        <BackTop visibilityHeight={100} title="回到顶部" />
      </Provider>
    </Fragment>,
  document.getElementById('root'));
// serviceWorker.unregister();