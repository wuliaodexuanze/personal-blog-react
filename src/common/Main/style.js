import styled from 'styled-components';

export const MainWrapper = styled.div `
  padding-top: 20px;

  .main-left {

    @media (min-width: 768px) {
      float: left;
      width: 66.6666667%;
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
`;