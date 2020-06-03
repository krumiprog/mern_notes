import React from 'react';

import { Card, Button } from 'react-bootstrap';

function NoteCard(props) {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">{props.note.task}</Card.Header>
      <Card.Body>
        <Card.Text>{props.note.description}</Card.Text>
        <Button
          className="float-right"
          variant="danger"
          onClick={() => props.deleteNote(props.note._id)}
        >
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {props.note.date.substring(0, 10)}
      </Card.Footer>
    </Card>
  );
}

export default NoteCard;
