// sequelize.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: process.env.HOST,
  username: process.env.USER,
  password:  process.env.PASS,
  database:  process.env.DATABASE,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
