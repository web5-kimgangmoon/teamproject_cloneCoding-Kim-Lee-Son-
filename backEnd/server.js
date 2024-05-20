const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const router = require("./controllers");
const { sequelize, User } = require("./models");

const app = express();

app.use(morgan("dev"));

app.set("port", process.env.PORT || 3000);

app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
