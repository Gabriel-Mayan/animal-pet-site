import React from 'react';
import { StoresProvider, useStores } from '../stores';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = React.lazy(async () => import('../containers/Home').then((m) => ({ default: m.HomeStudent })));
const Page404 = React.lazy(async () => import('../containers/Page404').then((m) => ({ default: m.Page404 })));
const Register = React.lazy(async () => import('../containers/Register').then((m) => ({ default: m.Register })));
const Login = React.lazy(async () => import('../containers/Login').then((m) => ({ default: m.Login })));
const LoginAdmin = React.lazy(async () => import('../containers/LoginAdmin').then((m) => ({ default: m.LoginAdmin })));

function ProtectedRoutes(props) {
  const { userStore: { token } } = useStores();

  const { children } = props;

  return (
    <Route render={() => (token ? children : <Redirect to="/login" />)} />
  );
}

export function Routes() {
  return (
    <StoresProvider>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={LoginAdmin} />
        <Route path="/register" component={Register} />
        <Route path="*" component={Page404} />
      </Switch>
    </StoresProvider>
  );
}
