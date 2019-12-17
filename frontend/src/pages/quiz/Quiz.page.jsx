import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./Quiz.page.css";
import { UserContext } from "../../context/UserContext";
class Quiz extends Component {
  static contextType = UserContext;
  state = {
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: "",
    currentSolution: "",
    correctAnswerCount: 0,
    submited: false,
    counter: 1,
    done: false
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { currentUser } = this.context;

    const { match } = this.props;
    const { category, subcategory, difficulty = "" } = match.params;
    const { data } = await axios.get(`${baseURL}/api/questions/${category}/${subcategory}/${difficulty}`);
    this.setState({ questions: data });
    console.log(this.state);
    console.log(currentUser);
  };

  handleAnswer = e => {
    !this.state.submited && this.setState({ currentAnswer: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { questions, currentQuestionIndex, currentAnswer, correctAnswerCount } = this.state;
    const { solution } = questions[currentQuestionIndex] || {};
    const correct = solution === currentAnswer;
    this.setState({
      submited: true,
      correct,
      currentSolution: solution,
      ...(correct && { correctAnswerCount: correctAnswerCount + 1 })
    });
  };

  nextQuestion = () => {
    let nextCount = this.state.counter + 1;
    this.setState(prevState => ({
      currentAnswer: "",
      currentSolution: "",
      correct: false,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      submited: false,
      counter: nextCount
    }));
  };

  choicePicked = () => {
    const { submited, correct, currentSolution } = this.state;
    if (!submited)
      return (
        <div>
          <p> Choose the correct answer below</p>
        </div>
      );
    const [solutionClass, solutionLabel] = correct
      ? ["correct", "wow you are right!"]
      : ["incorrect", `Sorry, that's the wrong answer, the correct answer is - ${currentSolution}`];
    return <p className={solutionClass}>{solutionLabel}</p>;
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
    const { currentQuestionIndex, correctAnswerCount, done, questions } = this.state;
    const { currentUser } = this.context;
    const { points } = currentUser;
    if (correctAnswerCount / questions.length === 1) {
      alert("this is a perfect score, you have been awarded 10 points");
      this.handleUpdate(points + 5);
    } else {
      alert(`You got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}`);
    }
    this.setState({ done: !done });
  };

  handleUpdate = async formData => {
    await axios.post(`${baseURL}/api/update`, updatedData, { withCredentials: true });
  };

  handleHomeClick = () => {};

  addScore = () => {
    const { currentQuestionIndex, correctAnswerCount } = this.state;
    alert(`You got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}`);
  };

  render() {
    const { questions, currentQuestionIndex, currentAnswer } = this.state;
    const { question, answers } = questions[currentQuestionIndex] || {};
    return (
      <div>
        <p>
          Question {this.state.counter} out of {this.state.questions.length}
        </p>
        <p>
          <bold>{question}</bold>
        </p>
        {this.choicePicked()}
        <form className="quiz-form" onSubmit={this.handleSubmit}>
          {(answers || []).map(answer => (
            <div className="quiz-question">
              <input checked={answer === currentAnswer} onChange={this.handleAnswer} type="radio" value={answer} />
              {answer}
            </div>
          ))}
          <input type="submit" value="Submit!" />
        </form>
        {this.finalQuestion()}
      </div>
    );
  }
}

export default withRouter(Quiz);
