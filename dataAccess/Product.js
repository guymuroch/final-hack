const sequelizeConnection = require("./da");
const Customer = require("./Customer");
const Sequelize = require("sequelize");
const Product = sequelizeConnection.define("product", {
  name: { type: Sequelize.STRING },
  price: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
  minValid: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});
module.exports = Product;
