const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const tasksRouter = require('./routes/tasks');
const notesRouter = require('./routes/notes');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

app.use(cors())
app.use(express.json());
app.use('/tasks', tasksRouter);
app.use('/notes', notesRouter);

// mongoose.connect(db, { useNewUrlParser: true, useCreateInder: true });
// const connection = mongoose.connection
// connection.once('open', () => console.log('MongoDB connected...'))

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
