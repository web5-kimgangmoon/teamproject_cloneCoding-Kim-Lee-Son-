import { Model, DataTypes } from "sequelize";

export default class ChannelAdmin extends Model {
  static init(sequelize) {
    return super.init(
      {
        superAdmin: {
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
  static associate({ User, ChannelAdmin, Channel }) {
    ChannelAdmin.belongsTo(User, { foreignKey: "userId" });
    ChannelAdmin.belongsTo(Channel, { foreignKey: "channelId" });
  }
}
