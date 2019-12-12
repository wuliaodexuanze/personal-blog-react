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
import FontA from 'react-fontawesome';
import Skeleton from 'antd/es/skeleton';
import 'antd/es/skeleton/style/index.css';
import {
  TagItemWrapper
} from './style';

 const TagItem = memo(function TagItem({
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
    <TagItemWrapper>
      <h3 className="head" title={title}>
        <FontA name={icon} />&nbsp;{title}
      </h3>
      <ul className="list">
        <Skeleton
          active
          title={{ rows: 1 }}
          paragraph={{ rows: 2 }}
          loading={loading}>
          {
            list.map((item) => (
              <li key={`tag_${item.id}`} className="item">
                <Link
                  to={`/tags/${item.id}`}
                  title={item.name}>{item.name}</Link>
              </li>
            ))
          }
        </Skeleton>
      </ul>
    </TagItemWrapper>
  )
});

export default TagItem;