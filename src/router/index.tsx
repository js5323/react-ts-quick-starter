import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes, { RouteType } from './routes';

const RenderRoute = ({ path, component, redirect, exact }: RouteType) => {
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Route key={path} exact={exact} path={path}>
      {component}
    </Route>
  );
};

const RouterIndex: FC = () => {
  return (
    <Switch>
      {routes.map((item: RouteType) => (
        <RenderRoute key={item.path} {...item} />
      ))}
    </Switch>
  );
};

export default RouterIndex;
