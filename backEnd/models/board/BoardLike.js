import { Model, DataTypes } from "sequelize";

export default class BoardLike extends Model {
  static init(sequelize) {
    return super.init(
      {
        like: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        modelName: "BoardLike",
        tableName: "board_like",
        underscored: true,
        updatedAt: false,
      }
    );
  }
  static associate({ User, Board, BoardLike }) {
    BoardLike.belongsTo(Board, { foreignKey: "boardId" });
    BoardLike.belongsTo(User, { foreignKey: "userId" });
  }
}
