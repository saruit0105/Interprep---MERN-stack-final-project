import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  goToProfile = () => {
    const { history } = this.props;
    history.push("/content/profile");
  };

  passLoginInfo = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    console.log(this);
    this.goToProfile();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.passLoginInfo}>
          <div className="form-label-group">
            <input
              type="text"
              name="email"
              id="inputEmail"
              onChange={this.updateInput}
              value={this.state.email}
              className="form-control"
              placeholder="email"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              name="password"
              id="inputPassword"
              onChange={this.updateInput}
              value={this.state.password}
              className="form-control"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
            onClick={this.notify}
          >
            Sign in
          </button>
          <div className="text-center">
            <a className="small" href="#home">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
