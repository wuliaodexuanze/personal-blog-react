import React from 'react';
import 'animate.css';
import Crumbs from '../../common/Crumbs'
import {
  AboutWrapper
} from './style';

function About() {
  const crumbsData = [
    {
      name: '主页',
      path: '/'
    },
    {
      name: '前端',
      path: '/web'
    }
  ]

  return (
    <AboutWrapper className="wrap animated slideInLeft">
      <div className="article">
        <Crumbs crumbs={ crumbsData }/>
        <h2 className="title"> 关于博主 </h2>
        <ul className="article_content"> 
          <li>前端小白</li>
          <li>地址：这里是您的公司地址</li>
          <li>邮编：000000</li>
          <li>电话：+86 0000 88888</li>
          <li>传真：+86 0000 88888</li>
          <li>网站：www.www.cn</li>
        </ul>
      </div>
    </AboutWrapper>
  )
}

export default About;