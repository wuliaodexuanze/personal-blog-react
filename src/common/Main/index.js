import React from 'react';
import Carousel from '../../containers/Carousel';
import ListItem from '../../components/ListItem';
import SiderItem from '../../components/SiderItem';
import {
  MainWrapper
} from './style';
import avatarPic from '../../statics/picture/avatar.jpeg';

function Main() {
  return(
    <MainWrapper className="wrap clearfix">
      <div className="main-left">
        <Carousel />
        <div className="list-box">
          <ListItem />
        </div>
      </div>
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
        </div>
      </div>
    </MainWrapper>
  )
}

export default Main;