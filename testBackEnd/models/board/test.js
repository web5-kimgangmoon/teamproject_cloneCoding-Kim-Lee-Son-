import { Model, DataTypes } from "sequelize";

export default class Test extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(30),
        },
        content: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "Test",
        tableName: "test",
        timestamps: false,
        underscored: true,
        paranoid: false,
      }
    );
  }

  static associate(db) {
    // db.Board.belongsTo(Category, {
    //   foreignKey: "id",
    //   targetKey: "id",
    //   onDelete: "CASCADE",
    //   onUpdate: "NULL",
    // });
  }
}
