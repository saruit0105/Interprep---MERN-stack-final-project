import React, { Component } from "react";
import axios from "axios";
import "./home.css";
import { baseURL } from "../config";

class Signup extends Component {
  state = {
    newEmail: "",
    newName: "",
    newPassword: "",
    newCampus: "",
    newCourse: ""
  };
  campus = [
    "Madrid",
    "Barcelona",
    "Miami",
    "Paris",
    "Berlin",
    "Amsterdam",
    "Mexico",
    "Sao Paulo",
    "Lisbon"
  ];
  courses = ["WebDev", "UX/UI", "Data Analytics"];

  showOptions = option => {
    return option.map((eachOption, i) => {
      return <option key={eachOption}>{eachOption}</option>;
    });
  };
  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  goToLogin = () => {
    const { history } = this.props;
    history.push("/");
  };

  submitInput = async e => {
    e.preventDefault();
    await axios.post(
      `${baseURL}/api/signup`,
      {
        newEmail: this.state.newEmail,
        newName: this.state.newName,
        newPassword: this.state.newPassword,
        newCampus: this.state.newCampus,
        newCourse: this.state.newCourse
      },
      {
        withCredentials: true
      }
    );
    this.setState({
      newEmail: "",
      newName: "",
      newPassword: "",
      newCampus: "Please Select a Campus",
      newCourse: "Please Select a Course"
    });
    this.goToLogin();
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4"> Sign up </h3>
                      <form onSubmit={this.submitInput}>
                        <div className="form-label-group">
                          {/* <p>Email</p> */}

                          {/* <input
                            type="text"
                            className="form-control"
                            onChange={this.updateInput}
                            name="newEmail"
                            value={this.state.newEmail}
                          /> */}

                          <div className="form-label-group">
                            <input
                              type="text"
                              className="form-control"
                              id="newEmail"
                              onChange={this.updateInput}
                              name="newEmail"
                              value={this.state.newEmail}
                              placeholder="Email Address"
                              required
                              autoFocus
                            />
                            <label htmlFor="newEmail">Email address</label>
                          </div>

                          {/* <p>Name</p>
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.updateInput}
                            name="newName"
                            value={this.state.newName}
                          /> */}

                          <div className="form-label-group">
                            <input
                              type="text"
                              name="newName"
                              id="inputName"
                              onChange={this.updateInput}
                              value={this.state.newName}
                              className="form-control"
                              placeholder="name"
                              required
                              autoFocus
                            />
                            <label htmlFor="inputName">Name</label>
                          </div>

                          {/* <p>Password</p>
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.updateInput}
                            name="newPassword"
                            value={this.state.newPassword}
                          /> */}

                          <div className="form-label-group">
                            <input
                              type="text"
                              name="newPassword"
                              id="inputPassword"
                              onChange={this.updateInput}
                              value={this.state.newPassword}
                              className="form-control"
                              placeholder="password"
                              required
                              autoFocus
                            />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                          <p>Campus</p>
                          <select
                            required={true}
                            className="form-control"
                            name="newCampus"
                            onChange={this.updateInput}
                          >
                            <option>Please Select a Campus</option>
                            {this.showOptions(this.campus)}
                            <option></option>
                          </select>

                          {/* <div className="form-label-group">
                             <select
                             
                              name="newCampus"
                             id="inputCampus"
                            onChange={this.updateInput}
                            value={this.state.email}
                            className="form-control"
                             
                             required
                               autoFocus
                               >
                         <option>Please Select a Campus</option>
                            {this.showOptions(this.campus)}
                            <option></option>
                          
                         </select>
                        {/* <label htmlFor="inputCampus">Campus</label> 
                          </div> */}

                          <p>Course</p>
                          <select
                            required={true}
                            className="form-control"
                            name="newCourse"
                            onChange={this.updateInput}
                          >
                            <option>Please Select a Course</option>
                            {this.showOptions(this.courses)}
                            <option></option>
                          </select>

                          {/* <div className="form-label-group">
                           <p>Course</p> 
                          <select
                            required={true}
                            className="form-control"
                            name="newCourse"
                            onChange={this.updateInput}
                          >
                            <option>Please Select A Course</option>
                            {this.showOptions(this.courses)}
                          </select>
                          </div> */}
                          <button
                            class="btn btn-lg btn-primary btn-block outline-primary"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
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

export default Signup;
