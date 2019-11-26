import React from 'react';
import Crumbs from '../Crumbs';
import ListItem from '../ListItem';
import Paging from '../../components/Paging';
import {
  ContentListWrapper
} from './style';

function ContentList() {
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
    <ContentListWrapper>
      <div className="map">
        <Crumbs crumbs={crumbsData} />
        <h2 className="tit"> 关于博主 </h2>
      </div>
      <ListItem />
      <ListItem />
      <ListItem />
      <div className="paging">
        <Paging />
      </div>
    </ContentListWrapper>
  )
}

export default ContentList;
