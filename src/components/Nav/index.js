import React from 'react';
import {
  HashRouter,
  Link
} from 'react-router-dom';
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
            <HashRouter>
              <ul>
                <li className="menu-item current_page_item">
                  <Link to="/">首页</Link>
                </li>
                <li className="menu-item">
                  <Link to="/front">前端</Link>
                </li>
                <li className="menu-item">
                  <Link to="/front">后端</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">关于博主</Link>
                </li>
              </ul>
            </HashRouter>
          </div>
        </SliderNav>
      </div>
    </NavWrapper>
  )
}

export default Nav;