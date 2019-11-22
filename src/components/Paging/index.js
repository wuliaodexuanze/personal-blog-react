import React from 'react';
import {
  PagingWrapper
} from './style';

function Paging() {

  return (
    <PagingWrapper>
      <div className="census">
        <span className="pageinfo">
          共
          <strong>1</strong>
          页
          <strong>2</strong>
          条&nbsp;记录
        </span>
      </div>
    </PagingWrapper>
  )
}

export default Paging;
