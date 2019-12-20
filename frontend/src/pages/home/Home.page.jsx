import React, { Component } from "react";
import axios from "axios";
import { Login, Signup } from "../../components";
import { UserContext } from "../../context/UserContext";
import { baseURL } from "../../config";

import "./Home.page.css";

export default class Home extends Component {
  static contextType = UserContext;
  state = {
    isSigningUp: false,
    activeForm: "login"
  };

  notify = () => {
    window.alert("This feature isn't working right now, stay posted for future updates!");
  };

  handleLogin = async formData => {
    const { history } = this.props;
    const { login } = this.context;
    await login(formData);
    history.push("/landing");
  };

  handleSignUp = async formData => {
    await axios.post(`${baseURL}/api/signup`, formData, { withCredentials: true });
    this.setState({ activeForm: "login" });
  };

  toggleForm = () => {
    const { activeForm } = this.state;
    this.setState({ activeForm: activeForm === "login" ? "signUp" : "login" });
  };

  render() {
    const { activeForm } = this.state;
    const { toggleLabel, Component: FormComponent } = {
      login: { toggleLabel: "Sign Up", Component: Login },
      signUp: { toggleLabel: "Already have an account? Login", Component: Signup }
    }[activeForm];
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <FormComponent handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
                    <div className="text-center">
                      <button onClick={this.toggleForm}>{toggleLabel}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
