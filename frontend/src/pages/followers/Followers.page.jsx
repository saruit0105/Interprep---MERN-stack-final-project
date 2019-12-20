import React from "react";
import { UserContext } from "../../context/UserContext";
import "./Followers.page.css";
import Table from "react-bootstrap/Table";

const Followers = () => <UserContext.Consumer>{context => <Component context={context} />}</UserContext.Consumer>;

const Component = ({ context }) => {
  const { currentUser } = context;
  return (
    <div className="body">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Points</th>
            <th>Badges</th>
            <th>Github</th>
            <th>Linkedin</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.followers.map(({ name, points, badges, github, linkedin }, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>{points || 0}</td>
                <td>{badges && badges.map(eachBadge => <img src={eachBadge} alt="" className="badges" />)}</td>
                <td>{github}</td>
                <td>{linkedin}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Followers;
