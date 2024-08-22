require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DATA BASE CONNECTED");
  })
  .catch((error) => {
    console.log("FAILED TO CONNECT TO DATABASE", error);
  });
module.exports = sequelize;
