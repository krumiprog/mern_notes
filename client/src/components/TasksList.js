import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import TaskItem from './TaskItem';

class TasksList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/tasks/')
      .then(res => {
        this.setState({ tasks: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteTask = id => {
    axios.delete('http://localhost:5000/tasks/' + id).then(res => {
      console.log(res.data);
    });

    this.setState({
      tasks: this.state.tasks.filter(task => task._id !== id)
    });
  };

  tasksList = () => {
    return this.state.tasks.map(task => {
      return (
        <TaskItem key={task._id} task={task} deleteTask={this.deleteTask} />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Task Name</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>{this.tasksList()}</tbody>
        </Table>
      </div>
    );
  }
}

export default TasksList;
