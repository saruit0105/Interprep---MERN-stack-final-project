import React from "react";
import './About.page.css'
import JOHNNY_PIC from '../../images/headshots.jpg'
import SARUIT_PIC from '../../images/saruit-image.jpg'

const team = [
  {
    name: "Saruit Suwunrut",
    position: "Lead Software Engineer",
    picture : SARUIT_PIC
  },
  {
    name: "Johnny Nguyen",
    position: "CSS & Debugger Legend",
    picture: JOHNNY_PIC,
  }
];

const About = () => (
  <div>
    <header className="bg-secondary text-center py-2 mb-4">
      <div className="container">
        <h1 className="font-weight-light text-white">Meet the Team</h1>
      </div>
    </header>
    <div className="container">
    <div className="row">
    {team.map(({ name, position,picture }) => (
      
        
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src={picture}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{name}</h5>
                <div className="card-text text-black-50">{position}</div>
              </div>
            </div>
          </div>
       
      
    ))}
     </div>
    </div>
  </div>
);

export default About;
