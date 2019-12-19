import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { baseURL } from "../../config";

export default class ShortAnswers extends Component {
  state = {
    userAnswer: "",
    questions: [],
    currentQuestionIndex: 0
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  showAnswer = () => {
    document.getElementById("banana").style.display = "block";
    console.log("pressed");
  };

  fetchQuestions = async () => {
    const { data } = await axios.get(`${baseURL}/api/getOpenQuestions`);
    this.setState({ questions: data }, () => console.log(this.state));
  };

  render() {
    const { userAnswer, questions, currentQuestionIndex } = this.state;
    const { question, answer } = questions[currentQuestionIndex] || {};
    return (
      <div>
        <p> Question 1 out of {questions.length} </p>

        <strong>Short Answer Question</strong>
        <div className="questionBox">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>{question}</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
          <div>
            <button onClick={this.showAnswer} style={{ float: "right" }}>
              submit
            </button>
          </div>
          <div id="banana" style={{ display: "none" }}>
            {answer}
          </div>
        </div>
      </div>
    );
  }
}
