import express from "express";
import { login, signup, logout } from "../controllers/auth.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", authMiddleware, logout);

export default router;
