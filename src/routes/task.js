import express from "express";
import Task from "../models/TaskModel.js";

const router = express.Router();

//GET All Route
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

//GET Count Router
router.get("/count/to-do", async (req, res) => {
  const count = await Task.find()
    .count({}, (err, count) => {
      if (err) console.log(err);
      else return count;
    })
    .clone();
  res.send(`${count}`);
});

router.get("/count/important", async (req, res) => {
  const count = await Task.find({ important: true })
    .count({}, (err, count) => {
      if (err) console.log(err);
      else return count;
    })
    .clone();
  res.send(`${count}`);
});

router.get("/count/today", async (req, res) => {
  const count = await Task.find({ date: new Date().toLocaleDateString() })
    .count({}, (err, count) => {
      if (err) console.log(err);
      else return count;
    })
    .clone();
  res.send(`${count}`);
});

console.log(new Date().toJSON());

//POST Route
router.post("/", (req, res) => {
  const date = new Date(req.body.date).toLocaleDateString();
  new Task({
    title: req.body.title,
    important: req.body.important,
    date: date,
    tag: req.body.tag,
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
