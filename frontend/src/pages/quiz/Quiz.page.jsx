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
    const { category, subcategory, difficulty = "" } = match.params;
    // eslint-disable-next-line
    const { data } = await axios.get(`${baseURL}/api/questions/${category}/${subcategory}/${difficulty}`);
    this.setState({ questions: data });
    console.log(this.state);
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

  finalQuestion = () => {
    const { questions, currentQuestionIndex, submited, correctAnswerCount,  } = this.state;
    let isFinalQuestion = currentQuestionIndex === questions.length - 1;
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

  addScore = () => {
    const { currentQuestionIndex, correctAnswerCount } = this.state;
    alert(`You got ${correctAnswerCount} correct out of ${currentQuestionIndex + 1}`);
  };

  render() {
    const { questions, currentQuestionIndex, currentAnswer } = this.state;
    const { question, answers } = questions[currentQuestionIndex] || {};
    return (
      <div  className="body">
        {/* {this.difficultyBox()} */}
        {/* <p>
          <strong>{question}</strong>
        </p> */}
        {this.choicePicked()}
        

      {/* This Version works */}


        {/* <form className="form" onSubmit={this.handleSubmit}>
          {(answers || []).map(answer => (
            <div className="answer">
              <input checked={answer === currentAnswer}  name="radio" onChange={this.handleAnswer} type="radio" value={answer} />
              {answer}
            </div>
          ))}
          <input type="submit" value="Submit!" />
        </form> */}

 {/* This Version doesn't work */}
 <h2>{question}</h2>
<form class="form" onSubmit={this.handleSubmit}>
      
      {(answers || []).map((answer,index)=>( 
        <div class="inputGroup">
    <input id={index} name="radio" type="radio" onChange={this.handleAnswer}  value={answer} checked={answer === currentAnswer}/>
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
