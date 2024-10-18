import express from "express";
import { createListing, getUserListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.get("/listings", verifyToken, getUserListing);

export default router;
