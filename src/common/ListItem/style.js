/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:24:49
 */
import styled from 'styled-components';
import shinePic from '../../statics/imgs/shine_brands.png';

export const ListItemWrapper = styled.section`
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ececec;

  .title {
    display: inline-block;
    padding-bottom: 15px;
    font-weight: 500;
    word-wrap: break-word;
    padding-top: 5px;
    .text {
      font-size: 1.2em;
      color: #000;
      &:hover {
        color: #00a4dc;
      }
    }
  }
  
  .category {
    margin-right: 5px;
    color: #1f9dd4;

    a {
      color: #fff!important;
      padding: 2px 5px;
      background-color: #0090ce;
      font-size: .9em!important;
      opacity: .88;
    }
  }

  .viewimg {
    float: left;
    margin-right: 2%;
    img {
      width: 160px;
      height: 120px;
      padding: 3px;
      border: 1px solid #e5e5e5;
    }

    .ipic {
      position: relative;
      display: block;

      &:hover {
        .shine {
          background-position: 160px center;
          transition: all .5s ease-in-out;
        }
      }
    }
  }

  .shine {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 120px;
    background: url(${shinePic}) no-repeat -160px 0;
    margin: 4px
  }

  .preview {
    font-size: .9em;
    color: #737373;
  }
  .preem {
    padding-top: 10px;
    span {
      margin-right: 10px;
    }
    a {
      font-size: .9em;
      color: #999;
    }
  }
  .preem span {
    font-size: .9em;
    color: #999;
  }
  .ds-thread-count {
    &:hover {
      color: #0086e3;
    }
  }
  .more {
    float: right;
    padding: 2px 10px;
    margin-top: -2px;
    &:hover {
      border-radius: 2px;
      background: #0086e3;
      color: #fff;
    }

    @media (max-width: 320px) {
      display: none;
    }
  }
`;