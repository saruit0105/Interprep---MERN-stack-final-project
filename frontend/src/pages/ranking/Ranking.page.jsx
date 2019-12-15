import React, { Component } from "react";
import classNames from "classnames";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { baseURL } from "../../config";
import "./Ranking.page.css";

class Ranking extends Component {
  static contextType = UserContext;
  state = { users: [], refetch: true };

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate() {
    this.state.refetch && this.fetchUsers();
  }

  fetchUsers = async () => {
    const { data } = await axios.get(`${baseURL}/api/users`);
    this.setState({ users: data, refetch: false });
  };

  follow = id => async () => {
    const currentUserId = this.context.currentUser._id;
    await axios.post(`${baseURL}/api/users/follow`, { idToFollow: id, currentUserId }, { withCredentials: true });
    this.setState({ refetch: true });
  };

  render() {
    const { users } = this.state;
    const { currentUser } = this.context;
    return (
      <div>
        <p>Ranking Page</p>
        {users.map(({ _id, name, points, followers }) => {
          const isCurrentUser = currentUser._id === _id;
          const alreadyFollowing = followers.some(id => currentUser._id === id);
          return (
            <div className={classNames("user", { currentUser: isCurrentUser })}>
              <p>
                {name} - {points || 0}
              </p>
              {!isCurrentUser && !alreadyFollowing && <button onClick={this.follow(_id)}>Follow!</button>}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Ranking;
