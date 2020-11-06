import React, { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import './app.less';
import MainLayout from './layouts/MainLayout';
import RouterIndex from './router';

const App: FC = () => (
  <HashRouter>
    <MainLayout>
      <RouterIndex />
    </MainLayout>
  </HashRouter>
);

export default App;
