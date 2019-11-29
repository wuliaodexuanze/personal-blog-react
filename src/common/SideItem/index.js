/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:48:10
 */
import React, {
  memo
} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FontA from 'react-fontawesome';
import {
  SideItemWrapper
} from './style';

 const SideItem = memo(function SideItem({
   title = '',
   list = [],
   icon = 'align-justify'
 }) {

  return (
    <SideItemWrapper>
    <h3 className="head">
      <FontA name={icon} />&nbsp;{title}
    </h3>
    <ul className="list">
      {
        list.map((item, index) => (
          <li key={`list_${item.id}`} className="item">
            <div className="sideshow">
              {
                index === 0  && (
                  <Link to={`/article/${item.id}`} title="item.title">
                    <img src={item.image} className="icon wp-post-image" alt={item.title} />
                  </Link>
                )
              }
              <Link
                className="title"
                to={`/article/${item.id}`}
                title={item.title}>
                {item.title}
              </Link>
              <span className="datetime">
                {moment(item.create_time).format('YYYY-MM-DD')}
              </span>
            </div>
          </li>
        ))
      }
    </ul>
  </SideItemWrapper>
  )
});

export default SideItem;