const express = require('express');
const router = express.Router();

const Task = require('../models/task_md');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const NewTask = new Task({ name });

  NewTask.save()
    .then(() => res.json('Task has been added.'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task has been deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
