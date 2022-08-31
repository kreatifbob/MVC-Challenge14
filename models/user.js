const { type } = require("os");
const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnection");

const bcrypt = require("bcrypt");

const User = sequelizeConnection.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 26],
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 26],
      },
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: "users",
    underscored: true,
  }
);

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.prototype.validatePassword = function (rawPassword) {
  console.log("this user password: ", this.password);
  return bcrypt.compare(rawPassword, this.password);
};

module.exports = User;
