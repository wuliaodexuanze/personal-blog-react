/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  useEffect,
  useMemo,
  useCallback
} from 'react';
import {
  Link
} from 'react-router-dom';
import FontA from 'react-fontawesome';
import SiderItem from '../SideItem';
import TagItem from '../TagItem';
import LinkItem from '../LinkItem';
import 'animate.css';
import {
  SideWrapper
} from './style';
import defaultAvatarPic from '../../statics/imgs/default-avatar.jpg';

function Side({
  sideData = {},
  userInfo = {},
  getData,
  getUser,
  logout
}) {

  const {
    recommendList = [],
      popularList = [],
      links = [],
      tags
  } = sideData || {};

  const {
    username,
    nickname,
    avatar,
    email
  } = userInfo || {};

  const allData = useMemo(() => ({
    reclist: recommendList,
    linklist: links,
    populist: popularList,
    taglist: tags
  }), [recommendList, popularList, links, tags]);

  const handleLogout = useCallback(() => logout(), [logout]);

  useEffect(() => {
    getData();
    getUser();
  }, [getData, getUser]);

  return (
    <SideWrapper>
      <div className="main-right animated fadeInRight">
        <div className="main">
          
          {
            username ? (
              <div className="author">
                <div className="topauthor">
                  <Link to="/user">
                    <img alt="" src={
                      avatar || defaultAvatarPic
                    } />
                  </Link>
                  <span className="intag">
                    <FontA name="user-o" />
                    用户名
                  </span>
                  <span className="names">{ username }</span>
                  <br />
                  <span className="intag">
                    <FontA name="vcard-o" />
                    昵称
                  </span>
                  <span className="talk">{ nickname || '暂无' }</span>
                  <br />
                  <span className="intag">
                    <FontA name="envelope-o" />
                    邮箱
                  </span>
                  <span className="talk">{ email || '暂无' }</span>
                  <br />
                  <button
                    className="logout-btn"
                    onClick={handleLogout}>退出登录</button>
                </div>
              </div>
            ) : (
              <div className="no-login">
                <Link to="/login" className="btn login-btn">登录</Link>
                <Link to="/register" className="btn register-btn">注册</Link>
              </div>
            )
          }
          
          <div className="right-box">
            <SiderItem
              title="热门文章"
              icon="fire"
              list={allData.reclist} />
            <SiderItem
              title="推荐文章"
              list={allData.populist}
              icon="graduation-cap" />
            <div className="tag-item">
              <TagItem list={allData.taglist} title="标签" icon="tags" />
            </div>
            <div className="tag-item">
              <LinkItem list={allData.linklist} title="友情链接" icon="link" />
            </div>
          </div>
        </div>
      </div>
    </SideWrapper>
  )
}

export default Side;