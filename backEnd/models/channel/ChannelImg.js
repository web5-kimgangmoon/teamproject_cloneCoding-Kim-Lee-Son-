import { Model, DataTypes } from "sequelize";

export default class ChannelImg extends Model {
  static init(sequelize) {
    return super.init(
      {
        channelId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        path: {
          type: DataTypes.STRING(300), // 이미지 설정안했을때(NULL) 기본이미지 넣어지게
        },
      },
      {
        sequelize,
        modelName: "ChannelImg",
        tableName: "Channel_img",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({}) {}
}
