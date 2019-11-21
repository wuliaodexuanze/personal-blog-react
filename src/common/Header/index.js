import React from 'react';
import Nav from '../../containers/Nav';
import Config from '../../config';
import FontA from 'react-fontawesome';
import {
  HeaderWrapper
} from './style';
import logoPic from '../../statics/logo.png';

function Header() {
  return(
    <HeaderWrapper>
      <div className="wrap top clearfix">
        <h1 className="logo">
          <a href="/" title="首页">
            <img src={logoPic} alt="logo" />
          </a>
        </h1>
        <p className="title">我的网站，可以后台设置此处文字！</p>
        <div className="contact">
          <li>
            <a
              className="link"
              href={`http://wpa.qq.com/msgrd?v=3&uin=${Config.QQ}&site=qq&menu=yes`}
              title="QQ联系"
              target="blank">
                <FontA
                  name="qq"
                  size="2x"
                />
              </a></li>
          <li>
            <a
              className="link"
              href="/"
              onClick={e => {e.preventDefault();return false;}}
              title="微信">
              <FontA
                name="weixin"
                size="2x"
              />
              <div className="weixin"><img src={logoPic} alt="微信" /></div>
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/wuliaodexuanze"
              title="github">
              <FontA
                name="github-square"
                size="2x"
              />
            </a>
          </li>
        </div>
      </div>
      <Nav />
    </HeaderWrapper>
  )
}

export default Header;