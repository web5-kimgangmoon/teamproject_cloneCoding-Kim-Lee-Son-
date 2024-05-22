import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

import router from "./controllers/index.js";
import { sequelize } from "./models/index.js";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors({ origin: [/localhost\:?\d*/, /127.0.0.1\:?\d*/], credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "test"));

app.use(router);
const force = true;

try {
  await sequelize.sync({ force });
} catch (error) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
