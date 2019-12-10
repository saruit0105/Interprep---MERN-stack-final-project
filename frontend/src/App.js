import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./images/logo-ironhack.png";
import axios from "axios";
import { About, Home, NavBar, Signup, Profile } from "./components";

export default class App extends Component {
  state = {
    currentlyLoggedIn: null
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

  // login = async (email, password) => {
  //   console.log(email);
  //   console.log(password);
  //   const response = await axios.post(
  //     "http://localhost:5000/api/login",
  //     { email: email, password: password },
  //     { withCredentials: true }
  //   );
  //   console.log("asd");
  //   let user = response.data;
  //   console.log(user);
  //   this.setState({ currentlyLoggedInUser: user }, () => {
  //     console.log(this.state.currentlyLoggedIn);
  //   });
  // };

  login = (email, password) => {
    const response = axios
      .post(
        "http://localhost:5000/api/login",
        { email: email, password: password },
        { withCredentials: true }
      )
      .then(data => {
        console.log(data);
        this.setState(
          {
            currentlyLoggedInUser: data
          },
          () => {
            console.log(data);
          }
        );
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <div>
        <NavBar />
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
          <Route path="/content/signup" component={Signup} />
          <Route path="/content/Profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}
