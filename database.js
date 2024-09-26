const { Sequelize } = require('sequelize');

// Setting up SQLite as the database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;