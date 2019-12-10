import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import React from "react";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">
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
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
