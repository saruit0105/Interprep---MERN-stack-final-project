import React, { Component } from "react";
import { Link } from "react-router-dom";
const links = [
  {
    label: "Short Answers",
    path: "/quiz/shortanswers",
    catagory: "shortanswers"
  },

  {
    label: "JavaScript",

    catagory: "javascript"
  },
  {
    label: "React",

    catagory: "react"
  }
];
class Landing extends Component {
  render() {
    return (
      <div class="container">
        <div class="container">
          <div className="text-center">
            <h3> Home </h3>
            <h5> Which quiz would you like to try today?</h5>

            {links.map(({ label, path, catagory }) => (
              <button
                type="button"
                class="btn btn-space btn-primary btn-lg"
                key={path}
              >
                <Link to={`/quiz/${catagory}`}>{label}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
