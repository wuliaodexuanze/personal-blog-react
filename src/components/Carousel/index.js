import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactSwipe from 'react-swipe';
import FontA from 'react-fontawesome';
import {
  CarouselWrapper
} from './style';
import pic1 from '../../statics/picture/1-1f5302015450-l.jpg';
import pic2 from '../../statics/picture/1-1f5302015280-l.jpg';
import pic3 from '../../statics/picture/1-1f5302015060-l.jpg';
import pic4 from '../../statics/picture/1-1f5302013090-l.jpg';

function Carousel (props) {
  const {
    focused,
    handleSlideFocus,
    handleSlideBlur
  } = props;
  const ref = React.createRef();

  function handleSlideNav(e, arg) {
    e.preventDefault();
    ref.current[arg]();
  }

  return (
    <CarouselWrapper
      onMouseEnter={handleSlideFocus}
      onMouseLeave={handleSlideBlur}>
      <ul className="slide-box">
        <ReactSwipe
        ref={ref}
        className="carousel"
        swipeOptions = {
          {
            continuous: false,
            auto: 2000,
            speed: 400
          }
        } >
            <li className="">
              <a href="/" target="blank">
                <img alt="" src={pic1} />
              </a>
            </li>
            <li className="slide1_on" >
              <a href="/" target="blank">
                <img alt="" src={pic2} />
              </a>
            </li>
            <li className="">
              <a href="/" target="blank">
                <img alt="" src={pic3} />
              </a>
            </li>
            <li className="">
              <a href="/" target="blank">
                <img alt="" src={pic4} />
              </a>
            </li>
        </ReactSwipe>
      </ul>
      <CSSTransition
        in={focused}
        timeout={300}
        classNames="show">
        <a
          href="/"
          className="slide-nav prev"
          onClick={(e) => handleSlideNav(e, 'prev')}>
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
          onClick={(e) => handleSlideNav(e, 'next')}>
          <FontA
            name="angle-right"
            size="3x" />
        </a>
      </CSSTransition>
    </CarouselWrapper>
  )
}

export default Carousel;