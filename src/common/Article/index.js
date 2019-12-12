import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useCallback
} from 'react';
import {
	Link
} from 'react-router-dom';
import {
  isEmpty,
  trim
} from 'lodash';
import moment from 'moment';
import Skeleton from 'antd/es/skeleton';
import Empty from 'antd/es/empty';
import Message from 'antd/es/message';
import Crumbs from '../Crumbs';
import Paging from '../Paging';
import FontA from 'react-fontawesome';
import 'antd/es/skeleton/style/index.css';
import 'antd/es/empty/style/index.css';
import 'antd/es/message/style/index.css';
import {
	ArticleWrapper,
	MarkDownWrapper
} from './style';

function Article({
  detail = {},
  OrsoArticle = {},
  commentsData = {},
  getDetail,
  getOrsoArticle,
  getComments,
  changeHashUrl,
  match,
  like,
  dislike,
  addComment,
  support,
  oppose
}) {

  const {
		title = '',
		classify={},
		user = [],
		tags = [],
		image = '',
		content = '',
		fav_nums = 0,
    create_time = 0,
    fav_state
  } = detail || {};

  const {
    count = 0,
    rows = [],
    offset = 0,
    limit = 10
  } = commentsData || {};

  const {
    nextArticle,
    prevArticle
  } = OrsoArticle || {};

  const currentUrl = window.location.href;
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);
  const favorEle = useRef();
  const commentEle = useRef();
  // 收藏
  const handleLike = useCallback(() => {
    if (fav_state) {
      dislike(match.params.id);
    } else {
      like(match.params.id)
    }
  }, [dislike, fav_state, like, match.params.id]);

  // 评论
  const handleAddComment = useCallback( async () => {
    const ele = commentEle.current;
    const val = trim(ele.value);
    if (val) {
      const comment = await addComment(match.params.id, val);
      if (comment.error_code === 0) {
        Message.success(comment.msg);
        setTimeout(() => {
          getComments(match.params.id);
        }, 1000);
        ele.value = '';
      }
    }
  }, [addComment, getComments, match.params.id])

  // 评论支持
  const handleSupport = useCallback((e) => {
    e.preventDefault();
    const index = e.currentTarget.getAttribute('data-index');
    support(match.params.id, commentsData, index);
  }, [match.params.id, commentsData, support]);

  // 评论反对
  const handleOppose = useCallback((e) => {
    e.preventDefault();
    const index = e.currentTarget.getAttribute('data-index');
    oppose(match.params.id, commentsData, index);
  }, [match.params.id, oppose, commentsData]);

	const crumbsData = [{
		name: '主页',
		path: '/'
	}, ]

	if (!isEmpty(classify)) {
		crumbsData.push(classify);
		crumbsData.push({
			name: title
		});
  }
  
  const articlePath = classify && classify.path;
  changeHashUrl(`#${articlePath}`);

  useLayoutEffect(() => {
    setArticleLoading(() => true);
    setCommentLoading(() => true);
    getDetail(match.params.id);
    getOrsoArticle(match.params.id);
    getComments(match.params.id);
  }, [getDetail, getComments, getOrsoArticle, match.params.id]);

	useEffect(() => {
    if (!isEmpty(detail)) {
      setArticleLoading(() => false);
    }
    if (!isEmpty(commentsData)) {
      setCommentLoading(() => false);
    }

    window.addEventListener('scroll', () => {
      const favEle = favorEle.current;
      const docTop = document.documentElement.scrollTop;
      const nowTop = docTop + 'px';
      favEle && (favEle.style.cssText = `top:${nowTop}`);
    }, false);

    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [detail, commentsData, match.params.id]);

  const changePage = (page) => {
    getComments(match.params.id, {offset: (Number(page) - 1)*limit, limit});
  }

	return (
    <ArticleWrapper>
      <div
        ref={favorEle}
        className={fav_state ? 'favor active animated zoomIn delay-1s' : 'favor animated zoomIn delay-1s'}
        onClick={handleLike}
        title="收藏">
        <FontA name="fire" />
        <span className="text">
          {
            fav_state ? '已收藏' : '收藏'
          }
        </span>
      </div>
      <Skeleton
        active
        title={{ rows: 3 }}
        paragraph={{ rows: 18 }}
        loading={articleLoading}>
        <div className="top">
          <Crumbs crumbs={crumbsData} />
          <div className="title">
          <h1 title={title}>{title}</h1>
            <div className="subtitle">
              <div className="item">
                <FontA name="user" />
                <Link to="/about" rel="category tag" title="作者">{user && user.username}</Link>
              </div>
              <div className="item" title="收藏">
                <FontA name="star" />{fav_nums}
              </div>
              <div className="item" title="发布时间">
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
              <img src={image.display} alt={title} />
            )
          }
          <MarkDownWrapper
            dangerouslySetInnerHTML={{
              __html: content
            }}>
          </MarkDownWrapper>
          <div className="postcopyright">
            <strong>版权保护: </strong>
            转载请保留链接:&nbsp;
            <a href={currentUrl} title={title}>{currentUrl}</a>
          </div>
          <div
            onClick={handleLike}
            className={fav_state ? 'bottom-favor active': 'bottom-favor'}>
            <FontA name="fire" />
            <span className="text">
              {
                fav_state ? '已收藏' : '收藏'
              }
            </span>
          </div>
        </div>
        <ul className="paging clearfix">
          <li className="first">上一篇：{
            isEmpty(prevArticle)
            ? '没有了'
            : (
              <Link
              to={`/article/${prevArticle.id}`}
              title={prevArticle.title}
              replace>
                {prevArticle.title}
              </Link>
            )
          }</li>
          <li className="last">下一篇：{
            isEmpty(nextArticle)
            ? '没有了'
            : (
              <Link
              to={`/article/${nextArticle.id}`}
              title={nextArticle.title}
              replace>
                {nextArticle.title}
              </Link>
            )
          }</li>
        </ul>
      </Skeleton>
      <div className="comment">
        <div className="comment-title">评论内容</div>
        <textarea
          ref={commentEle}
          className="text"
          placeholder="请输入评论内容">
        </textarea>
        <button
          onClick={handleAddComment}
          type="button"
          className="comment-btn">提交评论</button>
      </div>
      <div className="comment-list">
        <Skeleton
          active
          title={{ rows: 2 }}
          paragraph={{ rows: 5 }}
          loading={commentLoading}>
          <h2 className="list-title">评论列表</h2>
          <ul>
            {
              rows.map((item, index) => (
                <li className="item" key={`li_${item.id}`}>
                  <div className="head">
                    <span>#{Number(offset) + index + 1}楼</span>
                    <span>{moment(item.create_time).format('YYYY-MM-DD h:mm:ss')}</span>
                    <span>{item.user && item.user.username}</span>
                  </div>
                  <div className="text">
                  <p>{item.content}</p>
                    <div className="text-bottom">
                    <a
                      onClick={handleSupport}
                      data-index={index}
                      href="/"
                      className={item.comment_state === 1 ? 'active': ''}>
                      {
                        item.comment_state === 1 ? '已支持' : '支持'
                      }
                      (<span>{item.like_nums}</span>)
                    </a>
                    <a
                      onClick={handleOppose}
                      data-index={index}
                      href="/"
                      className={item.comment_state === -1 ? 'active': ''}>
                      {
                        item.comment_state === -1 ? '已反对' : '反对'
                      }
                      (<span>{item.dislike_nums}</span>)
                    </a>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          {
            count && !commentLoading ? (
              <Paging
                total={count}
                current={Number(offset) / limit + 1}
                defaultPageSize={limit}
                changePage={changePage} / >
            ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无评论" />
          }
        </Skeleton>
      </div>
    </ArticleWrapper>
	)
}

export default Article;