import { Model, DataTypes } from "sequelize";

export default class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
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
  static associate({ User, Board, Comment }) {
    Comment.belongsTo(User, { foreignKey: "userId" });
    Comment.belongsTo(Board, { foreignKey: "boardId" });

    Comment.hasMany(Comment, { as: "children", foreignKey: "recommentId" });
    Comment.belongsTo(Comment, { as: "parent", foreignKey: "recommentId" });
  }
}
