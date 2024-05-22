import { Model, DataTypes } from "sequelize";

export default class BoardLikeDislike extends Model {
  static init(sequelize) {
    return super.init(
      {
        boardId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        like: {
          type: DataTypes.TINYINT,
        },
        dislike: {
          type: DataTypes.TINYINT,
        },
      },
      {
        sequelize,
        modelName: "BoardLikeDislike",
        tableName: "Board_like_dislike",
        underscored: true,
        updatedAt: false,
        // timestamps: true,
      }
    );
  }
  static associate({}) {}
}
