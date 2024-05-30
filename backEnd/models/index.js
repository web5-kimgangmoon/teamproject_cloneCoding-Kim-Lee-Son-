import { Sequelize } from "sequelize";
import mySQLConfig from "../config/config.json" assert { type: "json" };

import BoardModel from "./board/Board.js";
import BoardLikeModel from "./board/BoardLike.js";
import BoardDislikeModel from "./board/BoardDislike.js";

import CommentModel from "./board/Comment.js";

import CategoryModel from "./channel/Category.js";
import ChannelAdminsModel from "./channel/ChannelAdmin.js";
import ChannelsModel from "./channel/Channel.js";

import UserModel from "./user/User.js";

const env = process.env.NODE_ENV || "development";
const config = mySQLConfig[env];

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

export const Board = BoardModel.init(sequelize);
export const BoardLike = BoardLikeModel.init(sequelize);
export const BoardDislike = BoardDislikeModel.init(sequelize);
export const Comment = CommentModel.init(sequelize);

export const Category = CategoryModel.init(sequelize);
export const ChannelAdmin = ChannelAdminsModel.init(sequelize);
export const Channel = ChannelsModel.init(sequelize);

export const User = UserModel.init(sequelize);

const db = { Board, BoardLike, BoardDislike, Comment, Category, ChannelAdmin, Channel, User };
// const db = {};

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { Sequelize };

export default db;
