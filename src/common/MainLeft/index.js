/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React from 'react';
import Carousel from '../../containers/Carousel';
import ListItem from '../../components/ListItem';
import {
  MainLeftWrapper
} from './style';

function MainLeft() {
  return (
    <MainLeftWrapper>
      <Carousel />
      <div className="list-box">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </MainLeftWrapper>
  )
}

export default MainLeft;