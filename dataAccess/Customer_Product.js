const sequelizeConnection = require("./da");
const Sequelize = require("sequelize");
const Customer_Product = sequelizeConnection.define("Customer_Product", {});
module.exports = Customer_Product;
