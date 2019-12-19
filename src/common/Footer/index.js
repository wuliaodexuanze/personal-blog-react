import React from 'react';
import config from '../../config';
import {
  FooterWrapper
} from './style';

function Footer() {
  return (
    <FooterWrapper>
      <div className="wrap">
        <div className="clearfix">
          <div className="group">
            <h3>关于本站</h3>
            <ul>
              <li>
                <a href="#/about">网站描述</a>
              </li>
            </ul>
          </div>
          <div className="group">
            <h3>联系我</h3>
            <ul>
              <li>QQ:&nbsp;{config.qq}</li>
              <li>邮箱:&nbsp;{config.email}</li>
              <li>Github:&nbsp;<a title={config.github} href={config.github}>{config.github}</a></li>
            </ul>
          </div>
          <div className="group">
            <h3>特别鸣谢</h3>
            <ul>
              <li>
                <a href="#/" target="blank">手里有糖</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="ffooter">Copyright © 1169655050 版权所有 <a href="#/">Power by jayafs</a></p>
      </div>
    </FooterWrapper>
  )
}

export default Footer;