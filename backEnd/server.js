import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

import router from "./controllers/index.js";
// import { Category, sequelize, User } from "./models/index.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));

app.set("port", process.env.PORT || 3000);

app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
