import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        strId: {
          type: DataTypes.STRING(32),
          unique: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        hashedPassword: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        nick: {
          type: DataTypes.STRING(16),
          unique: true,
          allowNull: false,
        },
        profileImg: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ User, Board, BoardLike, Comment, ChannelAdmin, BoardDislike }) {
    User.hasMany(Board, { foreignKey: "userId" });
    User.hasMany(BoardLike, { foreignKey: "userId" });
    User.hasMany(BoardDislike, { foreignKey: "userId" });

    User.hasMany(Comment, { foreignKey: "userId" });
    User.hasMany(ChannelAdmin, { foreignKey: "userId" });
  }
}
