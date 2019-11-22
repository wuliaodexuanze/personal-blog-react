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
  Switch
} from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './views/home';
import About from './views/about';

function App() {
  return (
    <Fragment>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/about" component={ About } />
          <Route path="/" component={ Home }/>
        </Switch>
      </HashRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
