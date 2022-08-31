const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to the db

const sequelizeConnection = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      "Vtz%u61oF,4j]D.PwZ]:gs@?!ovIab4P}vG-z,x2Yi#v,kf0lH",
      {
        host: `localhost`,
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelizeConnection;
