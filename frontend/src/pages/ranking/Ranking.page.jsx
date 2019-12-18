import React, { Component } from "react";

import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { baseURL } from "../../config";
import "./Ranking.page.css";
import classNames from "classnames";
import Table from "react-bootstrap/Table";
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
      <div className="body">
        {/* <h2>Ranking Page</h2>
        {users.map(({ _id, name, points, followers }) => {
          const isCurrentUser = currentUser._id === _id;
          const alreadyFollowing = followers.some(id => currentUser._id === id);
          return (
            <div className={classNames("user", { currentUser: isCurrentUser })}>
              <p>
              <span> 
              {!isCurrentUser && !alreadyFollowing && <button onClick={this.follow(_id)} >Follow!</button>}
                <strong>
                  {name}
                </strong>  - {points || 0}
                 </span>
              
              </p>
              
            </div>
          );
        })}


 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Points</th>
              <th>Follow</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ _id, name, points, followers }, index) => {
              const isCurrentUser = currentUser._id === _id;
              const alreadyFollowing = followers.some(id => currentUser._id === id);
              return (
                <tr>
                  <td>{index}</td>
                  <td className={classNames("user", { currentUser: isCurrentUser })}>
                    <strong>{name}</strong>
                  </td>
                  <td>{points || 0}</td>
                  <td>
                    {!isCurrentUser && !alreadyFollowing && <button onClick={this.follow(_id)}>Follow!</button>}
                    {!isCurrentUser && alreadyFollowing && <button disabled>Following</button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Ranking;
