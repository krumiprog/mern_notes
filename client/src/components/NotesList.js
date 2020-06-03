import React, { Component } from 'react';
import axios from 'axios';

import NoteCard from './NoteCard';

class NotesList extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/notes/')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteNote = id => {
    axios.delete('http://localhost:5000/notes/' + id).then(res => {
      console.log(res.data);
    });

    this.setState({
      notes: this.state.notes.filter(note => note._id !== id)
    });
  };

  notesList = () => {
    return this.state.notes.map(note => {
      return (
        <NoteCard key={note._id} note={note} deleteNote={this.deleteNote} />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Notes list</h1>
        <div>{this.notesList()}</div>
      </div>
    );
  }
}

export default NotesList;
