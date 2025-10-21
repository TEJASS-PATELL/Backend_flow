import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { UserData } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/data", authMiddleware, UserData);

export default router;