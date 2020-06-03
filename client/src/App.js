import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container'
import AppNavbar from './components/AppNavbar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateTask from './components/CreateTask';
import TaskList from './components/TasksList';


function App() {
  return (
    <Router>
      <AppNavbar />
      <Container>
        <Route path="/" exact component={NotesList} />
        <Route path="/notes" exact component={CreateNote} />
        <Route path="/tasks" exact component={CreateTask} />
        <Route path="/taskslist" exact component={TaskList} />
      </Container>
    </Router>
  );
}

export default App;
