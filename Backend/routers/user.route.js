import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { UserData } from "../controllers/user.controller";

const router = express.Router();

router.get("/data", authMiddleware, UserData);