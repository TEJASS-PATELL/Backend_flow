import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import helmetConfig from "./helmet.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const middlewares = (app) => {
app.use(express.json({ limit: "10kb" })); //! convert frontend data so backend read that easily.
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(helmetConfig);    //* used for incresing security by automatically setting HTTP headers.
app.use(compression());
app.use(cors({
  origin: [process.env.Frontend_URL],       //*  Add your frontend url here.
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
})); 
}

export default middlewares;