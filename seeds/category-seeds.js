//
// const sequelize = require('../config/connection');
const sequelize = require('sequelize');
const { Category } = require('../models/');

const categorySeedData = require('./categorySeedData.json');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

// const seedCategories1 = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     const cat = await Category.bulkCreate(categorySeedData);
//     return cat
//     // process.exit(0);
//   } catch (err) { 
//     res.json(500).json(err);
//   }
// };

// module.exports = seedCategories1;
module.exports = seedCategories;
// module.exports = Category;
