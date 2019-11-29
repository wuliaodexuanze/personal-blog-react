import React, {
  Fragment,
  useEffect
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  isEmpty
} from 'lodash';
import moment from 'moment';
import marked from 'marked';
import Empty from 'antd/es/empty';
import hljs from 'highlight.js';
import Crumbs from '../Crumbs';
import FontA from 'react-fontawesome';
import {
  ArticleWrapper,
  MarkDownWrapper
} from './style';
import 'antd/es/empty/style/index.css';
import '../../statics/css/github.min.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: true,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

function Article({
  detail={},
  getDetail,
  changeHashUrl
}) {

  const currentUrl = window.location.href;

  const {
    id,
    title='',
    classify=[],
    user=[],
    tags=[],
    image='',
    content='',
    fav_nums=0,
    create_time=0
  } = detail;

  const crumbsData = [
    {
      name: '主页',
      path: '/'
    },
  ]

  if (classify[0]) {
    crumbsData.push(classify[0]);
    crumbsData.push({
      name: title
    });
  }

  const articlePath = classify[0] && classify[0].path;

  useEffect(() => {
    getDetail(1);
    changeHashUrl(`#${articlePath}`);
  }, [getDetail, changeHashUrl, articlePath]);

  return(
    <ArticleWrapper>
      {
        isEmpty(detail)
        ?
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="暂无数据" / >
        : (
          <Fragment>
            <div className="top">
              <Crumbs crumbs={crumbsData} />
              <div className="title">
              <h1 title={title}>{title}</h1>
                <div className="subtitle">
                  <div className="item">
                    <FontA name="user" />
                    <Link to="/about" rel="category tag">{user[0] && user[0].nickname}</Link>
                  </div>
                  <div className="item">
                    <FontA name="star" />{fav_nums}
                  </div>
                  <div className="item">
                    <FontA name="clock-o" />
                    {moment(create_time).format('YYYY-MM-DD')}
                  </div>
                  <div className="item tag">
                    <FontA name="tags" />
                    {
                      tags.map(item => (
                        <Link
                        key={`tag_${item.id}`}
                        to="/"
                        title={item.name}
                        rel="category tag">{item.name}&nbsp;</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
              {
                image && (
                  <img src={image} alt={title} />
                )
              }
              <MarkDownWrapper
              className="markdown-body"
              dangerouslySetInnerHTML={{
                __html: marked(content)
              }}>
              </MarkDownWrapper>
              <div className="postcopyright">
                <strong>版权保护: </strong>
                转载请保留链接:&nbsp;
                <a href={currentUrl} title={title}>{currentUrl}</a>
              </div>
            </div>
            <ul className="paging clearfix">
              <li className="first">上一篇：没有了  </li>
              <li className="last">下一篇：<a href="/News/2.html">这个没有略缩图，不会显示前面的图片！</a> </li>
            </ul>
            <div className="comment">
              <div className="comment-title">评论内容</div>
              <textarea
              className="text"
              defaultValue="如果没有略缩图， 就不会显示前面的图片！ 如果没有略缩图， 就不会显示前面的图片！ 如果没有略缩图， 就不会显示前面的图片！ 如果没有略缩图， 就不会显示前面的图片！ 如果没有略缩图， 就不会显示前面的图片！"
              placeholder="请输入评论内容">
              </textarea>
              <button className="comment-btn">提交评论</button>
            </div>
            <ul className="comment-list">
              <h2 className="list-title">评论列表</h2>
              <li className="item">
                <div className="head">
                  <span>#1楼</span>
                  <span>2019-11-25 09:57</span>
                  <span>javafs</span>
                </div>
                <div className="text">
                  <p>展示内容</p>
                  <div className="text-bottom">
                    <a href="/">支持(<span>0</span>)</a>
                    <a href="/">反对(<span>0</span>)</a>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="head">
                  <span>#1楼</span>
                  <span>2019-11-25 09:57</span>
                  <span>javafs</span>
                </div>
                <div className="text">
                  <p>展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容</p>
                  <div className="text-bottom">
                    <a href="/">支持(<span>0</span>)</a>
                    <a href="/">反对(<span>0</span>)</a>
                  </div>
                </div>
              </li>
            </ul>
          </Fragment>
        )
      }
    </ArticleWrapper>
  )
}

export default Article;