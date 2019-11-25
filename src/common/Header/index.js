import React from 'react';
import Nav from '../../containers/Nav';
import Config from '../../config';
import FontA from 'react-fontawesome';
import 'animate.css';
import {
  HeaderWrapper
} from './style';
import logoPic from '../../statics/logo.png';

function Header() {
  return(
    <HeaderWrapper className="animated fadeInDown">
      <div className="wrap top clearfix">
        <h1 className="logo">
          <a href="/" className="clearfix" title="logo">
            <img src={logoPic} alt="logo" />
            <h1 className="page-title">手里有糖</h1>
          </a>
        </h1>
        <p className="title"></p>
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