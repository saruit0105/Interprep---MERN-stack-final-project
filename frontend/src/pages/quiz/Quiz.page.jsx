import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./Quiz.page.css";

class Quiz extends Component {
  state = {
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: "",
    currentSolution: "",
    correctAnswerCount: 0,
    submited: false,
    pickingDifficulty: true,
    difficultySubmitted: false,
    difficulty: ""
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { match } = this.props;
    const { category, subcategory = "" } = match.params;
    const { data } = await axios.get(`${baseURL}/api/questions/${category}/${subcategory}`);
    this.setState({ questions: data });
  };

  handleAnswer = e => {
    if (!this.state.submited && !this.state.pickingDiffculty) {
      this.setState({ currentAnswer: e.target.value });
    }
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

  nextQuestion = () =>
    this.setState(prevState => ({
      currentAnswer: "",
      currentSolution: "",
      correct: false,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      submited: false
    }));

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

  handleDifficulty = (e, difficultyPicked) => {
    e.preventDefault();
    this.setState({
      difficulty: difficultyPicked,
      pickingDifficulty: !this.state.pickingDifficulty,
      difficultySubmitted: !this.state.difficultySubmitted
    });
    console.log(this.state);
  };

  difficultyBox = () => {
    const { difficultySubmitted } = this.state;
    if (!difficultySubmitted) {
      return (
        <>
          <h1> Please pick a difficulty</h1>
          <button onClick={e => this.handleDifficulty(e, "easy")}> Easy </button>
          <button onClick={e => this.handleDifficulty(e, "medium")}> Medium </button>
          <button onClick={e => this.handleDifficulty(e, "hard")}> Difficult</button>
        </>
      );
    }
  };

  finalQuestion = () => {
    const { questions, currentQuestionIndex, submited, correctAnswerCount, difficulty } = this.state;
    let isFinalQuestion;
    if (difficulty === "easy") {
      isFinalQuestion = currentQuestionIndex === 4;
    } else if (difficulty === "medium") {
      isFinalQuestion = currentQuestionIndex === 9;
    } else if (difficulty === "hard") {
      isFinalQuestion = currentQuestionIndex === 19;
    } else isFinalQuestion = currentQuestionIndex === questions.length - 1;
    return (
      <div>
        {submited && !isFinalQuestion && <button onClick={this.nextQuestion}>Next Question</button>}
        {submited && isFinalQuestion && (
          <button onClick={() => alert(`You got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}`)}>
            {" "}
            Finish{" "}
          </button>
        )}
      </div>
    );
  };

  render() {
    const { questions, currentQuestionIndex, submited, currentAnswer, correctAnswerCount, diffculty } = this.state;
    const { question, answers } = questions[currentQuestionIndex] || {};
    const isFinalQuestion = currentQuestionIndex === questions.length - 1;
    return (
      <div>
        {this.difficultyBox()}
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
        {/* {submited && !isFinalQuestion && <button onClick={this.nextQuestion}>Next Question</button>}
        {submited && isFinalQuestion && (
          <button onClick={() => alert(`You got ${correctAnswerCount} correct out of ${questions.length}`)}>
            Finish
          </button>
        )} */}
        {this.finalQuestion()}
      </div>
    );
  }
}

export default withRouter(Quiz);
