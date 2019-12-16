import React from "react";
import { Link } from "react-router-dom";
import './Landing.page.css'
import FISH_LOGO from "../../images/fish.png"

const links = [
  { label: "Strings", category: "javascript/string" },
  { label: "Arrays", category: "javascript/array" },
  { label: "React", category: "javascript/react" }
];

const Landing = () => (

  <header class="masthead bg-primary text-white text-center">
  <div class="container d-flex align-items-center flex-column" >
    <img class="masthead-avatar mb-5" src={FISH_LOGO} alt=""/>
    <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap </h1>
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</header>


    // <div class="container">
    //   <div className="text-center">
    //     <h3> Home </h3>
    //     <h5> Which Javascript quiz would you like to try today?</h5>

    //     {links.map(({ label, path, category }) => (
    //       <button type="button" class="btn btn-space btn-secondary btn-lg" key={path}>
    //         <Link to={`/quiz/${category}`}>{label}</Link>
    //       </button>
    //     ))}
    //   </div>
    // </div>
  
);

export default Landing;
