import React, { Component } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { QuestionBox } from ".";

class Questions extends Component {
  state = {
    questions: null,

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
    this.setState({ randomQuestion: randomQ });
  };

  render() {
    return (
      <div>
        <p> Question 1 out of 5</p>
        <QuestionBox randomQuestion={this.state.randomQuestion} />
      </div>
    );
  }
}

export default Questions;
