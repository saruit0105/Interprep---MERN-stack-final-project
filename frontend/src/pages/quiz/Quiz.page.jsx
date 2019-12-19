import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./Quiz.page.css";
import "./Quiz.page.scss";
import { UserContext } from "../../context/UserContext";
import PERFECT_JS_TROPHY from "../../images/PerfectJS.png";
import SECOND_JS_TROPHY from "../../images/SecondJS.png";
import PERFECT_REACT_TROPHY from "../../images/PerfectReact.png";
import SECOND_REACT_TROPHY from "../../images/SecondReact.png";
class Quiz extends Component {
  static contextType = UserContext;
  state = {
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: "",
    currentSolution: "",
    correctAnswerCount: 0,
    answerPicked: false,
    submited: false,
    counter: 1,
    done: false,
    difficulty: "",
    subcategory: ""
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { currentUser } = this.context;

    const { match } = this.props;
    const { category, subcategory, difficulty = "" } = match.params;
    const { data } = await axios.get(`${baseURL}/api/questions/${category}/${subcategory}/${difficulty}`);
    this.setState({ questions: data, difficulty: difficulty, subcategory: subcategory });
    console.log(this.state);
    console.log(currentUser);
    this.setState({
      points: currentUser.points
    });
  };

  handleAnswer = e => {
    !this.state.submited && this.setState({ currentAnswer: e.target.value, answerPicked: true});
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.answerPicked) {
      const { questions, currentQuestionIndex, currentAnswer, correctAnswerCount } = this.state;
      const { solution } = questions[currentQuestionIndex] || {};
      const correct = solution === currentAnswer;
      this.setState({
        submited: true,
        correct,
        currentSolution: solution,
        ...(correct && { correctAnswerCount: correctAnswerCount + 1 })
      });
    }
  };

  nextQuestion = () => {
    let nextCount = this.state.counter + 1;
    this.setState(prevState => ({
      currentAnswer: "",
      currentSolution: "",
      correct: false,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      submited: false,
      counter: nextCount,
      answerPicked: false
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
    return <h4 className={solutionClass}>{solutionLabel}</h4>;
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
    const { currentQuestionIndex, correctAnswerCount, done, questions, difficulty, subcategory } = this.state;
    const { currentUser } = this.context;
    let { badges } = currentUser;
    let { points } = currentUser;
    if (correctAnswerCount / questions.length === 1) {
      if (difficulty === "hard") {
        points = points + 10;
        alert("this is a perfect score, you have been awarded 10 points");
      } else if (difficulty === "medium") {
        points = points + 5;
        alert("this is a perfect score, you have been awarded 5 points");
      } else {
        points = points + 2;
        alert("this is a perfect score, you have been awarded 2 points");
      }
      subcategory === "general" ? (badges = PERFECT_JS_TROPHY) : (badges = PERFECT_REACT_TROPHY);
      currentUser.points = points;
      currentUser.badges = [...currentUser.badges, badges];
      this.handleUpdate(currentUser);
    } else if (correctAnswerCount / questions.length >= 0.8) {
      if (difficulty === "hard") {
        points = points + 8;
        alert("You passed but there is room for improvement, you have been awarded 8 points");
      } else if (difficulty === "medium") {
        points = points + 4;
        alert("You passed but there is room for improvement, you have been awarded 4 points");
      } else {
        points = points + 1;
        alert("You passed but there is room for improvement, you have been awarded 1 points");
      }
      subcategory === "general" ? (badges = SECOND_JS_TROPHY) : (badges = SECOND_REACT_TROPHY);
      currentUser.points = points;
      currentUser.badges = [...currentUser.badges, badges];
      this.handleUpdate(currentUser);
    } else {
      alert(`You only got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}, please try again. `);
    }
    this.setState({ done: !done });
  };

  handleUpdate = async updatedData => {
    await axios.post(`${baseURL}/api/update`, updatedData, { withCredentials: true });
  };

  addScore = () => {
    const { currentQuestionIndex, correctAnswerCount } = this.state;
    alert(`You got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}`);
  };

  render() {
    const { questions, currentQuestionIndex, currentAnswer,difficulty } = this.state;
    const { question, answers } = questions[currentQuestionIndex] || {};
    return (
      <div className="body">
        <p>Difficulty : {difficulty.toUpperCase()}</p>
        <p>
          Question {this.state.counter} out of {this.state.questions.length}
        </p>

        {this.choicePicked()}

        <h2>{question}</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          {(answers || []).map((answer, index) => (
            <div className="inputGroup">
              <input
                id={index}
                name="radio"
                type="radio"
                onChange={this.handleAnswer}
                value={answer}
                checked={answer === currentAnswer}
              />
              <label for={index}>{answer}</label>
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
