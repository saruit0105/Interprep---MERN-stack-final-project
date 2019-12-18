import React from "react";

const Github = props => {
  if (props.gitEditing) {
    return <input type="text" value={props.children} onChange={props.handleGitChange} />;
  }
  if (!props.gitEditing) {
    return <span>{props.userGithub}</span>;
  }
};

export default Github;
