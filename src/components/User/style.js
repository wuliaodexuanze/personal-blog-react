import styled from 'styled-components';
import headBgPic from '../../statics/imgs/user-head-bg.jpg';

export const UserWrapper = styled.div`
  margin-top: 20px;

  .head-box {
    background: url(${headBgPic}) left top no-repeat;
    background-size: cover;
    
    .ant-card-bordered {
      border: none;
    }
    
    .ant-card {
      background: rgba(255, 255, 255, 0.5);
    }
    .ant-card-body {
      padding: 24px 24px 66px;

      @media (max-width: 768px) {
        padding: 10px 10px 34px;
      }

      .ant-card-meta-title {
        margin-top: 18px;

        @media (max-width: 768px) {
          margin-top: 10px;
          font-size: 1em;
        }
      }

      .ant-card-meta-description {
        @media (max-width: 768px) {
          font-size: .8em;
        }
      }
    }
    .ant-card-meta {
      .ant-avatar {
        @media (max-width: 768px) {
          width: 80px!important;
          height: 80px!important;
        }
      }
    }

    .change-avatar {
      position: absolute;
      bottom: 24px;
      left: 36px;

      @media (max-width: 768px) {
        left: 10px;
        bottom: 10px;
      }
    }
  }

  .main-box {
    margin-top: 10px;

    & > .ant-tabs-card > .ant-tabs-content {
      margin-top: -16px;
    }

    & > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
      background: #fff;
      padding: 16px;
    }

    & > .ant-tabs-card > .ant-tabs-bar {
      border-color: #fff;
    }

    & > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
      border-color: transparent;
      background: transparent;
    }

    & > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
      border-color: #fff;
      background: #fff;
      color: #0090ce;
      border: 1px solid #0090ce;
      border-bottom: none;
      border-radius: 0;
    }

    .ant-timeline-item {

      .ant-collapse-header {
        padding-top: 1px;
        padding-bottom: 5px;

        @media (max-width: 768px) {
          font-size: .8em;
        }
      }
    }

    .ant-timeline-item-tail {
      left: 6px;
    }

    .ant-list-vertical {
      
      .ant-list-item-meta, .ant-list-item-meta-title {
        margin-bottom: 0;

        a {
          @media (max-width: 768px) {
            font-size: .8em;
          }
        }
      }
    }
    
    .comment-list {
      a {
        font-size: .8em;
        color: #999;
      }
    }

    .time {
      padding: 5px 0;
    }
    .ant-timeline-item-right {

      .ant-timeline-item-content {
        text-align: left!important;
      }

      .time {
        text-align: right;
      }
    }
  }
  .ant-tabs-tabpane {
    box-sizing: border-box;
  }
  .user-collect {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    li {
      flex: 0 0 48.6%;
      margin-right: 2.4%;

      @media (max-width: 768px) {
        margin-right: 0;
      }

      &:nth-child(2n){
        margin-right: 0;
      }
    }
  }
  
  .upload-avatar {
    line-height: 80px;
  }

  .user-center {

    li {
      padding: 20px 0;
      border-bottom: 1px solid #f5f5f5;
    }

    .left {
      float: left;
      width: 150px;
      line-height: 2.3;
    }
    .right {
      float: left;
    }
  }
`;
