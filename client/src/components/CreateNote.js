import React, { Component } from 'react';
import axios from "axios";

import { Form, Button } from 'react-bootstrap';

class CreateNote extends Component {
  state = {
    task: '',
    description: '',
    date: new Date(),
    tasks: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/tasks/')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            tasks: res.data.map(task => task.name),
            task: res.data[0].name
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeTask = e => {
    this.setState({
      task: e.target.value
    });
  };

  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const note = {
      task: this.state.task,
      description: this.state.description,
      date: this.state.date
    };

    axios
      .post('http://localhost:5000/notes/add', note)
      .then(res => console.log(res.data));

    this.setState({
      task: '',
      description: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Create Note</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control
              as="select"
              required
              value={this.state.task}
              onChange={this.onChangeTask}
            >
              {this.state.tasks.map(task => {
                return (
                  <option key={task} value={task}>
                    {task}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              value={this.state.description}
              onChange={this.onChangeDescription}
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

export default CreateNote;
