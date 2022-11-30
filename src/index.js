import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {Task} from './models/TaskModel.js';
import {config} from 'dotenv';
config();

const app = express();
app.use(express.json());
app.use(cors())

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

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`listening on port ${PORT}`);

  app.listen(PORT);
});
