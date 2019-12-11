import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                  className="img-responsive"
                  alt=""
                />
              </div>

              <div className="profile-usertitle">
                <div className="profile-usertitle-name">Marcus Doe</div>
                <div className="profile-usertitle-job">Developer</div>
              </div>

              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Message
                </button>
              </div>

              <div className="profile-usermenu">
                <ul className="nav">
                  <li className="active">
                    <a href="#">
                      <i className="glyphicon glyphicon-home"></i>
                      Overview{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-ok"></i>
                      Tasks{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-flag"></i>
                      Help{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              Some user related content goes here...
            </div>
          </div>
        </div>

        <center>
          <strong>
            Powered by{" "}
            <a href="http://j.mp/metronictheme" target="_blank">
              KeenThemes
            </a>
          </strong>
        </center>
        <br />
        <br />
      </div>
    );
  }
}

export default Profile;
