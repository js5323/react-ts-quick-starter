import { ReactNode } from 'react';
import Home from '../view/Home';
import About from '../view/About';

export interface RouteType {
  path: string;
  title?: string;
  component?: ReactNode;
  exact?: boolean;
  routes?: RouteType[];
  redirect?: string;
}

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    title: 'Home',
    path: '/home',
    component: Home,
    routes: [
      {
        title: 'Home2',
        path: '/home/home2',
        component: Home,
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
];

export default routes;
