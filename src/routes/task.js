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
  new Task({
    title: req.body.title,
    important: req.body.important,
    date: req.body.date,
  }).save();
  res.send("Successfully added new task");
});

//PATCH Route
router.patch("/:taskId", async (req, res) => {
  const id = req.params.taskId;
  const updates = req.body;
  await Task.findByIdAndUpdate(id, updates, { new: true });
  res.send("Successfully updating task");
});

//DELETE Route
router.delete("/:taskId", async (req, res) => {
  await Task.findByIdAndDelete({ _id: req.params.taskId });
  res.send("Successfully deleteing task");
});

export default router;
