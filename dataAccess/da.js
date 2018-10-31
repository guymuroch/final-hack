const Sequelize = require("sequelize");

class dbConnect {
  constructor() {
    this.sequelize = new Sequelize(
      "mysql://guymuroch:179365477@35.224.144.210/finalHackton"
    );
  }
}
const sequelizeConnection = new dbConnect().sequelize;

module.exports = sequelizeConnection;
