import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// Routes
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running on port 3000!!!");
});

app.use("/api/user", userRoutes);
app.use("/api/user", authRoutes);
