import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.state);
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/api/signup",
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
        <h3> Sign up </h3>
        <form onSubmit={this.submitInput}>
          <p>Email</p>
          <input
            type="text"
            onChange={this.updateInput}
            name="newEmail"
            value={this.state.newEmail}
          />
          <p>Name</p>
          <input
            type="text"
            onChange={this.updateInput}
            name="newName"
            value={this.state.newName}
          />

          <p>Password</p>
          <input
            type="text"
            onChange={this.updateInput}
            name="newPassword"
            value={this.state.newPassword}
          />
          <p>Campus</p>
          <select required={true} name="newCampus" onChange={this.updateInput}>
            <option>Please Select a Campus</option>
            {this.showOptions(this.campus)}
            <option></option>
          </select>

          <p>Course</p>
          <select required={true} name="newCourse" onChange={this.updateInput}>
            <option>Please Select A Course</option>
            {this.showOptions(this.courses)}
          </select>
          <button> Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
