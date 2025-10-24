import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { payment } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/", authMiddleware, payment);

export default router;