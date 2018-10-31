const sequelizeConnection = require("./da");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Customer = sequelizeConnection.define("customer", {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  phone: { type: Sequelize.STRING },
  logIn: { type: Sequelize.STRING },
  seller: { type: Sequelize.STRING }
});
module.exports = Customer;
