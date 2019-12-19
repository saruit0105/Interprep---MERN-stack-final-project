import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { baseURL } from "../../config";
import "./ShortAnswers.page.css";

export default class ShortAnswers extends Component {
  state = {
    userAnswer: "",
    questions: [],
    currentQuestionIndex: 0
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  showAnswer = (e) => {
    e.preventDefault()
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
      <div className="body">
      <p> Question 1 out of {questions.length} </p>

      <div className="questionBox">
        <Form className="form">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{question}</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <button onClick={this.showAnswer}>submit</button>
        </Form>
        
          <div></div>
        
        <div id="banana" style={{ display: "none" }}>
          Hellooo
          {answer} 
        </div>
      </div>
    </div>
    );
  }
}
