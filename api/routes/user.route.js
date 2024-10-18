import express from "express";
import { deleteUser, getUser, updateUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", getUser);
router.post("/update", verifyUser, updateUser);
router.delete("/delete", verifyUser, deleteUser);

export default router;
