/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:40:53
 */
import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import BackTop from 'antd/es/back-top';
import { MainWrapper } from './style'
import Side from './common/Side';
import ContentList from './common/ContentList';
import Home from './views/home';
import Article from './views/article';
import NotFound from './views/notFound';

import 'antd/es/back-top/style/index.css';


function App() {
  return (
    <MainWrapper className="wrap">
      <Side />
      <div className="main-left animated fadeInLeft">
        <HashRouter>
          <Switch>
            <Route path="/web" component={ ContentList } />
            <Route path="/server" component={ ContentList } />
            <Route path="/article/:id" component={ Article } />
            <Route path="/" exact component={Home} />
            <Route path="*" component={ NotFound } />
          </Switch>
        </HashRouter>
      </div>
      <BackTop visibilityHeight={100} />
    </MainWrapper>
  );
}

export default App;
