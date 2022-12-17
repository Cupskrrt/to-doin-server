import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Task } from "./models/TaskModel.js";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5011;

app.get("/task", async (req, res) => {
  const decks = await Task.find();
  res.json(decks);
});

app.post("/task", async (req, res) => {
  console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
  });

  const createdTask = await newTask.save();
  res.json(createdTask);
});

app.delete("/task/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const task = await Task.findByIdAndDelete(taskId);
  res.json(task);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`listening on port ${PORT}`);

  app.listen(PORT);
});
