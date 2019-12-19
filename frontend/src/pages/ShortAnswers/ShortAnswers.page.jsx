import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { baseURL } from "../../config";
import './ShortAnswers.page.css'

export default class ShortAnswers extends Component {
  state = {
    questions: null
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
    return (
      <div className="body">
        <strong>Short Answer Question</strong>
        <p> Question 1 out of 5</p>

        
        <div className="questionBox">
          <Form className="form">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What is the meaning of Life?</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            
          </Form>
          <div>
          <button onClick={this.showAnswer} >
              submit
            </button>
          </div>
          <div id="banana" style={{ display: "none" }}>
            the Meaning of life is to make a cool final project so Tommy can get you a job at carecloud
          </div>
        </div>
      </div>
    );
  }
}
