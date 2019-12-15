import React from "react";
import { UserContext } from "../../context/UserContext";
import "./Followers.page.css";

const Followers = () => <UserContext.Consumer>{context => <Component context={context} />}</UserContext.Consumer>;

const Component = ({ context }) => {
  const { currentUser } = context;
  return (
    <div>
      <p>Followers</p>
      {currentUser.followers.map(({ name, points }) => (
        <div>
          <p>{name}</p>
          <p>Points: {points}</p>
        </div>
      ))}
    </div>
  );
};

export default Followers;
