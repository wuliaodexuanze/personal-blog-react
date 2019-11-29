/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:37:31
 */
import React, {
  memo
} from 'react';
import FontA from 'react-fontawesome';
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import {
  ListItemWrapper
} from './style';

const ListItem = memo(function ListItem({
  id,
  title = '',
  desc = '',
  image = '',
  create_time = 0,
  classify = [],
  user=[],
  fav_nums = 0,
  comment_nums = 0
}) {
  return (
    <ListItemWrapper>
      <h2 className="title">
        {
          classify[0] ? (
            <span className="category">
              < Link to = {
                {
                  pathname: classify[0].path,
                  query: {
                    type: id
                  }
                }
              }
              rel = "category tag" >
                { classify[0].name || null }
              </Link>
              <FontA name="caret-right" />
            </span>
          ) : null
        }
      <Link className="text" to={`/article/${id}`}>{title}</Link>
      </h2>
      <div className="clearfix">
        {
          image ? (
            <div className="viewimg">
              <Link
              to={`/article/${id}`}
              title={title}
              className="ipic">
                <img src={image} alt="略缩图" className="thumbnail" />
                <span className="shine">&nbsp;</span>
              </Link>
            </div>
          ) : null
        }
        <div className="preview">
          {
            desc || title
          }
        </div>
        <div className="preem">
          <span className="item" title="作者">
            <FontA name="user" />
            <Link to='/about'>
              {
                user[0] && user[0].nickname
              }
            </Link>
          </span>
          <span className="item" title="评论数">
            <FontA name="comment" />
            <Link to="/article/1" className="ds-thread-count">
              {
                comment_nums || '暂无评论'
              }
            </Link>
          </span>
          <span className="item" title="点赞数">
            <FontA name="star" />{fav_nums}
          </span>
          <span className="item" title="发布时间">
            <FontA name="clock-o" />
            {moment(create_time).format('YYYY-MM-DD')}
          </span>
          <Link className="more" to={`/article/${id}`} title="阅读详情">阅读详情</Link>
        </div>
      </div>
      <a href="/" className="cllect" title="点我收藏">
        <FontA name="share-alt-square" size="2x" />
      </a>
    </ListItemWrapper>
  )
});

export default ListItem;