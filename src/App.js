/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:40:53
 */
import React, { Fragment } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Fragment>
          <Header />
          <Route exact path="/" component={() => (
            <Redirect to="/home/index" from="/home" exact />
          )} />
          <Route path="/home" component={Main}/>
          <Route path="/liuyan" render={() => (
            <div>liuyan</div>
          )}/>
          <Footer />
        </Fragment>
      </Switch>
  </HashRouter>
  );
}

export default App;
