import express from "express";
import Tag from "../models/TagModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tags = await Tag.find();
  res.send(tags);
});

router.post("/", (req, res) => {
  new Tag({
    title: req.body.title,
    name: `#${req.body.name}`,
    color: req.body.color,
  }).save();
  res.send("Successfully added new tag");
});

router.delete("/:tagId", async (req, res) => {
  await Tag.findByIdAndDelete({ _id: req.params.tagId });
  res.send("Successfully deleting tag");
});

export default router;
