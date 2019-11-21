/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:23:14
 */
import styled from 'styled-components';

export const MainWrapper = styled.div `
  padding-top: 20px;
  
  .mb20 {
    margin-bottom: 20px;
  }
  
  .main-left {

    @media (min-width: 768px) {
      float: left;
      width: 66.6666667%;
    }

    .list-box {
      padding-top: 20px;
    }
  }

  .main-right {
    display: none;

    @media (min-width: 768px) {
      display: block;
      float: left;
      width: 33.33333333%;
    }

    .main {
      padding-left: 20px;
    }

    .author {
      margin-bottom: 20px;
      padding: 10px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ececec;

      img {
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 3px solid #fff;
        box-shadow: 1px 1px 7px #777;
      }
    }
    .intag {
      padding: 5px 10px;
      background: #0090ce;
      color: #fff;
      font-size: .7em;
      margin-right: 10px;
    }
    .names {
      font-weight: 600;
    }
    .talk {
      font-size: .8em;
      padding: 5px;
      display: block;
      padding-top: 10px;
    }
  }

  .linkcat {
    background: #fff;

    .head {
      color: #000;
      padding-left: 10px;
      font-size: 15px;
      line-height: 35px;
      display: inherit;
      border: 1px solid #ececec;
    }
    .list {
      padding: 10px;
      border: 1px solid #ececec;
      border-top: 0;
    }
    .item {
      padding: 3px 0;
      display: inline-block;
      width: 48%;
      border-bottom: 0;

      a {
        color: #666;
        &:hover {
          color: #00a4dc;
          text-decoration: underline;
        }
      }
    }
  }
`;