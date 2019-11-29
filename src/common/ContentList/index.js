import React, {
  useEffect,
  useMemo
} from 'react';
import {
  size,
  filter
} from 'lodash';
import Crumbs from '../Crumbs';
import ListItem from '../ListItem';
import Paging from '../../components/Paging';
import {
  ContentListWrapper
} from './style';

function ContentList({
  location = {},
  navs = [],
  list = [],
  getList
}) {

  const path = location.pathname;

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

  useEffect(() => {
    getList(path);
  }, [path, getList]);

  return (
    <ContentListWrapper>
      <div className="map">
        <Crumbs crumbs={crumbsData} />
        <h2 className="tit">文章分类: <span>{nav && nav.name}</span></h2>
      </div>
      {
        size(list) > 0 ? (
          list.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
        ) : null
      }
      <div className="paging">
        <Paging total={5} />
      </div>
    </ContentListWrapper>
  )
}

export default ContentList;
