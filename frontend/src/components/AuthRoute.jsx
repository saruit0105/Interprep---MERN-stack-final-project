import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthRoute = props => (
  <UserContext.Consumer>{context => <Component {...props} context={context} />}</UserContext.Consumer>
);

const Component = ({ exact, path, component: Component, context }) => (
  <Route exact={exact} path={path} render={_ => (context.currentUser ? <Component /> : <Redirect to="/" />)} />
);

export default AuthRoute;
