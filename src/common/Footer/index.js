import React from 'react';
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
              <li><a href="/" target="blank">网站描述</a></li>
            </ul>
          </div>
          <div className="group">
            <h3>联系我</h3>
            <ul>
              <li>QQ:1169655050</li>
              <li>邮箱:1169655050@qq.com</li>
              <li>Github:1169655050@qq.com</li>
            </ul>
          </div>
          <div className="group">
            <h3>特别鸣谢</h3>
            <ul>
              <li><span><a href="/" target="blank">手里有糖</a></span></li>
            </ul>
          </div>
        </div>
        <p className="ffooter">Copyright © 1169655050 版权所有 <a href="/" target="_blank">Power by jayafs</a></p>
      </div>
    </FooterWrapper>
  )
}

export default Footer;