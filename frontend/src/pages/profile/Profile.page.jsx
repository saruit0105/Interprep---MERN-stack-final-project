import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import "./Profile.page.css";

class Profile extends Component {
  static contextType = UserContext;

  render() {
    const { currentUser } = this.context;
    const { name, email } = currentUser;
    return (
      <div>
        
    

        <div class="container emp-profile ">
          <form method="post">
            
              
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{currentUser.name}</h5>
                  <h6>Web Developer and Designer</h6>
                  
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <br></br>
            
            
             
              <div class="col-md-8">
                
                  
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <input type="text" placeholder={name}></input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Github</label>
                      </div>
                      <div class="col-md-6">
                      <input type="text" placeholder=""></input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Linkedin</label>
                      </div>
                      <div class="col-md-6">
                      <input type="text" placeholder=""></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
              </div>
                  
                
           
            
          </form>
        </div>
      </div>
    );
  }
}
export default Profile;
