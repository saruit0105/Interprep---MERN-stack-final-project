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
    const { name, linkedin, github } = currentUser;
    return (
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
                <div>
                  <Linkedin
                    linkEditing={linkEditing}
                    handleLinkChange={this.handleLinkChange}
                    linkInput={linkInput}
                    userLinkedin={linkedin}
                  />
                  <button onClick={this.handleLinkEditing}>
                    {linkEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
                  </button>
                </div>
              </li>
              <li>
                <a href={github}>
                  <img src={GITHUB_LOGO} alt="" className="linkPics" />
                </a>
                <div>
                  <Github
                    gitEditing={gitEditing}
                    handleGitChange={this.handleGitChange}
                    gitInput={gitInput}
                    userGithub={github}
                  />
                  <button onClick={this.handleGitEditing}>
                    {gitEditing ? <button onClick={this.updateUser}>Save</button> : "edit"}
                  </button>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}
export default Profile;
