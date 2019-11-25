import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import Crumbs from '../../components/Crumbs';
import FontA from 'react-fontawesome';
import {
  TextWrapper,
  MarkDownWrapper
} from './style';
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

function Text() {
  const text = '# 标题1\n ## 标题2\n ``` html\n<!doctype html>\n<html>\n\t<div>xxxx</div>\n</html>\n```\n``` javascript\nfunction text() {\n\t # 注释代码\n\tconsole.log("测试数据");console.log("测试数据");console.log("测试数据");\n}\n```\n > **注意：**\n我是注释数据\n\n ![](https://pic3.zhimg.com/80/v2-12c64677f0120a7f487579679aecb4f6_hd.jpg)';

  const crumbsData = [
    {
      name: '主页',
      path: '/'
    },
    {
      name: '前端',
      path: '/web'
    }
  ]

  return(
    <TextWrapper>
      <div className="top">
        <Crumbs crumbs={crumbsData} />
        <div className="title">
          <h1>如果没有略缩图，就不会显示前面的图片！</h1>
          <div className="subtitle">
            <div className="item">
              <FontA name="clock-o" />05-30
            </div>
            <div className="item">
              <FontA name="eye" />1213
            </div>
            <div className="item">
              <FontA name="folder-o" />
              <a href="/" rel="category tag">随心笔记</a>
            </div>
            <div className="item tag">
              <FontA name="tags" />
              <a href="/" rel="category tag">标签1</a>
              <a href="/" rel="category tag">标签2</a>
            </div>
          </div>
        </div>
        <MarkDownWrapper
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}>
        </MarkDownWrapper>
        <div className="postcopyright">
          <strong>版权保护: </strong>
          转载请保留链接:&nbsp;
          <a href="http://127.0.0.4/News/1.html" title="如果没有略缩图，就不会显示前面的图片！">http://127.0.0.4/News/1.html</a>
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
    </TextWrapper>
  )
}

export default Text;