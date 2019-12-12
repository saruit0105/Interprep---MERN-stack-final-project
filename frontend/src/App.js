import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./images/logo-ironhack.png";
import axios from "axios";
import {
  About,
  Home,
  NavBar,
  Signup,
  Profile,
  Landing,
  Questions
} from "./components";

export default class App extends Component {
  // static contextType = UserContext
  //  this.context.isLoggedIn
  state = {
    currentlyLoggedIn: null,
    isSigningUp: false
  };

  fetchAllData = async () => {
    try {
      let currentUser = await axios.get(
        "http://localhost:5000/api/get-user-info",
        { withCredentials: true }
      );
      this.setState({
        currentlyLoggedInUser: currentUser.data,
        ready: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchAllData();
  }

  logout = async () => {
    const response = await axios.post("http://localhost:5000/api/logout", {
      withCredentials: true
    });
    let user = await response.data;
    this.setState({ currentlyLoggedInUser: user }, () => {});
    console.log(this.state);
  };

  login = async (email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      { email: email, password: password },
      { withCredentials: true }
    );
    let user = await response.data;
    this.setState({ currentlyLoggedInUser: user }, () => {});
  };

  render() {
    return (
      <div>
        <NavBar user={this.state.currentlyLoggedInUser} logout={this.logout} />
        <Switch>
          <Route path="/about" component={About} />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                user={this.state.currentlyLoggedInUser}
                login={this.login}
              />
            )}
          />
          <Route
            exact
            path="/landing"
            render={props => (
              <Landing {...props} user={this.state.currentlyLoggedInUser} />
            )}
          />
          <Route
            exact
            path="/quiz/javascript"
            render={props => (
              <Questions {...props} user={this.state.currentlyLoggedInUser} />
            )}
          />
          <Route path="/content/signup" component={Signup} />
          <Route
            path="/content/Profile"
            render={props => (
              <Profile {...props} user={this.state.currentlyLoggedInUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
