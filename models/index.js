// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDeleted: 'CASCADE',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//ProductTag has many products & tags
// ProductTag.hasMany(Product, Tag, {
//   foreignKey: 'product_id',
//   foreignKey: 'tag_id',
//   onDelete: 'CASCADE',
// });

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(ProductTag, {
//   foreignKey: '',
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(ProductTag, {
//   foreignKey: '',
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
