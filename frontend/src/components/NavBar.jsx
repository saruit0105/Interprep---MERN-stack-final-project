import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import React, { Component } from "react";
import './NavBar.css' 

class NavBar extends Component {
//   logInOrOut = () => {
//     if (this.props.user) {
//       return <button onClick={this.props.logout}>click to log out</button>;
//     } else return <button> click to log in</button>;
//   };

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand href="/">
//             <img
//               alt=""
//               src="./images/logo-ironhack.png"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />
//             Bananafish
//           </Navbar.Brand>
//           <Nav className="mr-auto">
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/landing">Quiz</Nav.Link>
//             {this.logInOrOut()}
//           </Nav>
//         </Navbar>
//       </div>
//     );
//   }

render() {
  return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )}
}

export default NavBar;
