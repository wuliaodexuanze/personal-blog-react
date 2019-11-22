/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React from 'react';
import FontA from 'react-fontawesome';
import SiderItem from '../../components/SiderItem';
import 'animate.css';
import {
  MainRightWrapper
} from './style';
import avatarPic from '../../statics/picture/avatar.jpeg';

function MainRight() {
  return (
    <MainRightWrapper className="animated fadeInRight">
      <div className="main-right">
        <div className="main">
          <div className="author">
            <div className="topauthor">
              <img alt="" src={avatarPic} />
              <span className="intag">博客主人</span>
              <span className="names">手里有糖</span><br />
              <span className="talk"> 男，文化程度不高性格有点犯二，已经20来岁至今未婚，闲着没事喜欢研究各种代码，资深技术宅。</span>
            </div>
          </div>
          <div className="right-box">
            <SiderItem />
            <SiderItem />
            <div className="linkcat">
              <h3 className="head">
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
      </div>
    </MainRightWrapper>
  )
}

export default MainRight;