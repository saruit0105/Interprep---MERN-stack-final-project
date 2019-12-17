import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import "./Quiz.page.css";
import "./Quiz.page.scss";

class Quiz extends Component {
  state = {
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: "",
    currentSolution: "",
    correctAnswerCount: 0,
    submited: false
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

  handleAnswer = e => !this.state.submited && this.setState({ currentAnswer: e.target.value });

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

  render() {
    const { questions, currentQuestionIndex, submited, currentAnswer, correctAnswerCount } = this.state;
    const { question, answers } = questions[currentQuestionIndex] || {};
    const isFinalQuestion = currentQuestionIndex === questions.length - 1;
    return (
      <div>
        <p>
          <bold>{question}</bold>
        </p>
        {this.choicePicked()}
        <form className="form" onSubmit={this.handleSubmit}>
          {(answers || []).map(answer => (
            <div className="inputGroup">
              <input checked={answer === currentAnswer} id="radio1" name="radio" onChange={this.handleAnswer} type="radio" label={answer} />
              {answer}
            </div>
          ))}
          <input type="submit" value="Submit!" />
        </form>

      
  
  

            




        {submited && !isFinalQuestion && <button onClick={this.nextQuestion}>Next Question</button>}
        {submited && isFinalQuestion && (
          <button onClick={() => alert(`You got ${correctAnswerCount} correct out of ${questions.length}`)}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default withRouter(Quiz);
