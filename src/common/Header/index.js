import React, {
  useMemo,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect
} from 'react';
import {
  HashRouter,
  Link
} from 'react-router-dom';
import {
  trim
} from 'lodash';
import { CSSTransition } from 'react-transition-group';
import FontA from 'react-fontawesome';
import SliderNav from '../../utils/sliderNav';
import config from '../../config';
import 'animate.css';
import {
  HeaderWrapper,
  NavWrapper
} from './style';
import logoPic from '../../statics/logo.png';

function Header({
  navs = [],
  showSearch = false,
  hasSearch = false,
  showCollapseNav = false,
  hashurl='',
  handleSearchBtnClick,
  handleCollapseNavClick,
  changeHashUrl,
  getNavs,
  search,
  showSearchInpt
}) {
  const searchInput = useRef();
  const urlhash = useMemo(() => hashurl, [hashurl]);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const searchInp = searchInput.current;
    const val = trim(searchInp.value);
    search(val, urlhash);
    searchInp.value = '';
    return false;
  }, [search, urlhash]);
  
  window.onhashchange = () => {
    if (showCollapseNav) {
      handleCollapseNavClick();
    }
    changeHashUrl(window.location.hash);
  }

  useLayoutEffect(() => {
    // 处理搜索框，默认不显示，只在主页和web、server页显示
    showSearchInpt();
  }, [showSearchInpt, urlhash]);

  useEffect(() => {
    changeHashUrl(window.location.hash);
    getNavs();
  }, [getNavs, changeHashUrl]);

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
              href={config.QQ}
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
              href={config.github}
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
            onClick={ () => handleCollapseNavClick() }>
              <FontA
                name="list"
                size="2x"
              />
            </li>
            <li
              className={
                hasSearch ? 'navbar-search-btn' : 'hide'
              }
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
            <li className={
              hasSearch ? 'navbar-search-input' : 'hide'
            }>
              <CSSTransition
                in={ showSearch }
                timeout={300}
                classNames="opacity"
                unmountOnExit>
                <div className="search-expand">
                  <form
                    className="search-expand-inner"
                    onSubmit={handleSubmit}>
                    <input
                      ref={searchInput}
                      type="text"
                      className="search"
                      placeholder="按回车键搜索..." />
                  </form>
                </div>
              </CSSTransition>
            </li>
          </ul>
          <SliderNav
            in={ showCollapseNav }
            timeout={200}
            effect='ease-out'>
            <div className="navbar-collapse">
              <HashRouter>
                <ul>
                  <li
                  className={
                    (urlhash === '#/') || (urlhash === '/')
                    ? 'menu-item current_page_item'
                    : 'menu-item'
                  }>
                    <Link to="/" replace>首页</Link>
                  </li>
                  {
                    navs.map(item => (
                      <li
                        key={`nav_${item.id}`}
                        className={
                          ('#'+item.path) === urlhash 
                          ? 'menu-item current_page_item' 
                          : 'menu-item' 
                        }>
                        <Link to={item.path} replace>{item.name}</Link>
                      </li>
                    ))
                  }
                  <li
                    className={
                      urlhash === '#/about'
                      ? 'menu-item current_page_item'
                      : 'menu-item'
                    }>
                    <Link to="/about" replace>关于</Link>
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