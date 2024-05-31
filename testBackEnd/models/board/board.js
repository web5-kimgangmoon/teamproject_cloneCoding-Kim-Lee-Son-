import { Model, DataTypes } from "sequelize";

export default class Board extends Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: "board",
        tableName: "Board",
      }
    );
  }
}
