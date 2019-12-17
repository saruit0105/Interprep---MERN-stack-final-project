import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Profile, About, Landing, Quiz, Ranking, Followers } from "./pages";
import { NavBar, AuthRoute, NewLanding } from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/new" component={NewLanding} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz/:category?/:subcategory?" component={Quiz} />
      <Route exact path="/landing" component={Landing} />
      <AuthRoute path="/profile" component={Profile} />
      <AuthRoute path="/ranking" component={Ranking} />
      <AuthRoute path="/followers" component={Followers} />
    </Switch>
  </div>
);

export default App;
