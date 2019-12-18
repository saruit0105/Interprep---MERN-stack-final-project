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
          <h1 class="masthead-heading text-uppercase mb-0">Welcome {currentUser.name}</h1>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>

      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Quiz Types</h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            {links.map(({ label, path, category, picture }) => (
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <button className="picButton">
                    <h3 className="labels">{label}</h3>
                    <img class="img-fluid" src={picture} alt="" />
                    {category.map(({ links, difficulty }) => (
                      <Link to={`/quiz/${links}`}>{difficulty}</Link>
                    ))}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
