import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { payment } from "../controllers/payment.controller";

const router = express.Router();

router.post("/", authMiddleware, payment);

export default module;