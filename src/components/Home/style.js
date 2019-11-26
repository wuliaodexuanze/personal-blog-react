/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:23:14
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div `
  
  .list-box {
    padding-top: 20px;
  }
`;

export const CarouselWrapper = styled.div `
  position: relative;

  .slide-nav {
    position: absolute;
    top: 50%;
    margin-top: -32px;
    display: inline-block;
    opacity: 0;
    visibility: hidden;
    width: 40px;
    height: 62px;
    text-align: center;
    color: #d5d5d5;
    background: rgba(0,0,0,.3);

    span {
      position: relative;
      top: 7px;
    }
  }
  
  .slide-box {
    max-height: 260px;
    overflow: hidden;
    
    .item {
      img {
        object-fit: cover;
      }
    }
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .show-enter {
    opacity: 0;
  }
  .show-enter-active {
    opacity: 1;
    visibility: visible;
    transition: all .3s ease-in;
  }
  .show-enter-done {
    opacity: 1;
    visibility: visible;
  }
  .show-exit {
    opacity: 1;
  }
  .show-exit-active {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-out;
  }
  .show-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`;