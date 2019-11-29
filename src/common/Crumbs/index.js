import React, {
  Fragment,
  memo
} from 'react';
import {
  Link
} from 'react-router-dom';
import FontA from 'react-fontawesome';
import {
  CrumbsWrapper
} from './style';

const Crumbs = memo(function Crumbs(props) {
  const { crumbs = [] } = props;
  const crumbsLen = crumbs.length - 1;
  return (
    <CrumbsWrapper>
        当前位置：
        {
          crumbs.map((item, index) => (
            crumbsLen === index
            ? <strong key={item.name}>{item.name}</strong>
            : (<Fragment key={index}>
                <Link to={item.path}>{item.name}</Link>
                <FontA name="angle-right" />
              </Fragment>)
          ))
        }
    </CrumbsWrapper>
  )
});

export default Crumbs;