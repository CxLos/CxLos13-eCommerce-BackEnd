const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
      // products: {
      //   references: {
      //     model: 'product',
      //     key: '',
      //   },
      //   product_name: {
      //     type: DataTypes.STRING,
      //   },
      //   price: {
      //     type: DataTypes.INTEGER,
      //   },
      //   stock: {
      //     type: DataTypes.INTEGER,
      //   },
      //   category_id: {
      //     type: DataTypes.INTEGER,
      //   },
      // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
