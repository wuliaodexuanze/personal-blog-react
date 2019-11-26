import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    font-family: 'microsoft yahei';
    font-size: 100%;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #0090da;
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  p {
    font-size: 1em;
    margin-bottom: 1em;
  }
  html, body, div, p, ol, ul, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, form, input, select, button, textarea, iframe, th, td {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  th, td {
    border: 1px solid #ddd;
  }
  body {
    margin: 0;
    padding: 0;
    background: #f1f1f1;
    font-size: 1em;
    line-height: 1.5em;
    color: #666;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  i {
    padding-right: 3px;
  }
  a {
    color: #046bb0;
    text-decoration: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  a:hover {
    color: #00a4dc;
    text-decoration: none;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:before,.clearfix:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  #root {
    padding: 0;
    overflow-x: hidden;
  }
  .wrap {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px){
    .wrap {
        width: 750px;
    }
  }
  @media (min-width: 992px){
    .wrap {
        width: 970px;
    }
  }
  @media(min-width: 1200px){
    .wrap {
      width: 1170px;
    }
  }
`;

const MainWrapper = styled.div`
  padding-top: 20px;
  .main-left {
    @media (min-width: 768px) {
      float: left;
      width: 66.6666667%;
    }
  }
`;

export {
  GlobalStyle,
  MainWrapper
};