import Sequelize from "sequelize";
import mysqlConfig from "./../config/config.json" assert { type: "json" };

import testModel from "./board/test.js";

const config = mysqlConfig["dev"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export { Sequelize };
export { sequelize };

export const Test = testModel.init(sequelize);

const db = { Test };

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
