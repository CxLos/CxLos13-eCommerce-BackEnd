//
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, 
      category_name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      // products: {
      //   id: {
      //     type: DataTypes.INTEGER,
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
    // title: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     is: ['[a-z]','i'],        // will only allow letters
    //     max: 23,                  // only allow values <= 23
    //     isIn: {
    //       args: [['en', 'zh']],
    //       msg: "Must be English or Chinese"
    //     }
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
