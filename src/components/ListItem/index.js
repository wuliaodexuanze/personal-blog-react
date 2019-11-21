/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:37:31
 */
import React from 'react';
import FontA from 'react-fontawesome';
import {
  ListItemWrapper
} from './style';
import listPic from '../../statics/picture/1-1f5301s915s8.gif';

function ListItem () {
  return (
    <ListItemWrapper>
      <h2 className="title">
        <span className="category">
          <a href="/" rel="category tag">随心笔记</a>
          <FontA name="caret-right" />
        </span>
        <a className="text" href="/" target="ablank">如果没有略缩图，就不会显示前面的图片！</a>
      </h2>
      <div className="clearfix">
        <div className="viewimg">
          <a href="/" title="" target="ablank" className="ipic">
            <img src={listPic} alt="略缩图" className="thumbnail" />
          </a>
        </div>
        <div className="preview">
          如果没有略缩图，就不会显示前面的图片！如果没有略缩图，就不会显示前面的图片！如果没有略缩图，就不会显示前面的图片！如果没有略缩图，就不会显示前面的图片！如果没有略缩图，就……
        </div>
        <div className="preem">
          <span>
            <FontA name="clock-o" />05-30
          </span>
          <span>
            <FontA name="comment-o" />
            <a href="/" className="ds-thread-count">暂无评论</a>
          </span>
          <span>
            <FontA name="eye" />143
          </span>
          <a className="more" href="/" title="阅读详情">阅读详情</a>
        </div>
      </div>
    </ListItemWrapper>
  )
}

export default ListItem;