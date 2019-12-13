/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:48:10
 */
import React, {
  memo,
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Skeleton from 'antd/es/skeleton';
import FontA from 'react-fontawesome';
import 'antd/es/skeleton/style/index.css';
import {
  SideItemWrapper
} from './style';

 const SideItem = memo(function SideItem({
   title = '',
   list = [],
   icon = 'align-justify'
 }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (list.length > 0) {
      setLoading(() => false);
    }
  }, [list])

  return (
    <SideItemWrapper>
      <h3 className="head" title={title}>
        <FontA name={icon} />&nbsp;{title}
      </h3>
      
      <ul className="list">
        <Skeleton
        active
        title={{ rows: 2 }}
        paragraph={{ rows: 3 }}
        loading={loading}>
          {
            list.map((item, index) => (
              <li key={`list_${item.id}`} className="item">
                <div className="sideshow">
                  {
                    index === 0  && (
                      item.image ? (
                        <Link to={`/article/${item.id}`} title="item.title">
                          <img src={item.image} className="icon wp-post-image" alt={item.title} />
                        </Link>
                      ) : null
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
        </Skeleton>
      </ul>
  </SideItemWrapper>
  )
});

export default SideItem;