import { Model, DataTypes } from "sequelize";

export default class BoardDislike extends Model {
  static init(sequelize) {
    return super.init(
      {
        dislike: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        modelName: "BoardDislike",
        tableName: "board_dislike",
        underscored: true,
        updatedAt: false,
      }
    );
  }
  static associate({ User, Board, BoardDislike }) {
    BoardDislike.belongsTo(Board);
    BoardDislike.belongsTo(User, { foreignKey: "userId" });
  }
}
