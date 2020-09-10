import React, { FC } from 'react';
import { Button } from 'antd';
import './app.less';
import MainLayout from './layouts/MainLayout';

const App: FC = () => (
  <MainLayout>
    <span>Hello!</span>
    <Button type='primary'>Button</Button>
  </MainLayout>
);

export default App;
