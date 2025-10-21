import express from "express";
import { login, signup, logout, sendVerifyOtp, verifyEmail, isauth, sendPasswordResetOtp, resetPassword, deleteAccount } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/send-verify-otp", authMiddleware, sendVerifyOtp);
router.post("/verify-account", authMiddleware, verifyEmail);
router.post("/is-auth", authMiddleware, isauth);
router.post("/send-reset-otp", authMiddleware, sendPasswordResetOtp);
router.post("/reset-password", authMiddleware, resetPassword);
router.delete("/reset-password", authMiddleware, deleteAccount);

export default router;
