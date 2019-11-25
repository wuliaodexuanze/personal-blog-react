import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import MainLeft from '../../common/MainLeft';
import MainRight from '../../common/MainRight';
import ContentList from '../../common/ContentList';
import Text from '../../common/Text';
import NotFound from '../notFound';
import {
  HomeWrapper
} from './style';

function Home() {
  return (
    <HomeWrapper className="wrap clearfix">
      <MainRight />
      <div className="main-left animated fadeInLeft">
        <HashRouter>
          <Switch>
            <Route path="/web" component={ ContentList } />
            <Route path="/server" component={ ContentList } />
            <Route path="/article/:id" component={ Text } />
            <Route path="/" exact component={MainLeft} />
            <Route path="*" component={ NotFound } />
          </Switch>
        </HashRouter>
      </div>
    </HomeWrapper>
  )
}

export default Home;