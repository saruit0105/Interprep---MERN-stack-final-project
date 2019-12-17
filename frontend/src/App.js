import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Profile, About, Landing, Quiz, Ranking, Followers,Test } from "./pages";
import { NavBar, AuthRoute, NewLanding } from "./components";
import "./App.css";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/new" component={NewLanding} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
<<<<<<< HEAD
      <Route exact path="/quiz/:category?/:subcategory?" component={Quiz} />
=======
      <AuthRoute exact path="/quiz/:category?/:subcategory?/:difficulty?" component={Quiz} />
>>>>>>> ed5ad191bea15cb0ff610797fc14fbac76115f02
      <Route exact path="/landing" component={Landing} />
      <AuthRoute path="/profile" component={Profile} />
      <AuthRoute path="/ranking" component={Ranking} />
      <AuthRoute path="/followers" component={Followers} />
      <Route path="/test" component={Test}/>
    </Switch>
  </div>
);

export default App;
