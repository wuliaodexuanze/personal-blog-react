import React, {
  useState,
  useLayoutEffect,
  useEffect
} from 'react';
import {
  isEmpty,
  isArray,
  size
} from 'lodash';
import { Link } from 'react-router-dom';
import Skeleton from 'antd/es/skeleton';
import Crumbs from '../../common/Crumbs';
import ListItem from '../../common/ListItem';
import Paging from '../../common/Paging';
import 'antd/es/skeleton/style/index.css';
import { TagsWrapper } from './style';

function Tags ({
  match,
  tags = [],
  content = {},
  getTags,
  getContentList
}) {

  const currentId = match.params.id;
  const crumbsData = [{
		name: '主页',
		path: '/'
	}, {
	  name: '标签',
	  path: 'tags'
  }];
  const {
    rows: list,
    count,
    limit,
    offset
  } = content || {};
  const [tagsLoading, setTagsLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);

  const changePage = (page) => {
    getContentList(currentId, {offset: (Number(page) - 1)*limit, limit});
  }

  useLayoutEffect(()=> {
    setTagsLoading(() => true);
    setContentLoading(() => true);
    getTags();
    getContentList(currentId);
  }, [getContentList, getTags, currentId]);

  useEffect(() => {
    if (!isEmpty(tags)) {
      setTagsLoading(() => false);
    }
    if (!isEmpty(content)) {
      setContentLoading(() => false)
    }
  }, [content, tags])

  return (
    <TagsWrapper>
      <div className="top">
        <Crumbs crumbs={crumbsData} />
        <Skeleton
          active
          loading={tagsLoading}>
          {
            isArray(tags) && size(tags) > 0
            ? (
              <div className="tag-list">
                {
                  tags.map((item) => (
                    <Link
                      className={item.id === Number(currentId) ? 'active': ''}
                      to={`/tags/${item.id}`}
                      key={`tag_${item.id}`}
                      title={item.name}>{item.name}</Link>
                  ))
                }
              </div>
            ) : null
          }
        </Skeleton>
      </div>
      
      <div className="content-list">
        <Skeleton
          avatar={{size: 100, shape: 'square'}}
          active
          title={{ rows: 2 }}
          paragraph={{ rows: 5 }}
          loading={contentLoading}>
          {
            isArray(list) && size(list) > 0 ? (
              list.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
            ) : null
          }
        
          <div className="paging">
            <Paging
              total={count}
              current={Number(offset) / limit + 1}
              defaultPageSize={limit}
              changePage={changePage} / >
          </div>
        </Skeleton>
      </div>
    </TagsWrapper>
  )
}

export default Tags;