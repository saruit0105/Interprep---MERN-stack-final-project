import React, { Component } from "react";

class QuestionBox extends Component {
  render() {
    return (
      <div>
        <div>
          <strong>
            {this.props.randomQuestion
              ? this.props.randomQuestion.question
              : ""}
          </strong>
          {this.props.choicePicked()}
          {this.props.randomQuestion &&
            this.props.randomQuestion.answers.map(eachAnswers => (
              <div className="questionBox">
                <div key={this.props.randomQuestion.answers}>
                  <span
                    onClick={e =>
                      this.props.pickHandler(
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
