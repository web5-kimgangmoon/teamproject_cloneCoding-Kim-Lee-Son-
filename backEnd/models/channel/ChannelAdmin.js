import { Model, DataTypes } from "sequelize";

export default class ChannelAdmin extends Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        channelId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        super_admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "ChannelAdmin",
        tableName: "channel_admin",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({}) {}
}
