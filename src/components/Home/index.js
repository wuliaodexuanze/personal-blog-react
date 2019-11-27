/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import {
  size
} from 'lodash';
import Carousel from 'antd/es/carousel';
import Pagination from 'antd/es/pagination';
import ListItem from '../../common/ListItem';
import 'antd/es/carousel/style/index.css';
import 'antd/es/pagination/style/index.css';
import {
  HomeWrapper,
  CarouselWrapper
} from './style';


function Home(props) {
  const {
    topList,
    blogList,
    getBlogTopList,
    getBlogList
  } = props;

  useEffect(() => {
    getBlogTopList();
    getBlogList();
  }, [getBlogTopList, getBlogList]);
  return (
    <HomeWrapper>
      <CarouselWrapper>
        <ul className="slide-box" >
          {
            size(topList) > 0 ? (
              <Carousel autoplay>
              {
                topList.map(item => (
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
          size(blogList) > 0 ? (
            blogList.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
          ) : null
        }
        <div className="paging">
          <Pagination defaultCurrent={6} total={500} size="small" />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Home;