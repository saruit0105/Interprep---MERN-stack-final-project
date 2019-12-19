import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./ShortAnswers.page.css";

export default class ShortAnswers extends Component {
  state = {
    userAnswer: "",
    questions: [],
    currentQuestionIndex: 0,
    counter: 1,
    done: false,
    submited: false
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { data } = await axios.get(`${baseURL}/api/getOpenQuestions`);
    this.setState({ questions: data }, () => console.log(this.state));
  };

  nextQuestion = () => {
    let nextCount = this.state.counter + 1;
    this.setState(prevState => ({
      userAnswer: "",
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      submited: false,
      counter: nextCount
    }));
  };

  handleAnswerSubmit = () => {
    this.setState({ submited: true }, () => console.log(this.state));
  };

  showAnswer = () => {
    const { submited, questions, currentQuestionIndex } = this.state;
    const { answer } = questions[currentQuestionIndex] || {};
    return <div>{submited && <p>{answer}</p>}</div>;
  };

  finalQuestion = () => {
    const { questions, currentQuestionIndex, submited, done } = this.state;
    let isFinalQuestion = currentQuestionIndex === questions.length - 1;
    return (
      <div>
        {submited && !isFinalQuestion && <button onClick={this.nextQuestion}>Next Question</button>}
        {submited && isFinalQuestion && !done && <button onClick={this.handleFinalClick}> Finish </button>}
        {submited && isFinalQuestion && done && (
          <button>
            <Link to={"/landing"}> Go Home</Link>
          </button>
        )}
      </div>
    );
  };

  handleFinalClick = () => {
    alert("Good job! We hope this helped prepare you for an interview");
    this.setState({ done: !this.state.done });
  };

  render() {
    const { userAnswer, questions, currentQuestionIndex, counter } = this.state;
    const { question, answer } = questions[currentQuestionIndex] || {};
    return (
      <div className="body">
        <div>
          <p>
            Question {counter} out of {questions.length}{" "}
          </p>

        <div className="questionBox" style={{cursor: "context-menu"}}>
            <Form className="form">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>{question}</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <div>
              <button onClick={this.handleAnswerSubmit}>submit</button>
              {this.finalQuestion()}
            </div>
            {this.showAnswer()}
          </div>
        </div>
      </div>
    );
  }
}
