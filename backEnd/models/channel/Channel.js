import { Model, DataTypes } from "sequelize";

export default class Channel extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        writePaceholder: {
          type: DataTypes.STRING(2000),
        },
        commentPlaceholder: {
          type: DataTypes.STRING(1000),
        },
        description: {
          // 설명
          type: DataTypes.STRING(300),
        },
        iconPath: {
          type: DataTypes.STRING(300),
        },
      },
      {
        sequelize,
        modelName: "Channel",
        tableName: "channel",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({}) {}
}
