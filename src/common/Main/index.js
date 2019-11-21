/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import FontA from 'react-fontawesome';
import Carousel from '../../containers/Carousel';
import ListItem from '../../components/ListItem';
import SiderItem from '../../components/SiderItem';
import {
  MainWrapper
} from './style';
import avatarPic from '../../statics/picture/avatar.jpeg';

function MainLeft () {
  return (
    <div className="main-left">
      <Carousel />
      <div className="list-box">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}

function Main() {
  return(
    <MainWrapper className="wrap clearfix">
      <Switch>
        <Route path="/home/new" component={() => (<div>222</div>)} />
        <Route path="/home" component={MainLeft} />
      </Switch>
      <div className="main-right">
        <div className="main">
          <div class="author">
            <div class="topauthor">
              <img alt="" src={avatarPic} />
              <span class="intag">博客主人</span>
              <span class="names">手里有糖</span><br />
              <span class="talk"> 男，文化程度不高性格有点犯二，已经20来岁至今未婚，闲着没事喜欢研究各种代码，资深技术宅。</span>
            </div>
          </div>
          <SiderItem />
          <SiderItem />
          <div class="linkcat">
            <h3 class="head">
              <FontA name="link" /> 友情链接
            </h3>
            <ul className="list">
              <li className="item"><a href="/" target="blank">npm</a></li>
              <li className="item"><a href="/" target="blank">MDN</a></li>
              <li className="item"><a href="/" target="blank">Github</a></li>
              <li className="item"><a href="/" target="blank">Gitee</a></li>
              <li className="item"><a href="/" target="blank">博客园</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Main;