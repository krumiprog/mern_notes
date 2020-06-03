import React, { Component } from 'react';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

class CreateTask extends Component {
  state = {
    name: ''
  };

  onChangeTaskName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const task = {
      name: this.state.name
    };

    axios
      .post('http://localhost:5000/tasks/add', task)
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Create Task</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              value={this.state.name}
              onChange={this.onChangeTaskName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateTask;
