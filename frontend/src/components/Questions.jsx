import React, { Component } from "react";
import axios from "axios";
import { baseURL } from "../config";

class Questions extends Component {
  state = {
    picked: false,
    questions: []
  };

  fetchQuestions = async () => {
    try {
      let questions = await axios.get(`${baseURL}/api/getQuestions`, {
        withCredentials: true
      });
      this.setState({ questions: questions.data });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchQuestions();
  }

  pickQuestion = () => {
    let randomQ = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ];
    console.log(randomQ);
    return (
      <div>
        <strong>{randomQ ? randomQ.question : ""}</strong>
        <div className="questionBox">
          <div>
            {randomQ &&
              randomQ.answers.map(eachAnswers => (
                <span onClick={this.pickedToggle}>
                  <button></button>
                  {eachAnswers}
                </span>
              ))}
          </div>
          <hr></hr>
        </div>
      </div>
    );
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
        <p> Question 1 out of 5</p>
        {this.choicePicked()}
        <strong>{this.pickQuestion()}</strong>
        <div className="questionBox">
          <div>
            <span onClick={this.pickedToggle}>
              <button>A</button>
              answer PH
            </span>
          </div>
          <hr></hr>
          <div>
            <span onClick={this.pickedToggle}>
              <button>B</button>
              another answer PH
            </span>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Questions;
