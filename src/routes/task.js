import express from "express";
import Task from "../models/TaskModel.js";

const router = express.Router();

//GET All Route
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

//GET Count Router
router.get("/count", async (req, res) => {
  const count = await Task.count({}, (err, count) => {
    if (err) console.log(err);
    else return count;
  }).clone();
  res.send("Count " + count);
});

//POST Route
router.post("/", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    important: req.body.important,
    date: req.body.date,
  }).save();
  res.send(newTask);
});

//PATCH Route
router.patch("/:taskId", async (req, res) => {
  const id = req.params.taskId;
  const updates = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
  res.send(updatedTask);
});

//DELETE Route
router.delete("/:taskId", async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete({ _id: req.params.taskId });
  res.send(deletedTask);
});

export default router;
