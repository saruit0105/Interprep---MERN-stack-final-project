import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./NavBar.css";
import { UserContext } from "../context/UserContext";
import IRON_HACK_LOGO from "../images/logo-ironhack.png";

const NavBar = props => (
  <UserContext.Consumer>{context => <Component {...props} context={context} />}</UserContext.Consumer>
);

const Component = ({ context, history }) => {
  const { logout, currentUser } = context;
  const [authHandler, authLabel, homePath] = currentUser
    ? [logout, "Logout", "/landing"]
    : [() => history.push("/"), "Login", "/"];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => history.push(homePath)}>
          <img alt="" src={IRON_HACK_LOGO} width="30" height="30" className="d-inline-block align-top" />
          Bananafish
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/ranking">Ranking</NavLink>
          <NavLink to="/followers">Followers</NavLink>
          <button onClick={authHandler}>{authLabel}</button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
