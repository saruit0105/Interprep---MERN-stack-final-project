import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <h3> Home </h3>
        <h5> Which quiz would you like to try today?</h5>
        <button> Javascript </button>
        <button> HTML </button>
        <button> React/Mongo</button>
      </div>
    );
  }
}

export default Landing;
