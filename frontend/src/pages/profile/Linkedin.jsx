import React from "react";

const Linkedin = props => {
  if (props.linkEditing) {
    return <input type="text" value={props.children} onChange={props.handleLinkChange} />;
  }
  if (!props.linkEditing) {
    return <span>{props.userLinkedin}</span>;
  }
};

export default Linkedin;
