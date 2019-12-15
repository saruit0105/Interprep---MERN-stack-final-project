import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Strings", category: "javascript/string" },
  { label: "Arrays", category: "javascript/array" },
  { label: "React", category: "javascript/react" }
];

const Landing = () => (
  <div class="container">
    <div class="container">
      <div className="text-center">
        <h3> Home </h3>
        <h5> Which Javascript quiz would you like to try today?</h5>

        {links.map(({ label, path, category }) => (
          <button type="button" class="btn btn-space btn-secondary btn-lg" key={path}>
            <Link to={`/quiz/${category}`}>{label}</Link>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Landing;
