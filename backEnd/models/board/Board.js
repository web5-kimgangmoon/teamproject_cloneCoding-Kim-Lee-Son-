import { Model, DataTypes } from "sequelize";

export default class Board extends Model {
  static init(sequelize) {
    return super.init(
      {
        viewPoint: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        title: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        contents: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        notice: {
          type: DataTypes.BOOLEAN,
        },
        superNotice: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        modelName: "Board",
        tableName: "board",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ User, Board, Category, BoardLike, Comment, BoardDislike }) {
    Board.hasMany(BoardLike, { foreignKey: "boardId" });
    Board.hasMany(BoardDislike, { foreignKey: "boardId" });
    Board.hasMany(Comment, {
      // as: "boardCt",
      foreignKey: "boardId",
    });

    Board.belongsTo(User, { foreignKey: "userId" });
    Board.belongsTo(Category, { foreignKey: "categoryId" });
  }
}
