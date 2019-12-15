import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "" };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleLogin } = this.props;
    handleLogin(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-label-group">
            <input
              type="text"
              id="inputEmail"
              onChange={this.handleInputChange("email")}
              value={email}
              className="form-control"
              placeholder="email"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              name="password"
              id="inputPassword"
              onChange={this.handleInputChange("password")}
              value={password}
              className="form-control"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
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
