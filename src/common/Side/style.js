/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:23:14
 */
import styled from 'styled-components';

export const SideWrapper = styled.div `
  @keyframes turnZ{
    0%{transform:rotateZ(0deg);}
    100%{transform:rotateZ(360deg);}

  }

  .main-right {
    display: block;

    @media (min-width: 768px) {
      float: right;
      width: 33.33333333%;
    }

    .right-box {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .main {
      
      @media (min-width: 768px) {
        padding-left: 20px;
      }
    }

    .author {
      margin-bottom: 20px;
      padding: 10px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ececec;
      cursor: pointer;

      img {
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 3px solid #fff;
        box-shadow: 1px 1px 7px #777;

        &:hover {
          animation-name: turnZ;
          animation-duration: 2s;
          animation-iteration-count: 1;
          animation-delay: .3s;
        }
      }
    }

    .no-login {
      margin-bottom: 20px;
      padding: 20px 10px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #ececec;
      text-align: center;
      .btn {
        border: 1px solid transparent;
        padding: .375rem .85rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #f8f8f8;
        cursor: pointer;
      }

      .login-btn {
        margin-right: 10px;
        background: #09f;
        &:hover {
          background: #0090ce;
        }
      }

      .register-btn {
        background: #0090ce;
        &:hover {
          background: #0b7cad;
        }
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
