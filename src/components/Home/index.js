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
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import {
  size
} from 'lodash';
import { CSSTransition } from 'react-transition-group';
import SwipeableViews from 'react-swipeable-views';
import {
  autoPlay
} from 'react-swipeable-views-utils';
import FontA from 'react-fontawesome';
import ListItem from '../../common/ListItem';
import {
  HomeWrapper,
  CarouselWrapper
} from './style';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// import pic1 from '../../statics/picture/1-1f5302015450-l.jpg';
// import pic2 from '../../statics/picture/1-1f5302015280-l.jpg';
// import pic3 from '../../statics/picture/1-1f5302015060-l.jpg';
// import pic4 from '../../statics/picture/1-1f5302013090-l.jpg';


function Home(props) {
  const {
    topList,
    getBlogTopList
  } = props;

  const [focused, setFocused] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  function handleChangeIndex(index) {
    setCarouselIndex(() => index);
  };

  /**
   * 轮播点击翻动按钮
   * @param {*} num 
   */
  function handlePageChangeIndex(num) {
    const topListLen = size(topList);
    const newNum = carouselIndex + num;
    let idx = 0;
    switch (newNum) {
      case -1:
        idx = topListLen - 1;
        break;
      case topListLen:
        idx = 0;
        break;
      default:
        idx = newNum;
    }
    setCarouselIndex(() => idx);
  }

  /**
   * 鼠标移动到轮播上
   */
  function handleSlideFocus() {
    setFocused(() => true);
  }

  /**
   * 鼠标离开轮播
   */
  function handleSlideBlur() {
    setFocused(() => false);
  }

  useEffect(() => {
    getBlogTopList();
  }, [getBlogTopList]);

  return (
    <HomeWrapper>
      <CarouselWrapper
        onMouseEnter={handleSlideFocus}
        onMouseLeave={handleSlideBlur}>
        <ul className="slide-box" >
          <AutoPlaySwipeableViews
            index={carouselIndex}
            onChangeIndex={handleChangeIndex}>
          {
            topList.map(item => (
              <li className="item" key={item.id}>
                <Link to={'/article/' + item.id}>
                  <img alt={item.title} src={item.image} />
                </Link>
              </li>
            ))
          }
          </AutoPlaySwipeableViews>
        </ul>
        <CSSTransition
          in={focused}
          timeout={300}
          classNames="show">
          <a
            href="/"
            className="slide-nav prev"
            onClick={(e) => {
              e.preventDefault();
              handlePageChangeIndex(1);
            }}>
            <FontA
              name="angle-left"
              size="3x" />
          </a>
        </CSSTransition>
        <CSSTransition
        in={focused}
        timeout={300}
        classNames="show">
          <a
            href="/"
            className="slide-nav next"
            onClick={(e) => {
              e.preventDefault();
              handlePageChangeIndex(-1);
            }}>
            <FontA
              name="angle-right"
              size="3x" />
          </a>
        </CSSTransition>
      </CarouselWrapper>
      <div className="list-box">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </HomeWrapper>
  )
}

export default Home;