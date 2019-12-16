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

      
      <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
  
        
        <img class="masthead-avatar mb-5" src="img/avataaars.svg" alt=""/>
  
        
        <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
  
        
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
      

    //     <div class="container">
    //    <div className="text-center">
    //      <h3> Home </h3>
    //      <h5> Which quiz would you like to try today?</h5>
    //      {links.map(({ label, path, catagory }) => (

          
    //       <button type="button" class="btn btn-space btn-light btn-md"  style={{display:'flex-inline'}} key={path}>
    //         <Link to={`/quiz/${catagory}`}>{label}</Link>
    //       </button>
          
    //     ))}
    //   </div>
    // </div> 
      
      
    );
  }
}

export default Landing;
