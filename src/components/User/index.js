import React, {
  Fragment
} from 'react';
import FontA from 'react-fontawesome';
import Card from 'antd/es/card';
import Avatar from 'antd/es/avatar';
import Tabs from 'antd/es/tabs';
import Timeline from 'antd/es/timeline';
import Collapse from 'antd/es/collapse';
import List from 'antd/es/list';
import Upload from 'antd/es/upload';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Typography from 'antd/es/typography';
import ListItem from '../../common/ListItem';
import 'antd/es/card/style/index.css';
import 'antd/es/avatar/style/index.css';
import 'antd/es/tabs/style/index.css';
import 'antd/es/timeline/style/index.css';
import 'antd/es/collapse/style/index.css';
import 'antd/es/list/style/index.css';
import 'antd/es/typography/style/index.css';
import 'antd/es/upload/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/input/style/index.css';

import {
  UserWrapper
} from './style';

const { Meta } = Card;
const { TabPane } = Tabs;
const { Panel } = Collapse;

function User() {


  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  const data2 = {
    id: 1,
    title: '测试数据',
    create_time: 0,
    user: [{
      id: 1,
      nickname: 'javafs'
    }],
    fav_nums: 0,
    comment_nums: 0
  }

  return(
    <UserWrapper className="wrap animated slideInLeft">
      <div className="head-box">
        <Card>
          <Meta
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                size={120}
                alt="头像"
              />
            }
            title={<Fragment><FontA name="user" />&nbsp;用户昵称</Fragment>}
            description={
              <ul>
                <li>
                  <FontA name="certificate" />&nbsp;
                  暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述
                </li>
                <li>
                  <FontA name="envelope" />&nbsp;
                  1169655050@qq.com
                </li>
              </ul>
            }
          />
        </Card>
      </div>
      <div className="main-box">
        <Tabs type="card" defaultActiveKey="1">
          <TabPane tab="用户中心" key="1">
            <ul className="user-center">
              <li className="clearfix user-img">
                <div className="left">
                  <img className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  alt="" />
                </div>
                <div className="right">
                  <Upload>
                    <Button type="primary">
                      <FontA name="upload" />&nbsp;更改头像
                    </Button>
                  </Upload>
                </div>
              </li>
              <li className="clearfix">
                <div className="left">
                  昵称
                </div>
                <div className="right">
                  <Input defaultValue="javafs" placeholder="请输入昵称" />
                </div>
              </li>
              <li className="clearfix">
                <div className="left">
                  邮箱
                </div>
                <div className="right">
                  1169655050@qq.com
                </div>
              </li>
              <li className="clearfix">
                <div className="left">
                  密码
                </div>
                <div className="right">
                  <Input type="passowrd" placeholder="不修改密码可以不用填写" />
                </div>
              </li>
              <li className="clearfix">
                <div className="left">
                  确认密码
                </div>
                <div className="right">
                  <Input type="passowrd" placeholder="不修改密码可以不用填写" />
                </div>
              </li>
              <li className="clearfix">
                <div className="left">
                  <Button type="danger">保存</Button>
                </div>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="我的收藏" key="2">
            <ul className="user-collect clearfix">
              <li>
                <ListItem {...data2} />
              </li>
              <li>
                <ListItem {...data2} />
              </li>
              <li>
                <ListItem {...data2} />
              </li>
              <li>
                <ListItem {...data2} />
              </li>
            </ul>
          </TabPane>
          <TabPane tab="我的评论" key="3">
            <Timeline mode="alternate">
              <Timeline.Item>
                <Collapse
                  accordion
                  bordered={false}>
                  <Panel header="2019-11-28" key="1">
                    <List
                      itemLayout = "vertical"
                      dataSource={data}
                      size="small"
                      renderItem={item => (
                        <List.Item color="#0090ce">
                          <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                          />
                          <Typography>
                            <ul className="comment-list">
                              <li><a href="/">第一条评论</a></li>
                              <li><a href="/">第一条评论</a></li>
                            </ul>
                          </Typography>
                        </List.Item>
                      )}
                    />
                  </Panel>
                </Collapse>
              </Timeline.Item>
              <Timeline.Item>
                <Collapse
                  accordion
                  bordered={false}>
                  <Panel header="2019-11-28" key="1">
                    <List
                      itemLayout = "vertical"
                      dataSource={data}
                      size="small"
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                          />
                          <Typography>
                            <ul className="comment-list">
                              <li><a href="/">第一条评论</a></li>
                              <li><a href="/">第一条评论</a></li>
                            </ul>
                          </Typography>
                        </List.Item>
                      )}
                    />
                  </Panel>
                </Collapse>
              </Timeline.Item>
            </Timeline>
          </TabPane>
        </Tabs>
      </div>
    </UserWrapper>
  )
}

export default User;
