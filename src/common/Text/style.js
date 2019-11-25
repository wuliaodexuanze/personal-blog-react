import styled from 'styled-components';

export const TextWrapper = styled.article`
  .top {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ececec;
    overflow: hidden;
  }

  .title {
    border-bottom: 1px dashed #ddd;
    margin-bottom: 20px;

    h1 {
      font-size: 24px;
      line-height: normal;
      color: #404040;
      margin-bottom: .3em;
    }
  }

  .subtitle {
    font-size: .9em;
    color: #999;

    a {
      font-size: .9em;
      color: #999;

      &:hover {
        color: #046bb0;
        text-decoration: underline;
      }
    }
    
    .item {
      display: inline-block;
      margin-right: 10px;

      span {
        margin-right: 3px;
      }
    }
  }

  .tag {
    span {
      margin-right: 0;
    }
    a {
      margin-right: 3px;
    }
  }

  .postcopyright {
    padding: 13px 20px;
    margin: 10px 0;
    font-size: .85em;
    background-color: #f7f7f7;
    color: #393a3b;
  }

  .paging {
    background-color: #fbfbfb;
    overflow: hidden;
    padding: 15px 20px;
    font-size: 15px;
    color: #999;
    margin-bottom: 20px;
    border: 1px solid #ececec;
    border-top: 0;

    .first {
      float: left;
      width: 100%;

      @media (min-width: 1024px) {
        width: 49%;
      }
    }

    .last {
      float: right;
      width: 100%;

      @media (min-width: 992px) {
        width: 49%;
      }
    }

    a {
      color: #666;
      font-size: .9em;
      
      &:hover {
        color: #046bb0;
        text-decoration: underline;
      }
    }
  }
  .comment {

    .comment-title {
      color: #333;
      font-weight: 600;
    }
    .text {
      width: 100%;
      min-height: 160px;
      resize: none;
      border: 1px solid #ddd;
      background: #fff;
      outline: none;
      padding: 10px;
      display: block;
      font-size: .9em;
      box-sizing: border-box;

      &:focus, &:active {
        border-color: #09f;
      }
    }

    .comment-btn {
      padding: .1rem .4rem;
      font-size: .8rem;
      line-height: 1.5;
      color: #f8f8f8;
      border: 1px solid transparent;
      background: #09f;
      cursor: pointer;
      margin-top: 15px;
    }
  }

  .comment-list {
    margin-top: 15px;
    .list-title {
      padding: 10px 0;
      color: #333;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
    .head {
      span {
        margin-right: 10px;
        font-size: .9em;
      }
    }

    .text {
      border-bottom: 1px solid #ddd;
      padding: 20px 18px 10px 15px;
      min-height: 35px;
      margin-bottom: 1em;
      line-height: 1.5;
      font-size: .9em;
      color: #333;

      p {
        word-wrap: break-word;
        overflow: hidden;
      }
    }

    .text-bottom {
      text-align: right;

      a {
        padding: 0 5px;
        color: #333;

        &:hover {
          color: #f60;
        }
      }
    }
  }
`;