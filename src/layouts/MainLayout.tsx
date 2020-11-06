import React, { FC, PropsWithChildren } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const { Header, Content, Footer } = Layout;

const MainLayout: FC = (props: PropsWithChildren<any>) => (
  <Layout className='layout main-layout'>
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        {routes
          .filter((item) => !!item.title)
          .map((item) => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          ))}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>{props.children ? props.children : 'Content'}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default MainLayout;
