/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:48:10
 */
import React from 'react';
import {
  SideItemWrapper
} from './style';
import listPic from '../../statics/picture/1-1f5301s915s8.gif';

function SideItem() {
  return (
    <SideItemWrapper>
      <h3 className="head">推荐文章</h3>
      <ul className="list">
        <li className="item">
          <div className="sideshow">
            <a href="/" target="_ablank" title="">
              <img src={listPic} className="icon wp-post-image" alt="" />
            </a>
            <a href="/" target="ablank" title="">
              如果没有略缩图，就不会显示前面的图片！
            </a>
            <span className="datetime"> 2017/05/30</span>
          </div>
        </li>
        <li className="item">
          <div className="sideshow">
            <a href="/" target="_ablank" title="这个没有略缩图，不会显示前面的图片！">
              这个没有略缩图，不会显示前面的图片！
            </a>
            <span className="datetime"> 2016/06/05 </span> </div>
        </li>
        <li className="item">
          <div className="sideshow">
            <a href="/" target="_ablank" title="Dede两句代码增加自定义属性">
              Dede两句代码增加自定义属性 </a>
              <span className="datetime"> 2016/06/05</span>
            </div>
        </li>
        <li className="item">
          <div className="sideshow">
            <a href="/" target="_ablank" title="Dede简单搬家"> Dede简单搬家</a>
            <span className="datetime"> 2016/06/05</span>
          </div>
        </li>
        <li className="item">
          <div className="sideshow">
            <a href="/" target="_ablank" title="Html技巧-简单的把Table转成Div">
              Html技巧-简单的把Table转成Div!
            </a>
            <span className="datetime"> 2016/06/05</span>
          </div>
        </li>
      </ul>
    </SideItemWrapper>
  )
}

export default SideItem;