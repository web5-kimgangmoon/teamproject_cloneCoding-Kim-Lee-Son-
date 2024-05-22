import { Model, DataTypes } from "sequelize";

export default class Comment extends Model {
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
        recommentId: {
          type: DataTypes.INTEGER,
        },
        contents: {
          type: DataTypes.STRING(1000),
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "comment",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({}) {}
}
