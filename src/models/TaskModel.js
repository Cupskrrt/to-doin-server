import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  important: Boolean,
  date: String,
  tag: String,
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
