import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

//Routes
import taskRoute from "./routes/taskRoute.js";
import tagRoute from "./routes/tagRoute.js";

//Start the DOTENV
config();

//Express Config
const app = express();
app.use(express.json());
app.use(cors());

//DOTENV Config
const port = process.env.PORT || 3000;

//API Route
app.get("/", (req, res) => {
  res.send("to-doin API Homepage");
});

app.use("/api/task", taskRoute);
app.use("/api/tag", tagRoute);

//Start the server
app.listen(port, () => {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB");
  });
  console.log(`Listening on port ${port}`);
});
