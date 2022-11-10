const { Sequelize } = require('sequelize')

const productModel = require('../models/products')
const reviewModel = require('../models/reviews')
const userModel = require('../models/users')
const orderModel = require('../models/orders')

const sequelize = new Sequelize(
  'railway',
  'root',
  '6mRTwBY7gwgWkZL7npVE',
  {
    host: 'containers-us-west-106.railway.app',
    dialect: 'mysql',
    port: 6797,
    logging: false
  }
)

const models = [ productModel, reviewModel, userModel, orderModel ]

for(let model of models)
  model(sequelize)

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
orders.belongsTo(users); // Relation: Order has one user
orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize