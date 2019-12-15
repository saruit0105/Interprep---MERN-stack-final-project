import React, { Component } from "react";
class Signup extends Component {
  state = { email: "", password: "", name: "" };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { handleSignUp } = this.props;
    handleSignUp(this.state);
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4"> Sign up </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-label-group">
            <div className="form-label-group">
              <input
                type="text"
                className="form-control"
                id="newEmail"
                onChange={this.handleInputChange("email")}
                value={email}
                placeholder="Email Address"
                required
                autoFocus
              />
              <label htmlFor="newEmail">Email address</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputName"
                onChange={this.handleInputChange("name")}
                value={name}
                className="form-control"
                placeholder="name"
                required
                autoFocus
              />
              <label htmlFor="inputName">Name</label>
            </div>
            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                onChange={this.handleInputChange("password")}
                value={password}
                className="form-control"
                placeholder="password"
                required
                autoFocus
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <button class="btn btn-lg btn-primary btn-block outline-primary" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
