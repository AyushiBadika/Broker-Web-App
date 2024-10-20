import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// Routes
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import listingRoutes from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 3001;

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/listing", listingRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/client/dist")));

console.log(path.join(__dirname, "../", "client", "dist", "index.html"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log("Server is running on port 3000!!!");
});
