import React from 'react';
import Pagination from 'antd/es/pagination';
import 'antd/es/pagination/style/index.css';
import {
  PagingWrapper
} from './style';

function Paging({
  total
}) {

  return (
    <PagingWrapper>
      <Pagination defaultCurrent={1} total={total} size="small" />
    </PagingWrapper>
  )
}

export default Paging;
