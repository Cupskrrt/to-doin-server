import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  important: Boolean,
  date: String,
  tag: { type: mongoose.Schema.Types.ObjectId, ref: "Tag" },
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
