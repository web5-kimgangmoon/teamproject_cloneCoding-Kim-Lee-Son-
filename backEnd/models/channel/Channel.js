import { Model, DataTypes } from "sequelize";

export default class Channel extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        engTitle: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        writePlaceholder: {
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
        imgPath: {
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
  static associate({ Channel, ChannelAdmin, Category, Board }) {
    Channel.hasMany(ChannelAdmin, { foreignKey: "channelId" });
    Channel.hasMany(Category, { sourceKey: "id", foreignKey: "channelId" });
    Channel.hasMany(Board, { sourceKey: "id", foreignKey: "channelId" });
  }
}
