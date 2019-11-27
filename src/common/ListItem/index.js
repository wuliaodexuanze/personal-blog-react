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
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import {
  ListItemWrapper
} from './style';

function ListItem (props) {

  const {
    id,
    title = '',
    desc = '',
    image = '',
    create_time = 0,
    classify = [],
    fav_nums = 0,
    comment_nums = 0
  } = props;

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
          <span>
            <FontA name="clock-o" />
            {moment(create_time).format('YYYY-MM-DD')}
          </span>
          <span>
            <FontA name="comment-o" />
            <Link to="/article/1" className="ds-thread-count">
              {
                comment_nums || '暂无评论'
              }
            </Link>
          </span>
          <span>
            <FontA name="eye" />{fav_nums}
          </span>
          <Link className="more" to={`/article/${id}`} title="阅读详情">阅读详情</Link>
        </div>
      </div>
    </ListItemWrapper>
  )
}

export default ListItem;