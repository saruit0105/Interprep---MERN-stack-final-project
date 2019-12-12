import React, { Component } from "react";

class Questions extends Component {
  state = {
    picked: false
  };

  pickedToggle = () => {
    this.setState({ picked: !this.state.picked });
    console.log(this.state);
  };
  choicePicked = () => {
    if (this.state.picked === true) {
      return (
        <div>
          <p>wow you are right! </p>
          <button> Next Question</button>
        </div>
      );
    } else {
      return (
        <div>
          <p> Choose the correct answer below</p>
          <button> Next Question</button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <p> Quiz 1 out of 5</p>
        {this.choicePicked()}
        <strong>why did bill gates invent javascript????</strong>
        <div className="questionBox">
          <div>
            <span>
              <button>A</button>
              he wanted to
            </span>
          </div>
          <hr></hr>
          <div>
            <span onClick={this.pickedToggle}>
              <button>B</button>
              he didn't
            </span>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Questions;
