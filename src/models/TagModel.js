import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  title: String,
  name: String,
});

const TagModel = mongoose.model("Tag", TagSchema);

export default TagModel;
