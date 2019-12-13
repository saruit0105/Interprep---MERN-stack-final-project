import React, { Component } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { QuestionBox } from ".";
import "./Questions.css";

class Questions extends Component {
  state = {
    questions: null,
    picked: false,
    isCorrect: false,
    randomQuestion: null,
    counter: 1,
    howManyCorrect: 0
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
  componentDidMount = async () => {
    await this.fetchQuestions();
    await this.pickQuestion();
    await this.countCheck();
  };

  nextQuestion = () => {
    let nextCount = this.state.counter + 1;
    console.log("Next one");
    this.pickQuestion();
    this.countCheck();
    this.setState({ picked: false, isCorrect: false, counter: nextCount });
  };

  countCheck = () => {
    this.state.counter > 4
      ? alert(
          `Good job on finishing the quiz, you got ${this.state.howManyCorrect}/5 answers correct`
        )
      : console.log("youre not done yet");
  };

  pickQuestion = () => {
    let randomQ = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ];
    this.setState({ randomQuestion: randomQ });
  };

  pickHandler = (e, eachAnswers, solution) => {
    e.preventDefault();
    console.log(solution);
    console.log(eachAnswers);
    let questionCheck = false;
    let correctCount = this.state.howManyCorrect;
    eachAnswers === solution ? (questionCheck = true) : (questionCheck = false);
    if (eachAnswers === solution) {
      correctCount++;
      console.log(correctCount);
    }
    this.setState({
      picked: !this.state.picked,
      isCorrect: questionCheck,
      howManyCorrect: correctCount
    });
  };

  choicePicked = () => {
    if (this.state.picked === true && this.state.isCorrect === true) {
      return (
        <div>
          <p style={{ color: "green" }}>wow you are right! </p>
        </div>
      );
    } else if (this.state.picked === true && this.state.isCorrect === false) {
      return (
        <div>
          <p style={{ color: "red" }}>
            Sorry, that's the wrong answer, the correct answer is :{""}
            {this.state.randomQuestion.solution}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p> Choose the correct answer below</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="questionPage">
        <p> Question {this.state.counter} out of 5</p>
        <button onClick={() => this.nextQuestion()}> Go Next </button>
        <QuestionBox
          randomQuestion={this.state.randomQuestion}
          pickQuestion={this.state.pickQuestion}
          picked={this.state.picked}
          isCorrect={this.state.isCorrect}
          pickHandler={this.pickHandler}
          choicePicked={this.choicePicked}
        />
      </div>
    );
  }
}

export default Questions;
