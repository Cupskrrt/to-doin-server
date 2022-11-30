import express from 'express';
import mongoose from 'mongoose';
import {Task} from './models/TaskModel.js';

const app = express();
app.use(express.json());

const PORT = 5011;

app.get('/task', (req, res) => {
  res.send('Hello World');
});

app.post('/task', async (req, res) => {
  console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
  });

  const createdTask = await newTask.save();
  res.json(createdTask);
});

mongoose
  .connect(
    'mongodb+srv://to-doin:e9aOFJhsJKGIWRx7@to-doin.fbwll9v.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);

    app.listen(PORT);
  });
