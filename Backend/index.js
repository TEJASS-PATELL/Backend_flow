import express from "express";
import { strictLimiter } from "./lib/rateLimiter";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.route";
import middlewares from "./middlewares/middlewares";

const app = express();
dotenv.config();
app.set("trust proxy", 1);
middlewares(app);
app.use("/api/auth", strictLimiter, authRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running at PORT : ${PORT}`);
})


