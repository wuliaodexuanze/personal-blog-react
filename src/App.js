/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:40:53
 */
import React, {
  useEffect,
  useMemo,
  useCallback
} from 'react';
import {
  connect
} from 'react-redux';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import { MainWrapper } from './style'
import Side from './containers/Side';
import ContentList from './containers/ContentList';
import Tags from './containers/Tags';
import Home from './views/home';
import Article from './views/article';
import NotFound from './views/notFound';
import { actionCreators } from './containers/Header/store';


function App({
  navs = [],
  getNavs,
  location
}) {
  const navlist = useMemo(() => navs, [navs]);
  const getNavData = useCallback(() => getNavs, [getNavs]);

  window.onbeforeunload = () => {
    // 缓存历史记录
    window.localStorage.setItem('history', JSON.stringify(location));
  }

  useEffect(() => {
    getNavData();
  }, [getNavData]);

  return (
    <MainWrapper className="wrap">
      <Side />
      <div className="main-left animated fadeInLeft">
        <HashRouter>
          <Switch>
            {
              navlist.map(item => (
                <Route key={`nav_${item.id}`} path={item.path} component={ ContentList } />
              ))
            }
            <Route path="/article/:id" component={ Article } />
            <Route path="/tags/:id" component={ Tags } />
            <Route path="/" exact component={Home} />
            <Route path="*" component={ NotFound } />
          </Switch>
        </HashRouter>
      </div>
      <div className="clearfix"></div>
    </MainWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    navs: state.header.navs
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNavs() {
    dispatch(actionCreators.getNavs());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
