import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #fff;
  .top {
    height: 100px;
  }
  .logo {
    float: left;
    width: 330px;

    img {
      float: left;
      margin-top: 10px;
      width: 80px;
    }

    .page-title {
      line-height: 100px;
      font-size: 1.5em;
      text-indent: .5em;
    }
  }
  .title {
    float: left;
    margin-top: 25px;
    margin-left: 20px;
    padding: 5px 0;
    line-height: 60px;
    font-size: 16px;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .contact {
    float: right;
    display: none;

    @media(min-width: 992px){
      margin-top: 35px;
      display: inline-block;
    }

    li {
      position: relative;
      display: inline-block;
      padding: 0 10px;
    }

    .weixin {
      position: absolute;
      left: -50%;
      top: 42px;
      padding: 8px;
      width: 100px;
      height: 100px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      display: none;
      z-index: 9;

      &:before {
        position:absolute;
        left:40%;
        top:-16px;
        display:block;
        content:'';
        border-width:8px 8px 8px 8px;
        border-style:solid;
        border-color:transparent transparent #e5e5e5 transparent;
      }
      &:after {
        position:absolute;
        left:40%;
        top:-15px;
        display:block;
        content:'';
        border-width:8px 8px 8px 8px;
        border-style:solid;
        border-color:transparent transparent #fff transparent;
      }
    }

    .link {
      color: #09f;
      -webkit-transition: all .4s;
      -moz-transition: all .4s;
      -o-transition: all .4s;
      -ms-transition: all .4s;
      transition: all .4s;

      &:hover {
        text-shadow: 0 0 20px #046bb0;
	      color: #f1f1f1;

        .weixin {
          display: block;
        }
      }
    }

  }
`;