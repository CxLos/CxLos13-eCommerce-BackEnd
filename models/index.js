// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // foreignKeyConstraint: true,
  onDelete: 'CASCADE',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  foreignKeyConstraint: false,
});

//ProductTag has many products & tags
Tag.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

//ProductTag has many products & tags
ProductTag.belongsTo(Tag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

//ProductTag has many products & tags
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

//ProductTag has many products & tags
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

//ProductTag has many products & tags
// ProductTag.hasMany(Tag, {
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
