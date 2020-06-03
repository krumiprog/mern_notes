const express = require('express');
const router = express.Router();

const Note = require('../models/note_md');

router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const task = req.body.task;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const NewNote = new Note({
    task,
    description,
    date
  });

  NewNote.save()
    .then(() => res.json('Note has been added'))
    .catch(err => res.status(400).json('Error :' + err));
});

router.route('/:id').delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note has been deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
