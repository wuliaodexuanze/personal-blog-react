/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  Fragment,
  useEffect,
  useMemo
} from 'react';
import { Link } from 'react-router-dom';
import {
  size
} from 'lodash';
import Carousel from 'antd/es/carousel';
import Empty from 'antd/es/empty';
import ListItem from '../../common/ListItem';
import Page from '../Paging';
import 'antd/es/carousel/style/index.css';
import 'antd/es/empty/style/index.css';
import {
  HomeWrapper,
  CarouselWrapper
} from './style';


function Home({
  topList = [],
  blogsData = {},
  getBlogTopList,
  getBlogList
}) {

  const {
    list:  blogList,
    total
  } = blogsData;

  const toplist = useMemo(() => topList, [topList]);
  const bloglist = useMemo(() => blogList, [blogList]);

  useEffect(() => {
    getBlogTopList();
    getBlogList();
  }, [getBlogTopList, getBlogList]);

  
  return (
    <HomeWrapper>
      <CarouselWrapper>
        <ul className="slide-box" >
          {
            size(toplist) > 0 ? (
              <Carousel autoplay>
              {
                toplist.map(item => (
                  <li className="item" key={`top_${item.id}`}>
                    <Link to={'/article/' + item.id}>
                      <img alt={item.title} src={item.image} />
                    </Link>
                    <div className="title">
                      <Link to={'/article/' + item.id}>{item.title}</Link>
                    </div>
                  </li>
                ))
              }
              </Carousel>
            ): null
          }
        </ul>
      </CarouselWrapper>
      <div className="list-box">
        {
          size(bloglist) > 0 ? (
            <Fragment>
              {
                bloglist.map(item => (
                  <ListItem key={`list_${item.id}`} {...item} />)
                )
              }
              <div className="paging">
                <Page total={total} />
              </div>
            </Fragment>
          ) : <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="暂无数据" / >
        }
      </div>
    </HomeWrapper>
  )
}

export default Home;