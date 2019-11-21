import React from 'react';
import { CSSTransition } from 'react-transition-group';
import SliderNav from '../../plugins/sliderNav';
import FontA from 'react-fontawesome';
import {
  NavWrapper
} from './style';

function Nav(props) {
  const ref = React.createRef();
  const {
    showSearch,
    showCollapseNav,
    handleSearchBtnClick,
    handleCollapseNavClick
  } = props;

  return (
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
            <ul>
              <li className="menu-item current_page_item">
                <a href="/">首页</a>
              </li>
              <li className="menu-item">
                <a href="/">HTML技巧</a>
              </li>
              <li className="menu-item">
                <a href="/">Cms文章</a>
              </li>
              <li className="menu-item">
                <a href="/">随心笔记</a>
              </li>
              <li className="menu-item">
                <a href="/">给我留言</a>
              </li>
              <li className="menu-item">
                <a href="/">关于博主</a>
              </li>
            </ul>
          </div>
        </SliderNav>
      </div>
    </NavWrapper>
  )
}

export default Nav;