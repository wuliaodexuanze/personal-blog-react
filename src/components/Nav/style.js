import styled from 'styled-components';

export const NavWrapper = styled.nav `
  height: auto;
  background-color: #0090ce;

  .nav {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-header {
    @media (min-width: 768px) {
      display: block;
    }
  }

  .toggle-search,
  .navbar-toggle,
  .mainmenu {
    color: #fff;
    line-height: 24px;
    cursor: pointer;
    font-size: 16px;
    padding: 6px 15px;
    display: block;
    -webkit-box-shadow: -1px 0 0 rgba(255,255,255,0.1);
    box-shadow: -1px 0 0 rgba(255,255,255,0.1);
    height: 33px;
    display: inline-block;
  }
  .toggle-search:hover,
  .toggle-search.active,
  .navbar-toggle:hover,
  .navbar-toggle.active {
    background: rgba(0,0,0,0.15);
    color: #fff;
  }
  .navbar-toggle {
    @media (min-width: 768px) {
      float: right;
      display: none;
    }
  }
  .navbar-search-btn {
    float: right;
  }
  .navbar-search-input {
    float: right;

    .search-expand {
      z-index: 2;
    }
    .search-expand-inner {
      padding: 5px 5px 4px 5px;
      background-color: rgba(0,0,0,0.15);
    }

    .opacity-enter {
      opacity: 0;
    }
    .opacity-enter-active {
      opacity: 1;
      transition: all .3s ease-in;
    }
    .opacity-enter-done {
      opacity: 1;
    }
    .opacity-exit {
      opacity: 1;
    }
    .opacity-exit-active {
      opacity: 0;
      transition: all .3s ease-out;
    }
    .opacity-exit-done {
      opacity: 0;
    }
  }

  .search {
    line-height: 31px;
    border: 0;
    padding: 2px 2px 2px 10px;
    color: #666;
    &::placeholder {
      color: #c5c5c5;
    }
  }

  .navbar-collapse {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    background-color: #0090ce;

    @media (min-width: 768px) {
      position: relative !important;
      visibility: visible !important;
      display: block !important;
      width: auto !important;
      height: auto !important;
    }

    ul {
      @media (min-width: 768px) {
        font-size: 0;
      }
    }

    .menu-item {
      position: relative;
      display: block;

      @media (min-width: 768px) {
        display: inline-block;
      }
      @media (min-width: 992px) {
        display: inline-block;
      }
      @media (min-width: 1200px) {
        display: inline-block;
      }

      a {
        display: block;
        font-size: 16px;
        line-height: 45px;
        padding: 0 25px 0 23px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,0.3);
        transition: all .1s ease-in;
      }
    }

    .current_page_item {
      a {
        background-color: rgba(0,0,0,0.1);
      }
    }
  }
`;