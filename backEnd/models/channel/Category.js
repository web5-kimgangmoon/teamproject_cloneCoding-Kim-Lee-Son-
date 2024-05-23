import { Model, DataTypes } from "sequelize";

export default class Category extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
        engTitle: {
          type: DataTypes.STRING(32),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "category",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Category, Board, Channel }) {
    Category.hasMany(Board, { foreignKey: "categoryId" });
    Category.belongsTo(Channel, {
      foreignKey: "channelId",
      targetKey: "id",
      // onUpdate: "cascade",
      // onDelete: "set null",
    });
  }
}

// ALTER TABLE channel DROP COLUMN 1
// DELETE FROM channel WHERE id=1;
// UPDATE user SET id=2 WHERE id=1;
