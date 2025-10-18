import express from "express";
import dotenv from "dotenv";
import helmetConfig from "./middlewares/helmet";
import helmet from "helmet";
import bodyParser from "body-parser";
import authRoutes from "./routers/auth.route";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cors({
  origin: [process.env.Frontend_URL],       //*  Add your frontend url here.
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
})); 

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running at PORT : ${PORT}`);
})


