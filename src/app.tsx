import React, { FC } from 'react';
import { Button } from 'antd';
import './App.less';

const App: FC = () => (
  <div className='app'>
    <span>Hello!</span>
    <Button type='primary'>Button</Button>
  </div>
);

export default App;
