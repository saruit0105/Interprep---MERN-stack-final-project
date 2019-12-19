import { UserContext } from "../../context/UserContext";
import { baseURL } from "../../config";
import "./Profile.page.css";
import Linkedin from "./Linkedin";
import Github from "./Github";
import axios from "axios";
import React, { Component } from "react";
import FISH_LOGO from "../../images/fish.png";
import LINKEDIN_LOGO from "../../images/linkedin.svg";
import GITHUB_LOGO from "../../images/github.svg";
class Profile extends Component {
  static contextType = UserContext;
  state = {
    linkEditing: false,
    GitEditing: false,
    gitInput: "",
    linkInput: ""
  };

  handleGitEditing = e => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ gitEditing: !this.state.gitEditing });
  };
  handleGitChange = e => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ gitInput: e.target.value }, () => {
      console.log(this.state.gitInput);
    });
  };

  handleLinkEditing = e => {
    e.preventDefault();
    this.setState({ linkEditing: !this.state.linkEditing });
  };

  handleLinkChange = e => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ linkInput: e.target.value }, () => {
      console.log(this.state.linkInput);
    });
  };

  updateUser = e => {
    e.preventDefault();
    console.log(this.state);
    const { currentUser } = this.context;
    let { gitInput, linkInput } = this.state;
    currentUser.linkedin = linkInput;
    currentUser.github = gitInput;
    this.handleUpdate(currentUser);
  };

  handleUpdate = async updatedData => {
    await axios.post(`${baseURL}/api/update`, updatedData, { withCredentials: true });
  };

  render() {
    console.log(this);
    const { currentUser } = this.context;
    const { gitEditing, linkEditing, linkInput, gitInput } = this.state;
    const { name, email, linkedin, github } = currentUser;
    return (
      // <div>
      //   <div className="container emp-profile ">
      //     <div className="col-md-6">
      //       <div className="profile-head">
      //         <h5>{currentUser.name}</h5>
      //         <h6>Web Developer and Designer</h6>

      //         <ul className="nav nav-tabs" id="myTab" role="tablist">
      //           <li className="nav-item">
      //             <a
      //               className="nav-link active"
      //               id="home-tab"
      //               data-toggle="tab"
      //               href="#home"
      //               role="tab"
      //               aria-controls="home"
      //               aria-selected="true"
      //             >
      //               About
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //     <br></br>

      //     <div className="col-md-8">
      //       <div className="row">
      //         <div className="col-md-6">
      //           <label>Name</label>
      //         </div>
      //         <div className="col-md-6">
      //           <p>{name}</p>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col-md-6">
      //           <label>Email</label>
      //         </div>
      //         <div className="col-md-6">
      //           <p>{email}</p>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col-md-6">
      //           <label>Github</label>
      //         </div>
      //         <div className="col-md-6">
      // <Github
      //   gitEditing={gitEditing}
      //   handleGitChange={this.handleGitChange}
      //   gitInput={gitInput}
      //   userGithub={github}
      // />
      // <button onClick={this.handleGitEditing}>
      //   {gitEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
      // </button>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col-md-6">
      //           <label>Linkedin</label>
      //         </div>
      //         <div className="col-md-6">
      // <Linkedin
      //   linkEditing={linkEditing}
      //   handleLinkChange={this.handleLinkChange}
      //   linkInput={linkInput}
      //   userLinkedin={linkedin}
      // />
      // <button onClick={this.handleLinkEditing}>
      //   {linkEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
      // </button>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-md-2"></div>
      //   </div>
      // </div>

      <div>
        <div className="dababy">
          <aside className="profile-card ">
            <header>
              <a href="{linkedin}">
                <img src={FISH_LOGO} alt="" />
              </a>

              <h1>{name}</h1>

              <h2>Web Developer</h2>
            </header>

            <ul className="profile-social-links">
              <li>
                <a href={linkedin}>
                  <img src={LINKEDIN_LOGO} alt="" className="linkPics" />
                </a>
                <Linkedin
                  linkEditing={linkEditing}
                  handleLinkChange={this.handleLinkChange}
                  linkInput={linkInput}
                  userLinkedin={linkedin}
                />
                <button onClick={this.handleLinkEditing}>
                  {linkEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
                </button>
                {/* <svg viewBox=" 0 0 100 100"></svg> */}
              </li>
              <li>
                <a href={github}>
                  <img src={GITHUB_LOGO} alt="" className="linkPics" />
                </a>
                <Github
                  gitEditing={gitEditing}
                  handleGitChange={this.handleGitChange}
                  gitInput={gitInput}
                  userGithub={github}
                />
                <button onClick={this.handleGitEditing}>
                  {gitEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
                </button>
                {/* <svg viewBox=" 0 0 100 100"></svg> */}
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}
export default Profile;
