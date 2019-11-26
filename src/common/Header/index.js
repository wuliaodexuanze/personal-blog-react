import React from 'react';
import {
  HashRouter,
  Link
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import FontA from 'react-fontawesome';
import SliderNav from '../../plugins/sliderNav';
import Config from '../../config';
import 'animate.css';
import {
  HeaderWrapper,
  NavWrapper
} from './style';
import logoPic from '../../statics/logo.png';

function Header(props) {
  const ref = React.createRef();
  const {
    showSearch,
    showCollapseNav,
    handleSearchBtnClick,
    handleCollapseNavClick
  } = props;

  window.onhashchange = () => {
    if (showCollapseNav) {
      handleCollapseNavClick();
    }
  }


  return(
    <HeaderWrapper className="animated fadeInDown">
      <div className="wrap top clearfix">
        <h1 className="logo">
          <a href="/" className="clearfix" title="logo">
            <img src={logoPic} alt="logo" />
            <h1 className="page-title">手里有糖</h1>
          </a>
        </h1>
        <p className="title"></p>
        <div className="contact">
          <li>
            <a
              className="link"
              href={`http://wpa.qq.com/msgrd?v=3&uin=${Config.QQ}&site=qq&menu=yes`}
              title="QQ联系"
              target="blank">
                <FontA
                  name="qq"
                  size="2x"
                />
              </a></li>
          <li>
            <a
              className="link"
              href="/"
              onClick={e => {e.preventDefault();return false;}}
              title="微信">
              <FontA
                name="weixin"
                size="2x"
              />
              <div className="weixin"><img src={logoPic} alt="微信" /></div>
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/wuliaodexuanze"
              title="github">
              <FontA
                name="github-square"
                size="2x"
              />
            </a>
          </li>
        </div>
      </div>
      <NavWrapper>
        <div className="wrap nav">
          <ul className="navbar-header">
            <li
            className = {
              showCollapseNav ? 'navbar-toggle active' : 'navbar-toggle'
            }
            onClick={ () => handleCollapseNavClick(ref) }>
              <FontA
                name="list"
                size="2x"
              />
            </li>
            <li
              className="navbar-search-btn"
              onClick={ handleSearchBtnClick }>
              <div className = {
                showSearch ? 'toggle-search active' : 'toggle-search'
              } >
                <FontA
                  name="search"
                  size="2x"
                />
              </div>
            </li>
            <li className="navbar-search-input">
              <CSSTransition
                in={ showSearch }
                timeout={300}
                classNames="opacity"
                unmountOnExit>
                <div className="search-expand">
                  <div className="search-expand-inner">
                    <input
                      type="text"
                      className="search"
                      placeholder="按回车键搜索..." />
                  </div>
                </div>
              </CSSTransition>
            </li>
          </ul>
          <SliderNav
            in={ showCollapseNav }
            timeout={200}
            effect='ease-out'>
            <div ref={ref} className="navbar-collapse">
              <HashRouter>
                <ul>
                  <li className="menu-item current_page_item">
                    <Link to="/" replace>首页</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/web" replace>前端</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/server" replace>后端</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" replace>关于博主</Link>
                  </li>
                </ul>
              </HashRouter>
            </div>
          </SliderNav>
        </div>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header;