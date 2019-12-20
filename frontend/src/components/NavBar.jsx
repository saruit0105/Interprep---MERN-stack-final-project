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
          IronPrep
        </Navbar.Brand>
        <Nav className="mr-auto">
          <ul className="navList">
            <li>
              <NavLink to="/about" activeStyle={{ background: "tomato" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/landing" activeStyle={{ background: "tomato" }}>
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/ranking" activeStyle={{ background: "tomato" }}>
                Ranking
              </NavLink>
            </li>
            <li>
              <NavLink to="/followers" activeStyle={{ background: "tomato" }}>
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeStyle={{ background: "tomato" }}>
                Profile
              </NavLink>
            </li>
          </ul>
        </Nav>
        <button onClick={authHandler} className="loginButton" style={{ color: "white" }}>
          {authLabel}
        </button>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
