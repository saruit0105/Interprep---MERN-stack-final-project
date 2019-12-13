import React, { Component } from "react";

class QuestionBox extends Component {
  state = {
    picked: false,
    isCorrect: false
  };

  pickHandler = (e, eachAnswers, solution) => {
    e.preventDefault();
    console.log(solution);
    console.log(eachAnswers);
    let questionCheck = false;
    eachAnswers === solution ? (questionCheck = true) : (questionCheck = false);
    this.setState({
      picked: !this.state.picked,
      isCorrect: questionCheck
    });
    console.log(this.state);
  };
  choicePicked = () => {
    if (this.state.picked === true && this.state.isCorrect === true) {
      return (
        <div>
          <p>wow you are right! </p>
          <button> Next Question</button>
        </div>
      );
    } else {
      return (
        <div>
          <p> Choose the correct answer below</p>
          <button> Next Question</button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <strong>
            {this.props.randomQuestion
              ? this.props.randomQuestion.question
              : ""}
          </strong>
          {this.choicePicked()}
          {this.props.randomQuestion &&
            this.props.randomQuestion.answers.map(eachAnswers => (
              <div className="questionBox">
                <div key={this.props.randomQuestion.answers}>
                  <span
                    onClick={e =>
                      this.pickHandler(
                        e,
                        eachAnswers,
                        this.props.randomQuestion.solution
                      )
                    }
                  >
                    <button></button>
                    {eachAnswers}
                  </span>
                </div>
                <hr></hr>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default QuestionBox;
