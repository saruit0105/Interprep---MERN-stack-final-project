import React, { Component } from "react";
import axios from "axios";
import { baseURL } from "../config";
import QuestionBox from ".";

class Questions extends Component {
  state = {
    picked: false,
    questions: null,
    isCorrect: false,
    randomQuestion: null
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
  };

  nextQuestion = () => {
    console.log("Next one");
    this.setState({
      next: true
    });
  };

  pickQuestion = () => {
    let randomQ = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ];
    this.setState({ randomQ: this.state.randomQuestion });
    console.log(randomQ);
  };

  showQuestion = () => {
    return (
      <div>
        <strong>
          {this.state.randomQuestion ? this.state.randomQuestion.question : ""}
        </strong>
        {this.state.randomQuestion &&
          this.state.randomQuestion.answers.map(eachAnswers => (
            <div className="questionBox">
              <div key={this.state.randomQuestion.answers}>
                <span
                  onClick={e =>
                    this.pickHandler(
                      e,
                      eachAnswers,
                      this.state.randomQuestion.solution
                    )
                  }
                >
                  <button></button>
                  {eachAnswers}
                </span>
              </div>
              <hr></hr>
            </div>
          ))}
      </div>
    );
  };

  pickHandler = (e, eachAnswers, solution) => {
    e.preventDefault();
    console.log(solution);
    console.log(eachAnswers);
    let questionCheck = false;
    eachAnswers === solution ? (questionCheck = true) : (questionCheck = false);
    this.setState({
      picked: !this.state.picked,
      questionCheck: this.state.isCorrect
    });
    console.log(this.state);
  };

  choicePicked = () => {
    if (this.state.picked === true && this.state.next === true) {
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
        {/* <button onClick={() => this.nextQuestion()}>Move on</button> */}
        <strong>{this.showQuestion()}</strong>
      </div>
    );
  }
}

export default Questions;
