import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class ReactQuestions extends Component {
    render() {
        return (
            <div>
                <div>
        <p> Question 1 out of 5</p>
        
        <strong>React Question</strong>
        <div className="questionBox">
          <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>What is the meaning of Life?</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
          </Form>
            
        </div>
      </div>
            </div>
        )
    }
}
