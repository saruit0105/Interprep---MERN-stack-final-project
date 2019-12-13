import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import React, { Component } from "react";

class NavBar extends Component {
  logInOrOut = () => {
    if (this.props.user) {
      return <button onClick={this.props.logout}>click to log out</button>;
    } else return <button> click to log in</button>;
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./images/logo-ironhack.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Bananafish
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/landing">Quiz</Nav.Link>
            {this.logInOrOut()}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
