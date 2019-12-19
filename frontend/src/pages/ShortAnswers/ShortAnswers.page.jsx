import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./ShortAnswers.page.css";
import PEN_BADGE from "../../images/ShortBadge.png";

export default class ShortAnswers extends Component {
  static contextType = UserContext;
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

  handleFormInput = e => {
    e.preventDefault();
    this.setState({ userAnswer: e.target.value });
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
    const { currentUser } = this.context;
    let { badges } = currentUser;
    badges = PEN_BADGE;
    currentUser.badges = [...currentUser.badges, badges];
    this.handleUpdate(currentUser);
    alert("Good job! We hope this helped prepare you for an interview, have a badge for your hard work :)");
    this.setState({ done: !this.state.done });
  };

  handleUpdate = async updatedData => {
    await axios.post(`${baseURL}/api/update`, updatedData, { withCredentials: true });
  };

  render() {
    const { userAnswer, questions, currentQuestionIndex, counter } = this.state;
    const { question } = questions[currentQuestionIndex] || {};
    return (
      <div className="body">
        <div>
          <p>
            Question {counter} out of {questions.length}
          </p>
          <div className="questionBox">
            <h3>{question}</h3>
            <form className="form">
              <input type="text" onChange={this.handleFormInput} value={userAnswer} />
            </form>
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
