/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  useState,
  useEffect,
  useMemo,
  useLayoutEffect
} from 'react';
import { Link } from 'react-router-dom';
import {
  isArray,
  isEmpty,
  size
} from 'lodash';
import Carousel from 'antd/es/carousel';
import Skeleton from 'antd/es/skeleton';
import ListItem from '../../common/ListItem';
import Paging from '../../common/Paging';
import 'antd/es/carousel/style/index.css';
import 'antd/es/skeleton/style/index.css';
import {
  HomeWrapper,
  CarouselWrapper
} from './style';


function Home({
  topList = [],
  blogsData = {},
  getBlogTopList,
  getBlogList,
  showSearch
}) {

  const {
    rows:  blogList = [],
    count,
    limit,
    offset
  } = blogsData || {};

  const [topLoading, setTopLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const toplist = useMemo(() => topList, [topList]);
  const bloglist = useMemo(() => blogList, [blogList]);

  useLayoutEffect(() => {
    (async () => {
      setTopLoading(() => true);
      setListLoading(() => true);
      await getBlogTopList();
      await getBlogList();
      showSearch();
    })();
  }, [getBlogList, getBlogTopList, showSearch]);

  useEffect(() => {
    if (!isEmpty(toplist)) {
      setTopLoading(() => false);
    }
    if (!isEmpty(bloglist)) {
      setListLoading(() => false);
    }
  }, [bloglist, toplist]);

  const changePage = (page) => {
    getBlogList({offset: (Number(page) - 1)*limit, limit});
  }

  return (
    <HomeWrapper>
      <CarouselWrapper>
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 4 }}
          loading={topLoading}>
          <ul className="slide-box" >
            {
              isArray(toplist) && size(toplist) > 0 ? (
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
        </Skeleton>
      </CarouselWrapper>
      <div className="list-box">
        <Skeleton
          avatar={{size: 100, shape: 'square'}}
          active
          title={{ rows: 2 }}
          paragraph={{ rows: 5 }}
          loading={listLoading}>
            {
              bloglist.map(item => (
                <ListItem key={`list_${item.id}`} {...item} />)
              )
            }
            <div className="paging">
              <Paging
                total={count}
                current={Number(offset) / limit + 1}
                defaultPageSize={limit}
                changePage={changePage} / >
            </div>
        </Skeleton>
      </div>
    </HomeWrapper>
  )
}

export default Home;