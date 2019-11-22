import React, { Fragment } from 'react';
import FontA from 'react-fontawesome';
import {
  CrumbsWrapper
} from './style';

function Crumbs(props) {
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
                <a href={item.path}>{item.name}</a>
                <FontA name="angle-right" />
              </Fragment>)
          ))
        }
    </CrumbsWrapper>
  )
}

export default Crumbs;