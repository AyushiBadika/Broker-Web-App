import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running on port 3000!!!");
});
