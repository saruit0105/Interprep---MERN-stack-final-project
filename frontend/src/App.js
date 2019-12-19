import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Profile, About, Landing, Quiz, Ranking, Followers, Test } from "./pages";
import { NavBar, AuthRoute } from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar/>
    <Switch>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <AuthRoute exact path="/quiz/:category?/:subcategory?/:difficulty?" component={Quiz} />
      <AuthRoute exact path="/landing" component={Landing} />
      <AuthRoute path="/profile" component={Profile} />
      <AuthRoute path="/ranking" component={Ranking} />
      <AuthRoute path="/followers" component={Followers} />
    </Switch>
  </div>
);

export default App;
