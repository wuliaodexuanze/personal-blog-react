import React, {
  useEffect,
  useMemo,
  useState,
  useLayoutEffect
} from 'react';
import {
  size,
  filter,
  isEmpty,
  isArray
} from 'lodash';
import Skeleton from 'antd/es/skeleton';
import Crumbs from '../Crumbs';
import ListItem from '../ListItem';
import Paging from '../Paging';
import 'antd/es/skeleton/style/index.css';
import {
  ContentListWrapper
} from './style';

function ContentList({
  location = {},
  navs = [],
  listData = {},
  getList,
  showSearch
}) {

  const [loading, setLoading] = useState(true);

  const path = location.pathname;

  const {
    rows: list,
    count,
    limit,
    offset
  } = listData || {};

  const nav = filter(navs, {
    path
  })[0];

  const crumbsData = useMemo(() => (
    [{
        name: '主页',
        path: '/'
      },
      nav
    ]
  ), [nav]);

  useLayoutEffect(() => {
    setLoading(() => true);
    getList(path);
    showSearch();
  }, [getList, path, showSearch]);

  useEffect(() => {
    if (!isEmpty(listData) && !isEmpty(listData.rows)) {
      setLoading(() => false);
    } else {
      setLoading(() => true);
    }
  }, [listData]);

  const changePage = (page) => {
    getList(path, {offset: (Number(page) - 1)*limit, limit});
  }

  return (
    <Skeleton
      avatar={{size: 100, shape: 'square'}}
      active
      title={{ rows: 2 }}
      paragraph={{ rows: 5 }}
      loading={loading}>
      <ContentListWrapper>
        <div className="map">
          <Crumbs crumbs={crumbsData} />
          <h2 className="tit">文章分类: <span>{nav && nav.name}</span></h2>
        </div>
        {
          isArray(list) && size(list) > 0 ? (
            list.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
          ) : null
        }
        <div className="paging">
          <Paging
            total={count}
            current={Number(offset) / limit + 1}
            defaultPageSize={limit}
            changePage={changePage} / >
        </div>
      </ContentListWrapper>
    </Skeleton>
  )
}

export default ContentList;
