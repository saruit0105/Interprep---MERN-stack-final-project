import React, { createContext, Component } from "react";
import axios from "axios";
import { parseStringifiedJSON } from "../helpers";
import { baseURL } from "../config";

export const UserContext = createContext({});

export class UserContextProvider extends Component {
  state = { user: parseStringifiedJSON(sessionStorage.getItem("CURRENT_USER")) };

  login = async user => {
    const { data } = await axios.post(`${baseURL}/api/login`, user, { withCredentials: true });
    if (data.message) return;
    sessionStorage.setItem("CURRENT_USER", JSON.stringify(data));
    this.setState({ user: data });
  };

  logout = async () => {
    await axios.post(`${baseURL}/api/logout`, {}, { withCredentials: true });
    sessionStorage.removeItem("CURRENT_USER");
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ login: this.login, logout: this.logout, currentUser: user }}>
        {children}
      </UserContext.Provider>
    );
  }
}
