import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class ShortAnswers extends Component {

    showAnswer=()=>{
        document.getElementById('banana').style.display = "block"
        console.log("pressed")
    }

    render() {
        return (
            <div>
                 <p> Question 1 out of 5</p>
        
        <strong>Short Answer Question</strong>
        <div className="questionBox">
          <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>What is the meaning of Life?</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
          </Form>
          <div>

          <button onClick={this.showAnswer} style={{float:'right'}}>submit</button>
          </div>
          <div id="banana" style={{display:'none'}}> 
              the Meaning of life is to make a cool final project so Tommy can get you a job at carecloud
          </div>
            
        </div>
      </div>
            
        )
    }
}
