import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
  title: String,
});

export const Task = mongoose.model("Task", TaskSchema);
