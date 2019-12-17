import React from "react";
import { Link } from "react-router-dom";
import "./Landing.page.css";
import FISH_LOGO from "../../images/fish.png";
import JAVASCRIPT_LOGO from "../../images/js.png";
import REACT_LOGO from "../../images/react-logo.png";
import CSS_LOGO from "../../images/css-logo.png";
import { UserContext } from "../../context/UserContext";

const links = [
  {
    label: "General",
    category: [
      {
        difficulty: "easy",
        links: "javascript/general/easy"
      },
      {
        difficulty: "medium",
        links: "javascript/general/medium"
      },
      {
        difficulty: "hard",
        links: "javascript/general/hard"
      }
    ],
    picture: JAVASCRIPT_LOGO
  },
  {
    label: "CSS",
    category: [
      {
        difficulty: "easy",
        links: "javascript/css/easy"
      },
      {
        difficulty: "medium",
        links: "javascript/css/medium"
      },
      {
        difficulty: "hard",
        links: "javascript/css/hard"
      }
    ],
    picture: CSS_LOGO
  },
  {
    label: "React",
    category: [
      {
        difficulty: "easy",
        links: "javascript/react/easy"
      },
      {
        difficulty: "medium",
        links: "javascript/react/medium"
      },
      {
        difficulty: "hard",
        links: "javascript/react/hard"
      }
    ],
    picture: REACT_LOGO,
    difficulty: ["Easy", "Medium", "Hard"]
  }
];
const Landing = () => <UserContext.Consumer>{context => <Component context={context} />}</UserContext.Consumer>;

const Component = ({ context }) => {
  const { currentUser } = context;
  return (
    <div>
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class="masthead-avatar mb-5" src={FISH_LOGO} alt="" />
          <h1 class="masthead-heading text-uppercase mb-0">Welcome {currentUser} </h1>
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
            {links.map(({ label, path, category, picture }) => (
              <div class="col-md-6 col-lg-4">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                  <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                      <i class="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <button className="picButton">
                    <h3 className="labels">{label}</h3>
                    <img class="img-fluid" src={picture} alt="" />
                    {category.map(eachCategory => (
                      <Link to={`/quiz/${eachCategory.links}`}>{eachCategory.difficulty}</Link>
                    ))}
                  </button>
                </div>
              </div>
            ))}

            <div class="col-md-6 col-lg-4">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/game.png" alt="" />
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/safe.png" alt="" />
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/submarine.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;