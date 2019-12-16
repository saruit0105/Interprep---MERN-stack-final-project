import React from "react";
import { Link } from "react-router-dom";
import './Landing.page.css'
import FISH_LOGO from "../../images/fish.png"
import JAVASCRIPT_LOGO from "../../images/js.png"
import REACT_LOGO from "../../images/react-logo.png"
import CSS_LOGO from "../../images/css-logo.png"


const links = [
  { label: "Strings", category: "javascript/string" },
  { label: "Arrays", category: "javascript/array" },
  { label: "React", category: "javascript/react" }
];

const Landing = () => (
  <div>

  <header class="masthead bg-primary text-white text-center">
  <div class="container d-flex align-items-center flex-column" >
    <img class="masthead-avatar mb-5" src={FISH_LOGO} alt=""/>
    <h1 class="masthead-heading text-uppercase mb-0">Welcome Saruit </h1>
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


<section class="page-section portfolio" id="portfolio">
  <div class="container">

    
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Quiz Types</h2>

    
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>

   
    <div class="row">

     
      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={REACT_LOGO} alt=""/>
        </div>
      </div>

      
      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={JAVASCRIPT_LOGO} alt=""/>
        </div>
      </div>

      
      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src={CSS_LOGO} alt=""/>
        </div>
      </div>

      
      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/game.png" alt=""/>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/safe.png" alt=""/>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/submarine.png" alt=""/>
        </div>
      </div>

    </div>
    

  </div>
</section>
</div>


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
